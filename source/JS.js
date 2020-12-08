const JS_o =
  new Object( null )

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
  'boolean',
  'byte',
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
  'short',
  'static',
  'true',
  'typeof',

  "Array",
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
  .variable_a =
[
  'const',
  'let',
  'var',
]




//=== PUNCTUATION ===//
JS_o
  .punctuation_a =
[
  //XX `'`,
  //XX `"`,
  //XX '`',
  '...',
  ',',
  ';',
  '.',
]




//=== GROUP ===//
JS_o
  .group_a =
[
  '(',
  ')',
  '[',
  ']',
  '{',
  '}',

  //XX '//',  //: comments
  //XX '/*',
  //XX '*/',
]




//=== OPERATOR ===//
JS_o
  .operator_a =
[
  '+',
  '++',
  '-',
  '--',
  '*',
  '/',
  '<',
  '<=',
  '>',
  '>=',
  '%',
  '=',
  '&',
  '&&',
  '|',
  '||',
  '^',
  '~',
  '?',
  ':',

  '=>',
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
  line_re:  /((?:^|\s)\/\/(.+?)$)/gms,  //: //Comment
  block_re: /(\/\*.*?\*\/)/gms,         //: /*Comment*/
  grave_re: /(`[^`]*`)/gms,             //: `String`
  apos_re:  /('[^']*')/gms,             //: 'String'
  quot_re:  /("[^"]*")/gms,             //: "String"

  num_re:   /^(?=.)([+-]?([0-9]*)(\.([0-9]+))?)$/gms,    //: Number
  res_re:   new RegExp( JS_o.reserved_a.join( '|' ), 'gms' ),    //:
  loop_re:  new RegExp( JS_o.loop_a.join( '|' ), 'gms' ),    //:
  cont_re:  new RegExp( JS_o.control_a.join( '|' ), 'gms' ),    //:
  type_re:  new RegExp( JS_o.type_a.join( '|' ), 'gms' ),    //:
  var_re:   new RegExp( JS_o.variable_a.join( '|' ), 'gms' ),    //:
  punc_re:  null,    //:
  group_re: null,    //:
  op_re:    null,    //:
  prop_re:  new RegExp( JS_o.property_a.join( '|' ), 'gms' ),    //:
}



JS_o
  .aside_a =        //!!! order matters
[
  'line',
  'block',
  'grave',
  'apos',
  'quot',
]



JS_o
  .spin_a =
[
  'num',
  'res',
  'loop',
  'cont',
  'type',
  'var',

  'prop',
]



JS_o
  .callback_a =
[
  'grave',
]




JS_o
  .callback__s =
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
  .grave__s =
(
  code_s
) =>
{
  let from_n = 0
  let to_s = ''
  const literal_re =
    /\$\{([^\}]+)\}/gms
  ;[...code_s.matchAll( literal_re )]
    .forEach
    (
      match_a =>
      {
      }
    )
  return code_s
}


  

