// link  https://docs.google.com/document/u/0/d/1mmm5iD2z8tz3W8iK-vXNLRzFHpd1U3FWj5ZbAv-Q3Is/mobilebasic?urp=gmail_link


function totalFine( fare ) {

    let result = 0

    if(typeof fare === "number" && 0 < fare){
        result = fare + fare * (20/100) + 30
    } else{
        return "Invalid"
    }
        return result 
}



// console.log(totalFine("65"))