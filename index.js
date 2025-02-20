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



    if(key===password && password.length>7 && digit && uppercase && lowercase){
        return true
    }
    else{
        return false
    }

}


let validation = validatePassword("HELLOWORLD123","HELLOWORLD123");
console.log(validation)