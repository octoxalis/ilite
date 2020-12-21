# ILITE

__Another kind of source highlighter__

A lightning-fast, light-weight and... __interactive__ highlighter.

The name __ilite__ is a neologism from the latin word _aliter_ (another) and the english word _highlight_.


## Main features

-  truly <q>slim</q>: ilite minified core script is les than 2200 bytes and
each language module around 1000 bytes
-  language modules for the following source types:
    - JavaScript
    - CSS stylesheets
    - HTML
    - Nunjucks templates
- _ilites_ (sic) background and/or front, with semi-transparent colors, easy to configure
-  _ilites_ lines on cursor hover
-  _ilites_ any clicked line (which can be toggled later) by underscoring it
-  _ilites_ specific lines according to a line number Array
-  covers only the specific properties of these languages/tools I use (but easy to extend)
-  generate ultra lightweight markup:
```<li><i class="i_dec">const</i> <i class="i_uv">I_o</i> =</li>```
-  __ilite__ is able to differentiate as many language reserved words or constructs as you wish,
if you know how to write a RegExp for it (!)
- easily extendable to any language


NB: Please consider this sofware as beta release, not production ready.


## Demo site

Visit [ilite page]

+ select a local file to be _ilited_
+ if you want to change the font size, enter a positive number value
+ if you want to change the primary color, enter a positive number value in range [0 - 360]


### Credit

Searching for a lightweight highlighter to replace either Prism.js or Highlight.js, I found [Syntax], a clever 42 lines script by Victor Ribeiro.

I refined his idea of a multi pass processing to develop __ilite__.
It's a few lines more (!), but only a few tens of millisecond to process hundred of lines.

#### Tip

Have a look at [ilite page] and inspect the console to see which **RegExp** are used and the amount of milliseconds to process the _ilited_ file: should be roughly around ten lines per millisecond (on my i7-6600 CPU computer).

If you use it, minify it: 


[ilite page]: https://ilite.netlify.app
[Syntax]: https://github.com/victorqribeiro/syntax