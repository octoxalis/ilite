void function
()
{
  fetch( '../css/index.css' )
    .then
    (
      response =>
        response
          .text()
    ) 
    .then
    (
      code_s =>
      {
        console
          .log( code_s )
        IND_o
          .ilite__s
          (
            code_s,
            IND_o
              .lang__o( '.css' )
              .lang_o
          )
      }
    )
}()
