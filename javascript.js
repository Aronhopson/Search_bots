// function charCount (str){
//     let count = {};
//     for(let i=0; i<str.length; i++){
//         let char = str[i].toLowerCase()
//         if(count[char] > 0){
//             count[char]++
//         }else{
//             count[char] = 1
//         }
//     }
//     return count
// }
// //console.log(count)
// console.log(charCount("HHhello"))


// function Arr(x,y){
//     if(x.length !== y.length){
//         return false
//     }

//     for(let i=0; i<x.length; i++){
//         let correctIndex = y.indexOf(x[i]**2)
//         if(correctIndex === -1){
//             return false
//         }else {
//             y.splice(correctIndex,1)
//         }
//     }
//     return true
      
// }

// console.log(Arr([1,2,3],[1,4,9]))

// function loop(x,y){
//     if(x.length !== y.length){
//         return false
//     }
//     let Arr1 ={};
//     let Arr2 = {}
//     for(let val of x){
//         Arr1[val] = (Arr1[val] )
//     }
//     for(let val of y){
//         Arr2[val] = (Arr2[val])
//     }

//     console.log(Arr1)
//     console.log(Arr2)

//     for(let key in Arr1){
//         // if(!(key**2 in Arr2)){
//         //     return false
//         // }
//         if(Arr2[key**2] !== Arr1[key]){
//                 return false
//         }
//     }
//     return true
// }
// console.log(loop([1,2,3],[1,4,9]))

function anagram(x,y){
    if(x.length !== y.length){
        return false
    }

    const lookup = {}

    for(let i=0; i< x.length; i++){
        let letter = x[i]
        lookup[letter] ? lookup[letter] =+1 : lookup[letter]= 1
    }
    for(let i=0; i<y.length; i++){
        let letter = y[i]
        if(!lookup[letter]){
            return false
        }else{
           lookup[letter] -=1
        }
    }
    return true
}

console.log(anagram(["q,w,e"],["q,w,eq"]))