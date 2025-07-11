let s=Number(prompt("enter the number"));
    let a=function(){
       return t=(s%2==0)?"even":"odd";
    }
console.log(a());
//with arrow function//
let s1=Number(prompt("enter the number"));
let b=()=>{
     return d=(s1%2==0)?"even":"odd";
}
console.log(b());
//factorial//
let i=prompt("enter the number");
let n=()=>{
    let result=1;
    for(let o=2;o<=i;o++)
    {
        result*=o;
    }
    return result;
} 
console.log(n());
//number divisible by 3&5//
let  l=prompt("enter the number");
let m=(l)=>{
    if(l%3==0&&l%5==0){
        return "fizzbuzz";
    }
    else if(l%3==0){
        return "fizz";
    }
    else if(l%5==0){
        return "Buzz";
    }
    else{
        return l;
    }
}
console.log(m(l));