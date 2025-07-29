 console.log("Hello World");

 let chicken = "123;
 console.log(chicken);
 console.log(typeof chicken);

 console.log(10 + "egg");
 console.log(10 + 8 + "eggs");
 console.log("eggs"+ 10 +8);

 console.log(20>5);

 //Both Conditions Need to be true
 console.log(7>3)&&(10>8);

 //Only one condition must be true
 console.log(10>3)||(5>20);

 //If the statement is logical or not
 console.log(!5>3);

 const hour = new Date().getHours();
 let greeting = "";

 if (hour<12){
    gretting = "Good morning☀️";
 }else if (hour<18){
    greeting = "Good afternoon";
 }else{
    greeting = "Good evening";
 }

 document.getElementById("greeting").innerText = greeting;