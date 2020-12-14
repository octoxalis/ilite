const NJK_o = new Object( null )



//=== OPERATOR ===//




//=== RESERVED ===//

NJK_o
  .reserved_a =
[
  'include',
  '(?:end)?if',
  'else',
  '(?:end)?set',
  'macro',
  'raw',
  'extends',
]





//=== LOOP ===//
NJK_o
  .loop_a =
[
  'for',
  'in',
]




//=== CONTROL ===//
NJK_o
  .control_a =
[
  '=',
  '\\{{2}',
  '\\}{2}',
  //??? '%',
  '\\{%',
  '%\\}',
  '\\-',
  '\\|',    //: filter
  'and',
  'or',
  'not',
]




//=== DECLARATION ===//
/*??
NJK_o
  .declare_a =
[
]
*/


//=== PROPERTY ===//
NJK_o
  .property_a =
[
  'safe',

]






NJK_o
  .regex_o =
{
  //=== first ===
  block_re: /(\{#[^#]*#\})|(<!--.*?-->)|(<!--[\w\W\n\s]+?-->)/gms,          //: {# Comment #} <!-- HTML comment -->
  lit_re:   /(`[^\u0060]*`)/gms,         //: `template String`
  apos_re:  /('[^\u0027]*')/g,           //: 'String'
  quot_re:  /("[^\u0022]*")/g,           //: "String"
  html_re:  /(<[^>]+?>)/g,              //: HTML tag properties included
  //=== step ===
  res_a:   NJK_o.reserved_a,    //:
  //?? dec_a:   NJK_o.declare_a,     //:
  prop_a:  NJK_o.property_a,    //:
  //?? punct_a: NJK_o.punctuation_a, //:
  cont_a:  NJK_o.control_a,   //:
  loop_a:  NJK_o.loop_a,      //:

  num_re: /\b([-+]?[0-9]*\.?[0-9]+)\b/g,    //: Number
  
  //: user defined
  uv_re:  /\b(\w+_{1,2}[abcefnorsUvY]e?)\b/g,   //: user variable (e.g. 'name_s')
  //=== last ===
}



NJK_o
  .aside_a =        //!!! order matters
[
  'block',
  'html',
  'lit',
  'apos',
  'quot',
]



NJK_o
.ante_a =    //!!! MUST avoid name conflict with reserved_a, declare_a, property_a, etc.
[
  
  //?? 'op',

  'cont',
  'res_b',
  'loop_b',
  'uv',
  'prop_b',

  'num',
]


NJK_o
  .post_a =    //!!! MUST avoid name conflict with reserved_a, declare_a, property_a, etc.
[
  //?? 'dec_b',
]

NJK_o
  .callback_a =
[
  'html',
]


/*......................
NJK_o
  .callback_f =
(
  code_s,
  regex_s
) =>
{
  return (
    NJK_o
      .callback_a
      .includes( regex_s ) ?
        NJK_o
          [`${regex_s}__s`]( code_s )
        :
        code_s
  )
}
*/


/* DOESN'T WORK
NJK_o
  .html__s =
(
  code_s
) =>
{
  let html_s =
  code_s
    .replace
    (
      /"([^"]*?)"/gms,
      '<i class="i_quot">"$1"</i>'
    )
    .forEach
    (
      split_s =>
      {
        html_s +=
          split_s
            .charAt( 0 ) === '\u0024'
              ?
                `<${I_o.TAG_s} class="i_temp">${split_s}</${I_o.TAG_s}>`
              :
                split_s
      }
    )
  return html_s
}
*/


  

NJK_o
  .lang_o =
{
  regex_o:    NJK_o.regex_o,
  aside_a:    NJK_o.aside_a,
  ante_a:     NJK_o.ante_a,
  post_a:     NJK_o.post_a,
  //... callback_f: NJK_o.callback_f,
  hiline_a:    //: 1-indexed (line index)
    [
      //-- 4, 5,
      //-- 12,
      //-- 28,
      //-- 35, 36, 37, 38, 39, 40, 41, 42
    ],
}
