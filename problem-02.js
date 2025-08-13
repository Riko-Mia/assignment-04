

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


console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "))