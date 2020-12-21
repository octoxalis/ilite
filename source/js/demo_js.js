void function
()
{
  fetch( '../js/ilite.js' )
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
              .lang__o( '.js' )
              .lang_o
          )
      }
    )
}()
