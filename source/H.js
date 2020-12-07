const H_o = new Object( null )


//=== RESERVED ===//
H_o.reserved_a =
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
H_o.loop_a =
[
  'continue',
  'do',
  'for',
  'in',
  'of',
  'while',
]



//=== CONTROL ===//
H_o.control_a =
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
H_o.type_a =
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
H_o.variable_a =
[
  'const',
  'let',
  'var',
]



//=== PUNCTUATION ===//
H_o.punctuation_a =
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
H_o.group_a =
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
H_o.operator_a =
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
H_o.property_a =
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



