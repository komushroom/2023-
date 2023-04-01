var counter = 1;
let i = 0;

// $('input[name=radio-btn]').attr('value',counter);


let Sex = setInterval(() => {
   document.getElementById("radio"+ counter).checked = true;
   counter++;
   if(counter > 3){
    counter = 1;
   } 

},3000);

function star(){
   document.getElementById("stop").click ;
   if(i == 0){
      clearInterval(Sex);
      i++
   }else{
      Sex = setInterval(() => {
         document.getElementById("radio"+ counter).checked = true;
         counter++;
         if(counter > 3){
          counter = 1;
         } 
      
      },3000);
      i--;
   }
   console.log(i)
}

window.onload = function() {
   var ex1 = document.getElementById('radio1');
   var ex2 = document.getElementById('radio2');
   var ex3 = document.getElementById('radio3');
   var eee = document.getElementById('stop');

   ex1.onclick = handler;
   ex2.onclick = handler;
   ex3.onclick = handler;
   // ee2.onclick = end;
   eee.onclick = star;
}
 
function handler() {
   let v = document.querySelector('input[name="radio-btn"]:checked').value;
   counter = parseInt(v);
}

// $.ajax({
//    url: 'https://jsonplaceholder.typicode.com/posts',
//    type:'GET',
//    success: function(data) {
//       console.log(data);
//    },
//    error: function(error){
//       console.error(error);
//    }
// });