

/*
var button1=document.querySelector("//#cout1");
var playScore1=document.querySelector("#score1");
var goalScored1=1;

var button2=document.querySelector("#cout2");
var playScore2=document.querySelector("#score2");
var goalScored2=1;

var reset=document.querySelector("#reset");

//for action like clicking to occur use eventListener
button1.addEventListener("click",
 function(){
 var limit=querySelector("#limit").value;//specify limit item on screen
  goalScored1++;
  playScore1.textContent=goalScored1;

 if((goalScored1==limit)||(goalScored1>=limit)){
    playScore1.classList.add("green");
    button1.setAttribute("disabled", true);
    button1.setAttribute("disabled", true)

document.querySelector("limit").value=11;

 }
 }
 
 )

 button2.addEventListener("click",
 function(){
 var limit=querySelector("#limit").value;//specify limit item on screen
  goalScored2++;
  playScore2.textContent=goalScored2
 if((goalScored1==limit)||(goalScored2=>limit)){
    playScore2.classList.add("green");
    button2.setAttribute("disabled", true);
    button1.setAttribute("disabled", true)
    printWinner();
    
 }

 }
 
 )

 reset.addEventListener("click",function(){
    button1.removeAttribute("disabled");
    button2.removeAttribute("disabled");
    playScore1.ClassList.remove("#green");
    playScore1.ClassList.remove("#green");
    goalScored1,goalScored2=0;
    playScore1.textContent=goalScored1;
    playScore1.textContent=goalScored1;
    document.querySelector("limit").value=5;
    Winner.textContent="";
 })

 function printWinner(){
   if(goalScored1>goalScored2){window.textContent="pLAYER1";}
 
else {


   printWinner.textContent="PLayer2"
}}

*/




function player1(){
  
   
   
   var  score1=document.querySelector("#score1");
   var showin=document.querySelector("#showin");
    
   goalScored1=0;
   var button1=document.querySelector("#count1");
 // var limit=document.querySelector("#limit").value;
button1.addEventListener("click",
 function(){
  goalScored1++;
  score1.textContent=goalScored1.toString();

   
 

 }


 
 
 )
   

 
   
   
}



function player2(){
 
   var  score2=document.querySelector("#score2");
   var showin=document.querySelector("#showin").value;
   goalScored2=0;
   var button2=document.querySelector("#count2");
  
button2.addEventListener("click",
 function(){
  goalScored2++;
  score2.textContent=goalScored2.toString();

 


  
 }
 
 )



   
   
}

Windecider=()=>{
 
  // var  score1=document.querySelector("#score1");
  // var  score2=document.querySelector("#score2");
  if(goalScored1>goalScored2){
   showin.innerHTML="Player1 Win"
}
else if(goalScored1>goalScored2){
   showin.innerHTML="Player2 Win";

}
  
else if(goalScored1==goalScored2){
   showin.innerHTML="Both wins natch";
}

}