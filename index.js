//function for validating passwords (2 strings):

function validatePassword(key, password){

    let uppercase=false;
    let lowercase=false;
    let digit=false;
    const upper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const digits=["1","2","3","4","5","6","7","8","9","0"];
    
    //look for uppercase, lowercase, and digits    
    for(let i=0;i<password.length;i++){
        for (let j=0;j<upper.length;j++){
            if(password.charAt(i)===upper[j]){
                uppercase=true;
                break;
            }
        }
        for (let j=0;j<lower.length;j++){
            if(password.charAt(i)===lower[j]){
                lowercase=true;
                break;
            }
        }
        for (let j=0;j<digits.length;j++){
            if(password.charAt(i)===digits[j]){
                digit=true;
                break;
            }
        }
        

    }


    //if statement
    if(key===password && password.length>7 && digit && uppercase && lowercase){
        return true
    }
    else{
        return false
    }

}


function reverseString(password){

    let reversedCharArr=[];
    //push string characters starting from rightmost index to array
    for(let i=password.length-1;i>=0;i--){
        let dump=password.charAt(i);
        reversedCharArr.push(dump);
    }
    //use join method to join characters in the array
    let reversedString=reversedCharArr.join("");

    return reversedString
}


function storePassword(name,password1,password2){

    let newPassword=password1;
    //if both passwords are valid, set newPassword to be the reversed string of password2
    if(validatePassword(password1,password2)){
        newPassword=reverseString(password2);
    }
    //if not, return password1

    let passwordObject={
        name: name,
        newPassword: newPassword
    }

    return passwordObject;


}


console.log(storePassword("Kyle","HELLOWORLDo123","HELLOWORLDo123"));