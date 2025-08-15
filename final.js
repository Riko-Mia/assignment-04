
// Problem - 01
function totalFine( fare ) {

    let result = 0

    if(typeof fare === "number" && 0 < fare){
        result = fare + fare * (20/100) + 30
    } else{
        return "Invalid"
    }
        return result 
}

// Problem -02 

function  onlyCharacter( str ) {

    let finalWord = ''

    if(typeof str === "string"){
        let split = str.split('')
        for(const removeSpace of split){
            if (removeSpace !== ' '){
                finalWord += removeSpace
            }
        }
        return finalWord.toUpperCase()
    } else{
        return "Invalid"
    }
        
}



// Problem - 03

function  bestTeam( player1, player2 ) {

          let fare1 = player1.foul + player1.cardR + player1.cardY
          let fare2 = player2.foul + player2.cardR + player2.cardY  

          if(fare1 > fare2){
            return player2.name
          } else if(fare1 < fare2){
            return player1.name
          } else if(fare1 === fare2){
            return "Tie"
          }else{
            return "Invalid"
          }

}


// Problem - 04

function  isSame(arr1 , arr2 ) {
        if(Array.isArray(arr1) && Array.isArray(arr2) ){
           if(arr1.length === arr2.length){
              let trueArr= []
              for(let i = 0; i<arr1.length; i++){
                if(arr1[i] === arr2[i]){
                  trueArr.push(true)
                  if(trueArr.length === arr1.length){
                    return true
                  }
                } else{
                  return false
                }
              }
              return true
            } else{
              return false
            }
          }else{
            return "Invalid"
          }
}


// Problem - 05
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
