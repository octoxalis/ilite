const IND_o = new Object( null )



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



void function
()
{
  const file_e =        //: file selection
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
        let reader_o =        //: file reader
          new FileReader()
        reader_o
          .addEventListener
          (
            'load',
            ( event_o ) =>
            {
              document
                .querySelector( '#code' )
                .innerHTML =
                  I_o
                    .ilite__v
                    (
                      event_o
                        .target
                        .result,
                      ilite_o
                        .lang_o
                    )
          
              I_o
                .listener__v()
            }
          )
        reader_o
          .readAsText( file_o )
      }
    )

  const font_e =        //: font selection
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

  const color_e =        //: color selection
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


