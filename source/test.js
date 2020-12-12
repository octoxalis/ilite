const GRAVE_s = `<div class="test">HTML TEST</div>`
const AMP_s = '&amp;'
const amp_s = '&'
const GT_s = '&gt;'
const gt_s = '>'
const LT_s = '&lt;'
const lt_s = '<'

let comp_b = 1 < 2
comp_b = 2 > 1
comp_b = 2 >= 1
comp_b = 1 <= 2
let eq_b = 3 === 3     //: space
let noteq_b = 3!==4    //: no space

let op_n = (1 + 2 - 3) * (5 / 4)
op_n = (1+2-3)*(5/4)
op_n += 10 % 2

let lit_re  = /(`[^\u0060]*`)/gms       //: `template String`
let apos_re = /('[^\u0027]*')/g         //: 'String'
let quot_re = /("[^\u0022]*")/g         //: "String"

//!!! check
let along_s =
`Template literals are string literals allowing embedded expressions.
You can use multi-line strings
and string interpolation features (e.g. ${comp_b}) with them.`

