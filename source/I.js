//=== I.js === ilier main module

const I_o =
{
  TAG_s  : 'i',
  MARK_s : '₀',


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
  regex_s,
  aside_a,
  lang_o
) =>
{
  let mark_s =
    `${I_o.MARK_s}${regex_s}${I_o.MARK_s}`
  let regex_re =
    lang_o
      .regex_o[`${regex_s}_re`]
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
  regex_s,
  aside_a,
  lang_o,
) =>
{
  let mark_s =
    `${I_o.MARK_s}${regex_s}${I_o.MARK_s}`
  let regex_re =
    new RegExp( `${mark_s}([0-9]+)${mark_s}`, 'gms' )
  ;[...code_s.matchAll( regex_re )]
    .forEach
    (
      match_a =>
      {
        const exit_s =
          match_a[0]
        let enter_s =
        `<${I_o.TAG_s} class="i_${regex_s}">${aside_a[+match_a[1]]}</${I_o.TAG_s}>`    //: Number cast
        if ( lang_o.callback__s )
        {
          enter_s =
            lang_o
              .callback__s
              (
                enter_s,
                regex_s
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
      regex_s =>
      {
        if ( !aside_o[`${regex_s}`] )
        {
          aside_o[`${regex_s}`] = []
        }
        let return_a =
          I_o
            [`${way_s}__s`]
            (
              code_s,
              regex_s,
              aside_o[`${regex_s}`],
              IND_o.lang_o
            )
        code_s =
          return_a[0]
        aside_o[`${regex_s}`] =
          return_a[1]
     }
    )
  return [ code_s, aside_o ]
}
,



spin__s:
(
  code_s,
  lang_o,    //:
) =>
{
  lang_o
    .spin_a
    .forEach
    (
      regex_s =>
      {
        let regex_re =
          lang_o
            .regex_o[`${regex_s}_re`]
        ;[...code_s.matchAll( regex_re )]
          .forEach
          (
            match_a =>
            {
              code_s =
                code_s
                  .replace
                  (
                    match_a[0],
                    `<${I_o.TAG_s} class="i_${regex_s}">${match_a[0]}</${I_o.TAG_s}>`
                  )
            }
          )
      }
    )
  return code_s
}
,

}
