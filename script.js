console.log("operators");
//arithematic operators
let num1=10;
let num2=5;

console.log("num1 :"+num1);
console.log("num2 :"+num2);

console.log("the addition of num1 and num2:"+ (num1+num2));
console.log("the subtraction of num1 and num2:"+(num1-num2));
console.log("the multiplication of num1 and num2:"+(num1*num2));
console.log("the divisionof num1 and num2:"+(num1/num2));
console.log("the modulo of num1 and num2:"+(num1%num2));
console.log("the power of num1 and num2:"+(num1**num2));

//assignment operator
console.log("plus equal to: "+(num1+=1));
console.log("minus equal to: "+(num2-=1));
console.log("multiply equal to: "+(num1*=2));
console.log("divide equal to: "+(num1/=num2));
console.log("modulo equal to: "+(num1%=num2));
console.log("power equal to: "+(num1**=num2));

//comparison operator
let value1=5;
let value2='5';
let value3=10;
console.log("value1:"+value1);
console.log("value2:"+value2);
console.log("value3:"+value3);

console.log("value1==value2: "+(value1==value2));
console.log("value1===value2: "+(value1===value2));
console.log("value1!=value3: "+(value1!=value3));
console.log("value1<value3: "+(value1<value3));
console.log("value1>value3: "+(value1>value3));
console.log("value1<=value3: "+(value1<=value3));
console.log("value1>=value3: "+(value1>=value3));

//logical operator
let statement1=value1<10 &&value3==0;
console.log(statement1);

let statement2=value1==10 || value3==10;
console.log(statement2);

let statement3=value1!=10;
console.log(statement3);

//increment and decrement
let increment = ++num1;
let decrement = --num2;
console.log(num1);
console.log(num2);

//functions
function add(a,b){
    c=a+b;
    console.log("addition of a+b"+" "+c);
}
add(6,7); //function call

//if-else-elseif statements 
let age=15;
if(age<10){
    console.log("not eligible");
}
else if(age>=15 && age<30){
    console.log("you are eligible");
}
else{
    console.log("wrong input");
}

//for loop
for(i=2;i<6;i++){
    console.log("the loop is running for: "+" "+i+" "+"time");
}

//while loop 
let j=0;
while(j<5){
    console.log("this is while loop ");
    j+=1;
}
//Strings
let fname="vyshnavi";
let initial="akkinepalli";
console.log(fname+initial);
console.log("uppercase"+fname.toUpperCase());
console.log("lowercase"+fname.toLowerCase());
console.log("Replace: " + fname.replace("vyshnavi", "vaishnavi"));
console.log("Split: " + fname.split(" "));
console.log("Index of: " + fname.indexOf("p"));
console.log("Concat: " + fname.concat(" is a 3rd year student"));