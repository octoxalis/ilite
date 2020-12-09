//=== I.js === iliter main module

const I_o =
{
  TAG_s  :  'i',
  MARK_s :  '₀',
  BOUND_s : '_b',


escape__s:  //: escape entities inside String
(
  code_s
) =>
  code_s
    .replace( /&/g, '&amp;' )    //!!! order matters
    .replace( /</g, '&lt;' )
    .replace( />/g, '&gt;' )
,



raw__s:
(
  code_s
) =>
{
  return code_s
    .replace( /&amp;/g, '&' )
    .replace( /&lt;/g, '<' )
    .replace( /&gt;/g, '>' )
}
,
  


exit__s:
(
  code_s,
  switch_s,
  aside_a,
  lang_o
) =>
{
  let mark_s =
    `${I_o.MARK_s}${switch_s}${I_o.MARK_s}`
  let regex_re =
    lang_o
      .regex_o[`${switch_s}_re`]
  let index_n = -1
  ;[...code_s.matchAll( regex_re )]
    .forEach
    (
      match_a =>
      {
        const exit_s =
          match_a[0]
        const enter_s =
          `${mark_s}${++index_n}${mark_s}`
        code_s =
          code_s
            .replace
            (
              exit_s,
              enter_s
            )
        aside_a
          .push( exit_s )
      }
    )
  return [ code_s, aside_a ]
}
,



enter__s:
(
  code_s,
  switch_s,
  aside_a,
  lang_o,
) =>
{
  let mark_s =
    `${I_o.MARK_s}${switch_s}${I_o.MARK_s}`
  let regex_re =
    new RegExp( `${mark_s}([0-9]+)${mark_s}`, 'gms' )
  ;[...code_s.matchAll( regex_re )]
    .forEach
    (
      match_a =>
      {
        const exit_s =
          match_a[0]
        const escape_s =
          I_o
            .escape__s( aside_a[+match_a[1]] )
        let enter_s =
        `<${I_o.TAG_s} class="i_${switch_s}">${escape_s}</${I_o.TAG_s}>`    //: Number cast
        if ( lang_o.callback__s )
        {
          enter_s =
            lang_o
              .callback__s
              (
                enter_s,
                switch_s
              )
        }
        code_s =
          code_s
            .replace
            (
              exit_s,
              enter_s
            )
      }
    )
  return [ code_s, aside_a ]
}
,



aside__s:  //: (exit|enter) (strings|comments)
(
  way_s,     //: 'exit' | 'enter'
  code_s,
  aside_o,   //: empty when 'exit'
  lang_o,    //:
) =>
{
  lang_o
    .aside_a
    .forEach
    (
      switch_s =>
      {
        if ( !aside_o[`${switch_s}`] )
        {
          aside_o[`${switch_s}`] = []
        }
        let return_a =
          I_o
            [`${way_s}__s`]
            (
              code_s,
              switch_s,
              aside_o[`${switch_s}`],
              IND_o.lang_o
            )
        code_s =
          return_a[0]
        aside_o[`${switch_s}`] =
          return_a[1]
     }
    )
  return [ code_s, aside_o ]
}
,



regex__re:
(
  switch_s,
  lang_o,
) =>
{
  const regex_ =
    lang_o
      .regex_o
      [`${switch_s}_a`]
  if ( Array.isArray( regex_ ) )
  {
    return (
      new RegExp( `\\b(${regex_.join( '|' )})(?!=)\\b`, 'g' )
    )
  }
  return (
    lang_o
      .regex_o
      [`${switch_s}_re`]
  )
}
,



switch__s:
(
  code_s,
  lang_o,
  order_s,    //:
) =>
{
  lang_o
    [`switch${order_s}_a`]
    .forEach
    (
      switch_s =>
      {
        let bound_s = ''
        const at_n = switch_s.indexOf( I_o.BOUND_s )
        if ( at_n > -1 )
        {
          bound_s = '\\b'
          switch_s =
            switch_s
              .slice
              (
                0,
                -I_o.BOUND_s.length
              )
        }
        let replace_s = ''
        let regex_a =
          lang_o
            .regex_o
            [`${switch_s}_a`]
        const regex_re =
          Array.isArray( regex_a )
          ?
            new RegExp( `${bound_s}(${regex_a.join( '|' )})(?!=)${bound_s}`, 'g' )    //: (?!=) to avoid tag attribute
          :
            lang_o
              .regex_o
              [`${switch_s}_re`]
        ;console.log( regex_re )
        code_s
          .split( regex_re )
          .forEach
          (
            split_s =>
            {
              replace_s +=
                regex_re
                  .test( split_s )
                ?
                  `<${I_o.TAG_s} class="i_${switch_s}">${split_s}</${I_o.TAG_s}>`
                :
                  split_s
            }
          )
        code_s =
          replace_s
          ||
          code_s
        }
    )
  return code_s
}
,

}
