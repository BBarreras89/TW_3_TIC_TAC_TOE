//let test = "test";
function alignCenter(varToAlignCenter) {
    let startPoint = (100 - varToAlignCenter.length) / 2;
    let arraySpaceAlineCenter = [];
    for (let i = 1; i < startPoint; i++){
        arraySpaceAlineCenter.push(" ");
    }
    return arraySpaceAlineCenter.join("");
}
//console.log(alignCenter(test)+test);