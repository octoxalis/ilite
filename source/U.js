const U_o = new Object( null )

U_o.TAG_s = 'i'
U_o.ENT_s = '₀'


U_o.raw__s =
(
  code_s
) =>
{
  return code_s
    .replace( /&lt;/g, '<' )
    .replace( /&gt;/g, '>' )
    .replace( /&amp;/g, '&' )
}
  


U_o.escape__s =  //: escape entities inside String
(
  code_s
) =>
  code_s
    .replace( />/g, U_o.mark_o.gt_s )
    .replace( /&/g, U_o.mark_o.amp_s )
    .replace( /</g, U_o.mark_o.lt_s )



U_o.takeOut__s =  //: extract quoted strings
(
  code_s,
  regex_s,
  store_a,
  config_o
) =>
{
  let entity_s =
    `${U_o.ENT_s}${regex_s}${U_o.ENT_s}`
  let regex_re =
    config_o
      .regex_o[`${regex_s}_re`]
  let index_n = -1
  ;[...code_s.matchAll( regex_re )]
    .forEach
    (
      match_a =>
      {
        const in_s =
          `${entity_s}${++index_n}${entity_s}`
        const out_s =
          match_a[0]
        code_s =
          code_s
            .replace
            (
              out_s,
              in_s
            )
        store_a
          .push( out_s )
      }
    )
  return [ code_s, store_a ]
}



U_o.takeBack__s =  //: restore quoted strings
(
  code_s,
  regex_s,
  store_a
  //-- config_o    //: not used
) =>
{
  let entity_s =
    `${U_o.ENT_s}${regex_s}${U_o.ENT_s}`
  let regex_re =
    new RegExp( `${entity_s}([0-9]+)${entity_s}`, 'gms' )
  ;[...code_s.matchAll( regex_re )]
    .forEach
    (
      match_a =>
      {
        const in_s =
          match_a[0]
        const out_s =
          `${store_a[+match_a[1]]}`    //: Number cast          
        code_s =
          code_s
            .replace
            (
              in_s,
              `<${U_o.TAG_s} class="i_${regex_s}">${out_s}</${U_o.TAG_s}>`
            )
      }
    )
  return [ code_s, store_a ]
}







U_o.exclude__s =  //: extract/restore quoted strings or comments
(
  way_s,    //: 'Out' | 'Back'
  code_s,
  store_o,   //: empty when 'Out'
  config_o,  //:
) =>
{
  config_o
    .exclude_a
    .forEach
    (
      regex_s =>
      {
        if ( !store_o[`${regex_s}`] )
        {
          store_o[`${regex_s}`] = []
        }
        let return_a =
          U_o
            [`take${way_s}__s`]
            (
              code_s,
              regex_s,
              store_o[`${regex_s}`],
              config_o
            )
        code_s =
          return_a[0]
        store_o[`${regex_s}`] =
          return_a[1]
     }
    )
  return [ code_s, store_o ]
}
