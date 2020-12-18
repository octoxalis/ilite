void function
()
{
  fetch( '../test/test.njk' )
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
              .lang__o( '.njk' )
              .lang_o
          )
      }
    )
}()
