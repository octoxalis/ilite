const IND_o =
{
  //~~ code_s,    //: code element ID



  lang__o:
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
  ,



  source__o:    //: --> readFile__v
  (
    id_s    //: selector element ID
  ) =>
  {
    const file_e =
      document
        .querySelector( `#${id_s}` )
    file_e
      .addEventListener
      (
        'change',
        () =>
        {
          const file_a =
            file_e
              .files
          if ( !file_a.length  )
            {
              return void console.log( 'No file selected' )
            }
            //>
          IND_o
            .readFile__v( file_a[0] )
        }
      )
    return IND_o
  },



  readFile__v:    //: --> listenLine__v
  (
    file_o
  ) =>
  {
    const name_s =
      file_o
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
        .querySelector( `#${IND_o.code_s}` )
        .innerHTML =
          '<p>Iliter can not ilite this type of file: please select a js|css|njk|html file</p>'
      return
    }
    //>
    IND_o
      .listenRead__v
      (
        file_o,
        ilite_o
      )
  }
  ,



  listenRead__v:
  (
    file_o,
    ilite_o
  ) =>
  {
    let reader_o =
      new FileReader()
    reader_o
      .addEventListener
      (
        'load',
        event_o =>    //: handler
        {
          IND_o
            .ilite__v
            (
              event_o
                .target
                .result,
              ilite_o
                .lang_o
            )
        }
      )
    reader_o
      .readAsText( file_o )
  }
  ,


  ilite__v:
  (
    code_s,
    lang_o
  ) =>
  {
    document
      .querySelector( `#${IND_o.code_s}` )
      .innerHTML =
        I_o
          .ilite__v
          (
            code_s,
            lang_o
          )
    IND_o
      .listenLine__v()
  }
  ,



  listenLine__v:
  () =>
  {
    document
      .querySelector( `#${IND_o.code_s}` )
      .addEventListener
      (
        'click',
        click_o =>    //: handler
        {
          const li_e =
            click_o
              .target
              .closest('LI')
          if ( li_e )
          {
            li_e
              .classList
              .toggle( 'i_spot' )
          }
        }
          
      )
  }
  ,


  fontsize__o:
  (
    id_s    //: selector element ID
  ) =>
  {
    const font_e =
      document
        .querySelector( `#${id_s}` )
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
    return IND_o
  }
  ,


  color__o:
  (
    id_s    //: selector element ID
  ) =>
  {
    const color_e =
      document
        .querySelector( `#${id_s}` )
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
    return IND_o
  }
  ,
}




void function    //: main
()
{
  IND_o
    .code_s = 'ilite_e'
  IND_o
    .source__o( 'source_e' )    //: --> readFile__v
    .fontsize__o( 'fontsize_e' )
    .color__o( 'color_e' )
}()


