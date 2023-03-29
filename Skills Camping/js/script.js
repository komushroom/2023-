var counter = 1;

// $('input[name=radio-btn]').attr('value',counter);


setInterval(() => {
   document.getElementById("radio"+ counter).checked = true;
   counter++;
   if(counter > 3){
    counter = 1;
   } 

},3000);

// let interval = setInterval(counter)
// // sadfsdfffffffffffffffffffdssssssssssssss
// let toggle = true

// function counter(){
//    document.getElementById("stop").checked;
//    if(counter =0  ){
//       clearInterval(counter)
//    }
// }
function star(){
   document.getElementById("stop").click()   ;
   star++;
   clearInterval(counter = 1)
   console.log('star')
}

// function end(){
//    document.getElementById("play").click;
//    end++;
//    document.getElementById("radio"+ counter).checked = true;
//    console.log('end')
// }


// document.getElementById("stop").click;
//    star++;
//    setInterval(counter,500)
//    console.log('star')



window.onload = function() {
   var ex1 = document.getElementById('radio1');
   var ex2 = document.getElementById('radio2');
   var ex3 = document.getElementById('radio3');
   var ee2 = document.getElementById('play')
   var eee = document.getElementById('stop')

   ex1.onclick = handler;
   ex2.onclick = handler;
   ex3.onclick = handler;
   ee2.onclick = end;
   eee.onclick = star;
}
 
function handler() {
   let v = document.querySelector('input[name="radio-btn"]:checked').value;
   counter = parseInt(v);
}
// 멈춤 버튼

// function stop(){
//    document.getElementById('stop').checked = true;
//    clearInterval(counter)
// }

// function stop () {
//    document.getElementById('stop').click
// }
