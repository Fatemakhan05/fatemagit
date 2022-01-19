const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img ");
//Buttons
const prevBtn = document.querySelector("#preBtn");
const nextBtn = document.querySelector("#nextBtn");
//counter
let counter = 1;
const size = carouselImages[0].clientWidth + "px" ;
carouselSlide.style.transform = "translateX(" + (-size * counter )+ "px)";

 
//Button listeners
nextBtn.addEventListener('click', () => {
  if(counter >= carouselImages.length-1) return;
   
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});
prevBtn.addEventListener('click', () => {
    if (counter <=0)return;
   
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  });
  carouselSlide.addEventListener('transitionend',()=>{
      
     if(carouselImages[counter].id === 'lastClone'){
         carouselSlide.style.transition="none";
         counter = carouselImages.length -2;
         carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

     }
     if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition="none";
        counter = carouselImages.length -counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
     }
  });
  
// function getItems(){
//     db.collection("todo-items").onSnapshot((snapshot) => {
//         let items = [];
//         snapshot.docs.forEach((doc) => {
//             items.push({
//                 id: doc.id, 
//                 ...doc.data()
//             })
//         })
//         generateItems(items);
//     })
// }

// function generateItems(items){
//     let todoItems = []
//     items.forEach((item) => {
//         let todoItem = document.createElement("div");
//         todoItem.classList.add("todo-item");
//         let checkContainer = document.createElement("div");
//         checkContainer.classList.add("check");
//         let checkMark = document.createElement("div");
//         checkMark.classList.add("check-mark");
//         checkMark.innerHTML = '<img src="assets/icon-check.svg">';
//         checkMark.addEventListener("click", function(){
//             markCompleted(item.id);
//         })
//         checkContainer.appendChild(checkMark);

//         let todoText = document.createElement("div");
//         todoText.classList.add("todo-text");
//         todoText.innerText = item.text;

//         if(item.status == "completed"){
//             checkMark.classList.add("checked");
//             todoText.classList.add("checked");
//         }
//         todoItem.appendChild(checkContainer);
//         todoItem.appendChild(todoText);
//         todoItems.push(todoItem)
//     })
//     document.querySelector(".todo-items").replaceChildren(...todoItems);
// }



// function addItem(event){
//     event.preventDefault();
//     let text = document.getElementById("todo-input");
//     let newItem = db.collection("todo-items").add({
//         text: text.value,
//         status: "active"
//     })
//     text.value = "";
// }

// function markCompleted(id){
//     let item = db.collection("todo-items").doc(id);
//     item.get().then(function(doc) {
//         if (doc.exists) {
//             if(doc.data().status == "active"){
//                 item.update({
//                     status: "completed"
//                 })
//             } else {
//                 item.update({
//                     status: "active"
//                 })
//             }
//         }
//     })
// }

// getItems();
function getItems(){
    db.collection("todo-items").onSnapshot((snapshot) => {
        let items = [];
        snapshot.docs.forEach((doc) => {
            items.push({
                id: doc.id, 
                ...doc.data()
            })
        })
        generateItems(items);
    })
}

function generateItems(items){
    let todoItems = []
    items.forEach((item) => {
        let todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        let checkContainer = document.createElement("div");
        checkContainer.classList.add("check");
        let checkMark = document.createElement("div");
        checkMark.classList.add("check-mark");
        checkMark.innerHTML = '<img src="assets/icon-check.svg">';
        checkMark.addEventListener("click", function(){
            markCompleted(item.id);
        })
        checkContainer.appendChild(checkMark);

        let todoText = document.createElement("div");
        todoText.classList.add("todo-text");
        todoText.innerText = item.text;

        if(item.status == "completed"){
            checkMark.classList.add("checked");
            todoText.classList.add("checked");
        }
        todoItem.appendChild(checkContainer);
        todoItem.appendChild(todoText);
        todoItems.push(todoItem)
    })
    document.querySelector(".todo-items").replaceChildren(todoItems);
}



function addItem(event){
    event.preventDefault();
    let text = document.getElementById("todo-input");
    let newItem = db.collection("todo-items").add({
        text: text.value,
        status: "active"
    })
    text.value = "";
}

function markCompleted(id){
    let item = db.collection("todo-items").doc(id);
    item.get().then(function(doc) {
        if (doc.exists) {
            if(doc.data().status == "active"){
                item.update({
                    status: "completed"
                })
            } else {
                item.update({
                    status: "active"
                })
            }
        }
    })
}
 function deleteCompleted(){
    var item = db.collection('todo-items').where('status','==','completed');
    item.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
    });
    
}
getItems();