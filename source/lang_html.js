const HTML_o =
  new Object( null )

//=== OPERATOR ===//
/*
HTML_o
  .operator_a =
[
  '=',

]
*/


/*
//=== RESERVED ===//
HTML_o
  .reserved_a =
[
  'set',
  'include',
]
*/



//=== DECLARATION ===//
/*
HTML_o
  .declare_a =
[
  'calc',
  'var',
  'hsla',
]
*/


HTML_o
  .regex_o =
{
  //=== first ===
  block_re: /(<!--.*?-->)|(<!--[\w\W\n\s]+?-->)/gms,          //: {# Comment #} <!-- HTML comment -->
  lit_re:   /(`[^\u0060]*`)/gms,         //: `template String`
  apos_re:  /('[^\u0027]*')/g,           //: 'String'
  quot_re:  /("[^\u0022]*")/g,           //: "String"
  attr_re:  /\b([\w\-]+\s?=)/gms,    //: HTML tag properties
  cont_re:   /(<!?[a-zA-Z0-9]+\s?>?)|(>)|(<\/?[a-zA-Z0-9]+?\s?\/?>)/gms,            //: HTML tag only
  //=== step ===
  num_re: /\b([-+]?[0-9]*\.?[0-9]+)\b/g,    //: Number
  //: user defined
  //=== last ===
}



HTML_o
  .aside_a =        //!!! order matters
[
  'block',
  'lit',
  'apos',
  'quot',
  'cont',
]



HTML_o
.ante_a =    //!!! MUST avoid name conflict with reserved_a, declare_a, property_a, etc.
[
  'attr',
  'num',
]


HTML_o
.post_a =    //!!! MUST avoid name conflict with reserved_a, declare_a, property_a, etc.
[
]


HTML_o
  .callback_a =
[
  'quot',
]


HTML_o
  .callback_f =
(
  code_s,
  regex_s
) =>
{
  return (
    HTML_o
      .callback_a
      .includes( regex_s ) ?
        HTML_o
          [`${regex_s}__s`]( code_s )
        :
        code_s
  )
}




HTML_o
  .quot__s =
(
  code_s
) =>
{
  ;[
    ...code_s.matchAll( /(https?:\/\/[^"]+)/g )
  ]
  .forEach
  (
    match_a =>  
    {
      code_s =
        code_s
          .replace
          (
            match_a[0],
            `<b class="i_href">${match_a[0]}</b>`
          )
    }
  )
  return code_s
}


  

HTML_o
  .lang_o =
{
  regex_o:    HTML_o.regex_o,
  aside_a:    HTML_o.aside_a,
  ante_a:     HTML_o.ante_a,
  post_a:     HTML_o.post_a,
  callback_f: HTML_o.callback_f,
  hiline_a:    //: 1-indexed (line index)
    [
      //-- 4, 5,
      //-- 12,
      //-- 28,
      //-- 35, 36, 37, 38, 39, 40, 41, 42
    ],
}
