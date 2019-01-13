function checkPalindrome(inputString) {
    let result = true;
    let size = Math.ceil(inputString.length / 2);
    
    for(let i = 0; i < size; i++){
        let head = inputString[i];
        let tail = inputString[inputString.length - i - 1]
        
        if(head !== tail){
            result = false;
            break;
        }
    }
    
    return result;
}
