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
          .ilite__v
          (
            code_s,
            IND_o
              .lang__o( '.js' )
              .lang_o
          )
      }
    )
}()
