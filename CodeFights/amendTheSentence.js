// function amendTheSentence(s) {
//     const arr = s.split('');

//     for(let i = 0; i < arr.length; i++){
//         let char = arr[i];
//         if(char === char.toUpperCase()){
//             arr[i] = char.toLowerCase();
//             arr.splice(i, 0, ' ');
//             i+=1;
//         }
//     }
    
//     return arr.join('').trim();
// }

function amendTheSentence(s) {
    return s.replace(/([A-Z])/g, function(whole, group){
        return " " + group.toLowerCase();
    }).trim()
}


console.log(amendTheSentence("CodesignalIsAwesome"));