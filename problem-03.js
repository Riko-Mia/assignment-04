


function  bestTeam( player1, player2 ) {

          let fare1 = player1.foul + player1.cardR + player1.cardY
          let fare2 = player2.foul + player2.cardR + player2.cardY  

          if(fare1 > fare2){
            // console.log(player2.name)
            return player2.name
          } else if(fare1 < fare2){
            // console.log(player1.name)
            return player1.name
          } else if(fare1 === fare2){
            return "Tie"
          }else{
            return "Invalid"
          }

}


console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },

{ name: "France", foul: 10, cardY: 2, cardR: 1 }))