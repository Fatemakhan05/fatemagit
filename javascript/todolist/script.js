
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
        checkMark.innerHTML = '<img src="icon-check.svg">   '
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
    document.querySelector(".todo-items").replaceChildren(...todoItems);
    countActive();

}



function addItem(event){
    event.preventDefault();
    let text = document.getElementById("todo-input");
    let newItem = db.collection("todo-items").add({
        text: text.value,
        status: "active"
    })
    text.value = "";
    countAll();
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
        countAll();
         
      });
       
    
    
    
    });

    
}
   function countAll(){
        // console.log("runningcountAll");
        db.collection("todo-items")
          .get()
          .then(snap => {
            size = snap.size;
            document.getElementById("counter").innerHTML = size;
          });
      }
      function countActive(){
        // console.log("runningcountactive");
        db.collection("todo-items").where('status','==','active' )
          .get() 
          .then(snap => {
            size = snap.size;
            document.getElementById("counterA").innerHTML = size;
          });
      }
      
       

getItems();
countAll();
countActive();

 
const element = document.getElementById('item-clear').addEventListener('click', function () {
   


    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this task!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your  task has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your  task is safe!");
        }
      });
      
   

})
 setInterval(updateTime,1000);
 function updateTime(){
  let d = new Date()
   time.innerHTML = d.toLocaleString("en-AU") ;
 }
  
 