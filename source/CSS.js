const CSS_o =
  new Object( null )

//=== OPERATOR ===//
CSS_o
  .operator_a =
[
  //XX '\\+',
  //XX '\\-',
  //XX '\\*',
  //XX '\\/',
  '=',

  '\\{',
  '\\}',

  ';',        //: PUNCTUATION
  ',',
  '\/',
  ':',

]




//=== RESERVED ===//
CSS_o
  .reserved_a =
[
  'media',
]




//=== DECLARATION ===//
CSS_o
  .declare_a =
[
  'calc',
  'hsla',
]


//=== PROPERTY ===//
CSS_o
  .property_a =
[
  'display',
  'position',
  'color',
  'background',
  'border',
  'font',
  'transform',
  'filter',
  'animation',
  //.... more ...
]



//=== ELEMENT ===//
CSS_o
  .node_a =
[
  'body',
  'main',
  'section',
  'article',
  'button',
  'div',
  'code',
]



//=== SELECTORS ===//
CSS_o
  .select_a =
[
  '#',
  '\\.',
  '\\[',
  '\\]',
  //?? '(\\[[^\\]+?]\\])',
  //?? '\\.',
  //?? '\\*',
]


//=== UNITS ===//
CSS_o
  .unit_a =
[
  'r?em',
  'ch',
  'px',
  '%',
  'vh',
  'vw',
  'vmin',
  'vmax',
  'fr',
]





CSS_o
  .regex_o =
{
  //=== first ===
  block_re: /(\/\*.*?\*\/)/gms,          //: /*Comment*/
  CHILD_re: /(>)/g,                      //!!! upper case to avoid clash with ch unit
  //=== step ===
  res_a:   CSS_o.reserved_a,    //:
  dec_a:   CSS_o.declare_a,     //:
  sel_a:   CSS_o.select_a,      //:
  prop_a:  CSS_o.property_a,    //:
  node_a:  CSS_o.node_a,        //:
  unit_a:  CSS_o.unit_a,        //:
  punct_a: CSS_o.punctuation_a, //:
  op_a:    CSS_o.operator_a,    //:

  num_re: /\b([-+]?[0-9]*\.?[0-9]+)\b/g,    //: Number
  var_re: /(var\(\s?--[a-zA-Z_0-9]+\s?\))/gms,   //: custom variable
  
  //: user defined
  //=== last ===
}



CSS_o
  .aside_a =        //!!! order matters
[
  'block',
  'CHILD',
]



CSS_o
  .ante_a =    //!!! MUST avoid name conflict with reserved_a, declare_a, property_a, etc.
[
  
  'op',
  'sel',

  'prop_b',
  'res_b',    //: see I_o.BOUND_s
  'node_b',
  
  'var',
  'unit',
  'num',
]


CSS_o
  .post_a =    //!!! MUST avoid name conflict with reserved_a, declare_a, property_a, etc.
[
  'dec_b',
]

CSS_o
  .callback_a =
[
  //XX 'lit',
]


/*
CSS_o
  .callback_f =
(
  code_s,
  regex_s
) =>
{
  return (
    CSS_o
      .callback_a
      .includes( regex_s ) ?
        CSS_o
          [`${regex_s}__s`]( code_s )
        :
        code_s
  )
}
*/


/*
CSS_o
  .lit__s =
(
  code_s
) =>
{
  let lit_s = ''
  code_s
    .split
    (
      /(\$\{[^\}]+\})/gms
    )
    .forEach
    (
      split_s =>
      {
        lit_s +=
          split_s
            .charAt( 0 ) === '\u0024'
              ?
                `<${I_o.TAG_s} class="i_temp">${split_s}</${I_o.TAG_s}>`
              :
                split_s
      }
    )
  return lit_s
}
*/

  

