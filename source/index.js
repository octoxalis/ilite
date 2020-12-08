const IND_o = new Object( null )


IND_o.lang_o =
{
  regex_o: JS_o.regex_o,
  aside_a: JS_o.aside_a,
  spin_a:  JS_o.spin_a,
  callback__s: JS_o.callback__s,
}


IND_o.line__s =
(
  code_s
) =>
{
  const code_a =
    code_s
      .split( '\n' )
  let acode_s = ''
  code_a
    .forEach
    (
      line_s => acode_s += `<li>${line_s}`
    )
  return `<ol class="i_code">${acode_s}</ol>`
}


void function
()
{
  const code_e =
    document
      .querySelector('#code')
  let code_s =
    I_o
      .raw__s( code_e.innerHTML )
  //;console.log( code_s + '\n==================================' )




  const exit_o =
    I_o
      .aside__s
      (
        'exit',
        code_s,
        {},      //: aside_o
        IND_o.lang_o
      )
  ;console.log( exit_o[0] )
  ;console.table( exit_o[1]  )

  code_s =
    I_o
      .spin__s
      (
        exit_o[0],
        IND_o.lang_o
      )

  const enter_o =
    I_o
      .aside__s
      (
        'enter',
        code_s,
        exit_o[1],
        IND_o.lang_o
      )
  ;console.log( enter_o[0] )
  ;console.table( enter_o[1] )
  code_e.innerHTML =
  IND_o
    .line__s( enter_o[0] )
}()
