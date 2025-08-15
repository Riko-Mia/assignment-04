

function  resultReport( marks ) {
    if(!Array.isArray(marks)){
        return "Invalid"
    }
    let result = { finalScore: 0, pass: 0, fail: 0 }
    let totalNum = 0
    let pass = []
    let fail = []
    for(let mark of marks){
        totalNum += mark
        if(mark > 40){
            pass.push(mark)
        } else {
            fail.push(mark)
        }
    }
    if(marks.length !== 0){
        result.finalScore = Math.round(totalNum / marks.length)
    }
    result.pass = pass.length
    result.fail = fail.length

    return result
}

console.log(resultReport([]))
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]))
console.log(resultReport([99, 87, 67, 12 ,87]))
console.log(resultReport([99]))
console.log(resultReport(100))