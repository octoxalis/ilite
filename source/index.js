const IND_o = new Object( null )


IND_o
  .lang_o = null



IND_o
  .lang__o =
(
  ext_s
) =>
{
  const map_s =
  {
    ['.js']:   JS_o,
    ['.css']:  CSS_o,
    ['.njk']:  NJK_o,
    ['.html']: HTML_o,
  }
  return map_s[ext_s]
}



IND_o
  .ilite__v =
(
  code_s
) =>
{
  if ( !IND_o.lang_o )
  {
    return
  }
  //>
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
        'exit',
      )                      //;console.log( exit_o[0] )


  code_s =
    I_o
      .step__s
      (
        exit_o[0],
        IND_o.lang_o,
        'ante'
      )                      //;console.log( code_s )

  const enter_o =
    I_o
      .aside__s
      (
        code_s,
        exit_o[1],
        IND_o.lang_o,
        'enter',
      )                      //;console.log( enter_o[0] )


  code_s =
    I_o
      .step__s
      (
        enter_o[0],
        IND_o.lang_o,
        'post'
      )
  console.timeEnd( 'ilite' )


  document
    .querySelector('#code')
    .innerHTML =
      `${I_o.line__s
        (
          code_s,
          IND_o.lang_o
        )}`                  //;console.log( code_s )
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
              I_o
                .listener__v()
            }
          )
        reader_o
          .readAsText( file_o )
        const name_s =
          file_a
            [0]
            .name
        const ext_s =
          name_s
            .slice
            (
              name_s
                .lastIndexOf( '.' )
            )
        const ilite_o =
          IND_o
            .lang__o( ext_s )
        if ( !ilite_o )
        {
          document
            .querySelector('#code')
            .innerHTML =
              '<p>Iliter can not ilite this type of file: please select a js|css|njk|html file</p>'
          return
        }
        //>
        IND_o.lang_o =
          ilite_o
            .lang_o
      }
    )

  const font_e =
    document
      .querySelector('#font_select')
      font_e
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
            '--size_ratio',
            font_e.value
          )
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

  I_o
    .listen__v( 'code' )
}()


