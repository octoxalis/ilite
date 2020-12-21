void function
()
{
  fetch( '../index.html' )
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
              .lang__o( '.html' )
              .lang_o
          )
      }
    )
}()
