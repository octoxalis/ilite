const U_o = new Object( null )

U_o.tag_s = 'i'


U_o.entity_o =
{
  line_s:  '₀line₀',   //: null
  block_s: '₀block₀',  //: null
  grave_s: '₀grave₀',  //: &grave;
  apos_s:  '₀apos₀',   //: &apos;
  quot_s:  '₀quot₀',   //: &quot;

  amp_s:   '₀amp₀',    //: &amp;
  lt_s:    '₀lt₀',     //: &lt;
  gt_s:    '₀gt₀',     //: &gt;
}



U_o.regex_o =
{
  line_re:  /((?:^|\s)\/\/(.+?)$)/gms,  //: //Comment
  block_re: /(\/\*.*?\*\/)/gms,       //: /*Comment*/
  grave_re: /(`[^`]*`)/gms,           //: `String`
  apos_re:  /('[^']*')/gms,           //: 'String'
  quot_re:  /("[^"]*")/gms,           //: "String"

  num_re:   /__/gms,    //:
  res_re:   /__/gms,    //:
  loop_re:  /__/gms,    //:
  cont_re:  /__/gms,    //:
  type_re:  /__/gms,    //:
  var_re:   /__/gms,    //:
  punc_re:  /__/gms,    //:
  group_re: /__/gms,    //:
  op_re:    /__/gms,    //:
  prop_re:  /__/gms,    //:
}



U_o.store_o =
{
  apos_a:  [],
  quot_a:  [], 
  grave_a: [],
  line_a:  [],
  block_a: [],
}



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
  store_a
) =>
{
  let entity_s =
    U_o
      .entity_o[`${regex_s}_s`]
  let regex_re =
    U_o
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
) =>
{
  let entity_s = U_o.entity_o[`${regex_s}_s`]
  let regex_re = new RegExp( `${entity_s}([0-9]+)${entity_s}`, 'gms' )
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
              `<${U_o.tag_s} class="i_${regex_s}">${out_s}</${U_o.tag_s}>`
            )
      }
    )
  return [ code_s, store_a ]
}



U_o.exclude__s =  //: extract/restore quoted strings or comments
(
  way_s,    //: 'Out' | 'Back'
  code_s,
  store_o   //: empty when 'Out'
) =>
{
  ;[        //!!! order matters
    'line',
    'block',
    'grave',
    'apos',
    'quot',
  ]
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
            store_o[`${regex_s}`]
          )
      code_s =
        return_a[0]
      store_o[`${regex_s}`] =
        return_a[1]
   }
  )
  return [ code_s, store_o ]
}
