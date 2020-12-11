const JS_o =
  new Object( null )

//=== OPERATOR ===//
JS_o
  .operator_a =
[
  '\\+{2}',
  '\\-{2}',
  //-- '\\*',
  //-- '/',
  //-- '<',
  //-- '<=',
  //-- '>',
  //-- '>=',
  //-- '=',
  '&{2}',
  '\\|{2}',
  //-- '\\^',
  '={2,3}',
  '!={1,2}',
  '~',
  
  '!',
  '%',
  '=>',

  '\\[',      //: GROUP
  '\\]',
  '\\{',
  '\\}',

  ';',        //: PUNCTUATION
  ',',
  '\\.\{3\}',
  '\\?',
  ':',

]




//=== PUNCTUATION ===//
/*
JS_o
  .punctuation_a =
[
  ';',
  ',',
  '\\.\{3\}',
  '\\?',
  ':',
  //'\\.',
]
*/




//=== GROUP ===//
/*
JS_o
  .group_a =
[
  '\\(',
  '\\)',
  '\\[',
  '\\]',
  '\\{',
  '\\}',
]
*/



//=== RESERVED ===//
JS_o
  .reserved_a =
[
  //--'abstract',
  //--'arguments',
  //--'debugger',
  //--'delete',
  //--'eval',
  //--'export',
  //--'extends',
  //--'final',
  'function',
  //--'implements',
  //--'import',
  //--'interface',
  'new',
  //--'package',
  //--'private',
  //--'protected',
  //--'public',
  //--'super',
  //--'synchronized',
  'this',
  //--'throw',
  //--'throws',
  //--'transient',
  'void',
  //--'volatile',
]




//=== LOOP ===//
JS_o
  .loop_a =
[
  'continue',
  'do',
  'for',
  'forEach',
  'in',
  'of',
  'while',
]




//=== CONTROL ===//
JS_o
  .control_a =
[
  'async',
  'await',
  'break',
  'case',
  'catch',
  'default',
  'else',
  //--'finally',
  //--'goto',
  'if',
  'return',
  'switch',
  'try',
  'with',
  'yield'
]




//=== TYPE ===//
JS_o
  .type_a =
[
  //'byte',
  'char',
  'class',
  'double',
  'enum',
  'false',
  'float',
  'instanceof',
  'int',
  'long',
  //--'native',
  'null',
  //'short',
  'static',
  'true',
  'typeof',

  "Array",
  "Boolean",
  "Date",
  "Infinity",
  "NaN",
  "Number",
  "Object",
  "String",
  "undefined",
]




//=== VARIABLE ===//
JS_o
  .declare_a =
[
  'const',
  'let',
  'var',
]




//=== PROPERTY ===//
JS_o
  .property_a =
[
  //--"hasOwnProperty",
  //--"isFinite",
  //--"isNaN",
  //--"isPrototypeOf",
  "length",
  "Math",
  //--"name",
  //--"prototype",
  //--"toString",
  //--"valueOf"
]



JS_o
  .regex_o =
{
  //=== first ===
  line_re:  /((?:^|\s)\/\/(.+?)$)/gms,   //: //Comment
  block_re: /(\/\*.*?\*\/)/gms,          //: /*Comment*/
  lit_re:   /(`[^`]*`)/g,                //: `String`
  apos_re:  /('[^']*')/g,                //: 'String'
  quot_re:  /("[^"]*")/gms,              //: "String"
  //=== spin ===
  res_a:   JS_o.reserved_a,    //:
  loop_a:  JS_o.loop_a,        //:
  cont_a:  JS_o.control_a,     //:
  type_a:  JS_o.type_a,        //:
  dec_a:   JS_o.declare_a,     //:
  prop_a:  JS_o.property_a,    //:
  group_a: JS_o.group_a,       //:
  punct_a: JS_o.punctuation_a, //:
  op_a:    JS_o.operator_a,    //:

  uv_re:    /\b([a-zA-Z0-9_]+_[a-zA-Z]{1})\b/g,   //: user variable
  //=== last ===
  num_re:   /\b([-+]?[0-9]*\.?[0-9]+)\b/g,            //: Number
}



JS_o
  .aside_a =        //!!! order matters
[
  'line',
  'block',
  'lit',
  'apos',
  'quot',
]



JS_o
  .ante_a =    //!!! MUST avoid name conflict with reserved_a, declare_a, property_a, etc.
[
  'op',
  //-- 'punct' --> op,
  //-- 'group' --> op,

  'res_b',    //: see I_o.BOUND_s
  'loop_b',
  'cont_b',
  'type_b',
  'dec_b',
  'prop_b',
  'uv',

  'num',
]


JS_o
  .post_a =    //!!! MUST avoid name conflict with reserved_a, declare_a, property_a, etc.
[
]

JS_o
  .callback_a =
[
  'lit',
]



JS_o
  .callback_f =
(
  code_s,
  regex_s
) =>
{
  return (
    JS_o
      .callback_a
      .includes( regex_s ) ?
        JS_o
          [`${regex_s}__s`]( code_s )
        :
        code_s
  )
}


JS_o
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
            .charAt( 0 ) === '$'
              ?
                `<${I_o.TAG_s} class="i_lit">${split_s}</${I_o.TAG_s}>`
              :
                split_s
      }
    )
  return lit_s
}


  

