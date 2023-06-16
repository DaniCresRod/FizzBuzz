 export function FizzBuzz(num){
    
    if(num%3==0 && num%5==0){
        console.log("FizzBuzz");
        return "FizzBuzz";
    }
    else{
        if(num%3==0){
            console.log("Fizz");
            return "Fizz";
        }
        if(num%5==0){
            console.log("Buzz");
            return "Buzz";
        }
    }
    console.log(num);
    return num;
        
}

