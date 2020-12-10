//=== ilite.js === iliter main module

const I_o =
{
  TAG_s  :  'i',    //: `<i class="i_dec">const</i>`
  MARK_s :  '',    //: index number delimiter
  BOUND_s : '_b',   //: bound regex_s suffix


escape__s:  //: escape ilite tag chars [< = " /]
(
  code_s
) =>
  code_s
    .replaceAll( '&', '&amp;' )    //!!! order matters
    .replaceAll( '<', '&lt;' )
    .replaceAll( '>', '&gt;' )
,



number__s:  //: [0-9] --> [₀-₉]
(
  code_s
) =>
  code_s
    .toString()
    .replaceAll( '0', '₀' )
    .replaceAll( '1', '₁' )
    .replaceAll( '2', '₂' )
    .replaceAll( '3', '₃' )
    .replaceAll( '4', '₄' )
    .replaceAll( '5', '₅' )
    .replaceAll( '6', '₆' )
    .replaceAll( '7', '₇' )
    .replaceAll( '8', '₈' )
    .replaceAll( '9', '₉' )
,



unnumber__s:  //: [₀-₉] --> [0-9]
(
  code_s
) =>
  code_s
    .replaceAll( '₀', '0' )
    .replaceAll( '₁', '1' )
    .replaceAll( '₂', '2' )
    .replaceAll( '₃', '3' )
    .replaceAll( '₄', '4' )
    .replaceAll( '₅', '5' )
    .replaceAll( '₆', '6' )
    .replaceAll( '₇', '7' )
    .replaceAll( '₈', '8' )
    .replaceAll( '₉', '9' )
,




asideExit__s:
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
  ;[
    ...code_s.matchAll( regex_re )
  ]
    .forEach
    (
      match_a =>
      {
        const exit_s =
          match_a[0]
        const index_s =
          I_o.number__s( ++index_n )
        const enter_s =
          `${mark_s}${index_s}${mark_s}`
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



asideEnter__s:
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
    new RegExp( `${mark_s}([₀-₉]+)${mark_s}`, 'gms' )
  ;[
    ...code_s.matchAll( regex_re )
  ]
    .forEach
    (
      match_a =>
      {
        const exit_s =
          match_a[0]
        const index_s =
          I_o.unnumber__s( match_a[1] )
        let enter_s =
          `<${I_o.TAG_s} class="i_${switch_s}">${aside_a[+index_s]}</${I_o.TAG_s}>`    //: Number cast
        if ( lang_o.callback_f )
        {
          enter_s =
            lang_o
              .callback_f
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
  code_s,
  aside_o,   //: empty when 'exit'
  lang_o,    //:
  way_s,     //: 'exit' | 'enter'
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
            [`aside${way_s}__s`]
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
  if
  (
    Array
      .isArray( regex_ )
  )
  {
    return (
      new RegExp( `\\b(${regex_.join( '|' )})(?!=)\\b`, 'g' )
    )
  }
  //>
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
        const at_n =
          switch_s
            .indexOf( I_o.BOUND_s )
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
                [`${switch_s}_re`]    ;console.log( regex_re )
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
