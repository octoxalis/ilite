# ILITER

__Another (latin: aliter) kind of source highlighter__

A lightning-fast and light-weight highlighter suitable for my own quirky coding style.


## Main features

+ _ilites_ (sic) only the following sources:
  * JavaScript
  * CSS stylesheets (...soon)
  * HTML (...soon)
  * Nunjucks templates (...soon)
+ smartly _ilites_ background and/or front, with semi-transparent colors and line cursor
+ _ilites_ also specific lines on-demand
+ covers only the specific properties of these languages/tools I use (but easy to augment)
+ generate ultra lightweight markup (e.g. `<li><i class="i_dec">const</i> <i class="i_uv">I_o</i> =</li>`)
+ beta release, not production ready


## Demo site

VIsit [iliter page]

+ select a local file to be _ilited_
+ change the font size entering a positive number value
+ change the primary color entering a positive number value in range [0 - 360]


### Credit

Searching for a lightweight highlighter to replace either Prism.js or Highlight.js, I found [Syntax], a clever 42 lines script by Victor Ribeiro. I developed and refined his idea of a multi pass processing to make my own __iliter__. It's a few lines more (!), but only a few tens of millisecond to process hundred of lines.

#### Tip

Have a look at [iliter page] and inspect the console to see which **RegExp** are used and the amount of milliseconds to process the _ilited_ file: should be roughly around ten lines per millisecond (on my i7-6600 CPU computer).


[iliter page]: https://iliter.netlify.app
[Syntax]: https://github.com/victorqribeiro/syntax