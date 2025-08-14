

function  resultReport( marks ) {

    // You have to write your code here
    let result = { finalScore: 0 , pass: 0, fail: 0 }
    let totalNum= 0
    for(let mark of marks){
        totalNum +=mark
        if(mark >= 40){
            result.pass = mark
        }else{
            result.fail = marks.length
        }
    }

    result.finalScore = Math.round(totalNum / marks.length)
    console.log(result)


}



resultReport([98, 87, 67, 91, 92, 33, 87])