
function  isSame(arr1 , arr2 ) {

          // You have to write your code 
          

          if(Array.isArray(arr1) && Array.isArray(arr2) ){
            if(arr1.length === arr2.length){
              for(let i = 0; i<arr1.length; i++){
                if(arr1[i] === arr2[i]){
                  // console.log(arr1[i], arr2[i])
                  // return false
                  console.log(true, "final")
                } else{
                  // return true
                  console.log(false, 'finals')
                }
              }
            } else{
              // return false
              console.log(false, "length same not")
            }
          }else{
            console.log('Invalid')
            // return "Invalid"
          }

}

// isSame([1, 2, 3] , [1 , 2 , 3])
// isSame([34 , 5 ,7 ,9 ], [ 34 , 5 , 7 ])
isSame([1, undefined , 3] , [1,null ,3])
// isSame([34 , 5 ,7 ,9 ], [ 34 , 5 , 7 ])
// isSame([1 , "4" , 4] ,[1 , 4  , 4])

// console.log(isSame([1, 2, 3] , [1 , 2 , 3]))
// console.log(isSame([1, undefined , 3] , [1,null ,3]))
// console.log(isSame([34 , 5 ,7 ,9 ], [ 34 , 5 , 7 ]))
// console.log(isSame([1 , "4" , 4] ,[1 , 4  , 4]))
// console.log(isSame({data: [2 , 5 , 6] } , [2 , 5 , 6]))

