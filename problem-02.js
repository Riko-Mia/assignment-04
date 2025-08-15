

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


console.log(onlyCharacter("  h e llo wor   ld"))
console.log(onlyCharacter("Cy   bar- At  tac k  "))
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "))
console.log(onlyCharacter("Serv er : : Do wn"))
console.log(onlyCharacter(["hack", "me"]))
console.log(onlyCharacter(true))