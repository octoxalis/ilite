const IND_o = new Object( null )


IND_o
  .lang_o =
{
  regex_o:      JS_o.regex_o,
  aside_a:      JS_o.aside_a,
  switchAnte_a: JS_o.switchAnte_a,
  switchPost_a: JS_o.switchPost_a,
  callback_f:   JS_o.callback_f,
}


IND_o
  .line__s =
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


IND_o
  .ilite__v =
(
  code_s
) =>
{
  console.time( 'ilite' )

  code_s =
    code_s
      .trim()
  
  const exit_o =
    I_o
      .aside__s
      (
        code_s,
        {},      //: aside_o
        IND_o.lang_o,
        'Exit',
      )
  //;console.log( exit_o[0] )


  code_s =
    I_o
      .switch__s
      (
        exit_o[0],
        IND_o.lang_o,
        'Ante'
      )
  //;console.log( code_s )

  const enter_o =
    I_o
      .aside__s
      (
        code_s,
        exit_o[1],
        IND_o.lang_o,
        'Enter',
      )
  //;console.log( enter_o[0] )


  code_s =
    I_o
      .switch__s
      (
        enter_o[0],
        IND_o.lang_o,
        'Post'
      )
  console.timeEnd( 'ilite' )


  const code_e =
    document
      .querySelector('#code')
  code_e.innerHTML =
    `${IND_o
      .line__s
      (
        code_s
      )}`
  //;console.log( code_s )
}



void function
()
{
  const file_e =
    document
      .querySelector('#file_select')
  file_e
    .addEventListener
    (
      'change',
      () =>
      {
        const file_a =
          file_e.files
        if ( !file_a.length  )
          {
            return void console.log( 'No file selected' )
          }
          //>
        let file_o =
            file_a[0]
        let reader_o =
          new FileReader()
        reader_o
          .addEventListener
          (
            'load',
            ( event_o ) =>
            {
              IND_o
                .ilite__v
                (
                  event_o
                    .target
                    .result
                )
            }
          )
        reader_o
          .readAsText( file_o )
      }
    )

  const color_e =
    document
      .querySelector('#color_select')
  color_e
    .addEventListener
    (
      'input',
      () =>
      {
        document
          .documentElement
          .style
          .setProperty
          (
            '--c_hue_h',
            color_e.value
          )
      }
    )
}()


