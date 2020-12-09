const IND_o = new Object( null )


IND_o.lang_o =
{
  regex_o: JS_o.regex_o,
  aside_a: JS_o.aside_a,
  switchFirst_a: JS_o.switchFirst_a,
  switchLast_a:  JS_o.switchLast_a,
  callback__s: JS_o.callback__s,
}


IND_o.line__s =
(
  code_s
) =>
{
  let acode_s = ''
  code_s
    .split( '\n' )
    .forEach
    (
      line_s => acode_s += `<li>${line_s}`
    )
  return `<ol class="i_code">${acode_s}</ol>`
}


void function
()
{
  console.time( 'ilite' )

  const code_e =
    document
      .querySelector('#code')
  let code_s =
    I_o
      .raw__s( code_e.innerHTML )
      //-- code_e.innerHTML
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
  //;console.log( exit_o[0] )

  code_s =
    I_o
      .switch__s
      (
        exit_o[0],
        IND_o.lang_o,
        'First'
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
  //;console.log( enter_o[0] )

  code_s =
    I_o
      .switch__s
      (
        enter_o[0],
        IND_o.lang_o,
        'Last'
      )

  console.timeEnd( 'ilite' )

  code_e.innerHTML =
    `<pre>
    ${IND_o
      .line__s
      (
        code_s
      )}</pre>`

  //;console.log( code_s )
}()
