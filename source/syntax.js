void function
()
{
  const reservedWords = [
      "abstract", "arguments", "await", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", 
      "default", "delete", "do", "double", "else", "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", 
      "function", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", "native", "new", "null", 
      "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", 
      "throws", "transient", "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield"
  ]
  
  const objectsPropertiesMethods = [
      "Array", "Date", "hasOwnProperty", "Infinity", "isFinite", "isNaN", "isPrototypeOf", "length", "Math", "NaN", "name", "Number", 
      "Object", "prototype", "String", "toString", "undefined", "valueOf"
  ]
  
  const rules = [
      {regex: `\\b(${reservedWords.join('|')})\\b`, params: ['g'], replaceWith: '¹$1¹'},
      {regex: `\\b(${objectsPropertiesMethods.join('|')})\\b`, params: ['g'], replaceWith: '²$1²'},
      {regex: '(\'.*\')|(\".*\")|(\`.*\`)', params: ['g'], replaceWith: '³$&³'},
      {regex: '(\\$\{.*\})', params: ['g'], replaceWith: '¹$1¹'},
      {regex: '(\#.*)', params: ['g'], replaceWith: '⁴$1⁴'},
      {regex: '¹([^¹]*)¹', params: ['g'], replaceWith: '<span class="reserved">$1</span>'},
      {regex: '²([^²]*)²', params: ['g'], replaceWith: '<span class="methods">$1</span>'},
      {regex: '³([^³]*)³', params: ['g'], replaceWith: '<span class="variable">$1</span>'},
      {regex: '⁴([^⁴]*)⁴', params: ['g'], replaceWith: '<span class="comment">$1</span>'},
      {regex: '(/\\*[^*]*\\*+(?:[^/*][^*]*\\*+)*/)', params: ['g'], replaceWith: '<span class="comment">$1</span>'},
      {regex: '([+-]?([0-9]*[.])?[0-9]+)', params: ['g'], replaceWith: '<span class="number">$1</span>'},
  ]
  
  const line_a =
  [
      5, 18, 44
  ]
  
  const format =
    (code) =>
    {
      let text = code.innerText.trim()
      let line_n = 1
      for(const rule of rules)
          text = text.replace(new RegExp(rule.regex, ...rule.params), rule.replaceWith)
      return text.split(/\n/).map( line => `<li ${line_a.includes( line_n++ ) ? 'class="hi"' : ''}>${line}`).join('')
    }
  
  //~~ void function
  //~~ ()
  //~~ {
  //~~     for(const code of document.querySelectorAll('code'))
  //~~         code.innerHTML = `<ol>${format(code)}</ol>`
  //~~ }()

  const code_e =
    document
      .querySelector('#code')
  const code_s =
    U_o
      .raw__s( code_e.innerHTML )
  ;console.log( code_s + '\n==================================' )
  //-----------------------------
  const out_o =
    U_o
      .exclude__s
      (
        'Out',
        code_s,
        {}      //: store_o
      )
  ;console.log( out_o[0] )
  ;console.log( out_o[1] + '\n=================================='  )
  //-----------------------------
  const back_o =
    U_o
      .exclude__s
      (
        'Back',
        out_o[0],
        out_o[1]
        )
  ;console.log( back_o[0] )
  ;console.log( back_o[1] )
  code_e.innerHTML =
    back_o[0]
}()