//conditional statement//
let age2=prompt("enter your age");
if(age2>=21){
    console.log("you can vote");
}else{
    console.log("you are tooo young to vote");
}
//Else if//
let marks=90;
if(marks>88){
    console.log("Excellent");
}else if(marks>65){
    console.log("Good");
}else{
    console.log("work hard");
}
//nested if //
let age=25;
let isstudent=true;
if(age<20){
    if(isstudent){
        console.log("young student");
    }else{
        console.log("young non-student");
    }
}
else{
    console.log("greater than conditon");
}
//nested if task//
let number=prompt("enter the number");
if( number>0){
if(number%2===0)
    {
        alert("the number is positive and even");
    }else
    {
         alert("the number is positive and odd");
    }
}
else if(number<0){
    if(number%2===0){
        alert("the number is negative and even");
     }
     else
     {
         alert("the number is negative and odd");
     }
    }
    else{
         alert("the number is zero and even");
    }
    //switch //
    let day=2;
    switch(day){
        case 1:
        console.log("Monday");
        break;
        case 2:
        console.log("Tuesday");
        break;
        case 3:
         console.log("Other day");
    }
    //switch task//
    let name3=(prompt("Enter your name"));
    let age1=(prompt( name3 +"Enter your age"));
    age1=Number(age1)
    switch(true){
        case age1<0 || Number.isNaN(age):
                console.log("not eligible for vote");
                break;
        case age1>=18 && age1<65:
            console.log("you are eligible for vote");
        case age1>=65:
            console.log(" you are eligble for vote and you are senior citizen");
            break;
        case age1>=13 && age<18:
            console.log("you are a tennager-not eligible to vote");
            break;
        default:
            console.log("No Special Category");
            break;
    }