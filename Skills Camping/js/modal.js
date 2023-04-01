
// const open = document.getElementById("open");
// const modal_container = document.getElementById('modal_container');
// const close = document.getElementById('close');

// open.addEventListener('click', ()=>{
//     modal_container.classList.add('show');
// });


// close.addEventListener('click', ()=>{
//     modal_container.classList.remove('show');
// });

// let detei = 0;
// fetch("../api/reservation.json")
//     .then((response) => response.json())
//     .then((data)=> {
//         data.reservition.forEach(element =>{
//             console.log(element);
//             document.querySelector('.data').innerHTML += `<div class="item">${data[datei]}</div>`;
//             element[Object.keys(element)[0]].forEach((item)=>{
//                 if(item.status == "W"){
//                     item.status = "possible"
//                 }else if(item.status == "R"){
//                     item.status = "Proceeding"
//                 }else{
//                     item.status = "complete"
//                 }
//                 document.querySelector(`.${item.loc_num}`).innerHTML += `<div class = "item"><p class =`
//             });
//         })
//     });

 
let today = new DataTransfer();

let data = [
    "오늘",
    new
Date(today.setData(today.getDate ()+1)).toLocaleDateString (),

]

let datei = 0; 
fetch("./api/reservation.json")
    .then((response) => response.json())
    .then((data) => {
        data.reservition.forEach(element => {
            document.querySelector('.data').innerHTML += `
            <div class="item">${date[datei]}</div>
            `;
        });
    });

element[Object.keys(element)[0]].forEach((item) => {
    if(item.status == "W"){
        item.status = "possible"
    }else if(item.status == "R") {
        item.status = "Proceeding"
    }else{
        item.status = "complete"
    }
    ocument.querySelector (`.${item.loc_num}`).innerHTML +=
    `<div class = "item"><p class ="$ {item.status}"></P></div>`;
});
datai++