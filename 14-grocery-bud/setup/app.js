// ****** SELECT ITEMS **********

const groceryForm = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery');
const clearbtn = document.querySelector('.clear-btn'); 
const groceryList = document.querySelector('.grocery-list');
const groceryContainer = document.querySelector('.grocery-container');
const submitBtn = document.querySelector(".submit-btn");



// edit option
let editElement;
let editFlag = false;
let editID = "";


// ****** EVENT LISTENERS **********
groceryForm.addEventListener('submit',addItem);
clearbtn.addEventListener('click',clearListItem);
window.addEventListener('DOMContentLoaded',setUpItms);
// ****** FUNCTIONS **********

function addItem(e) {

  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if(value && !editFlag){

    createListItem(id,value);

  // display alert
   displayAlert("item added sucessfully","success");
   // display container
   groceryContainer.classList.add('show-container');

   //add to local storeage
   addToLocalStorage(id , value);
   // set to defalut
   setBackToDefault();

  }else if(value  && editFlag ){
    editElement.innerHTML = value;
    displayAlert('Changed item','Sucess');
    editLocalStorage(editID,value);
    setBackToDefault();
  }
  else{
    displayAlert("please enter value","danger");
  };
}



function displayAlert(text , action){
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(()=>{
   alert.textContent = "";
   alert.classList.remove(`alert-${action}`);
  },1000);

}

function setBackToDefault(){
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

function clearListItem(){
 const item = document.querySelectorAll('.grocery-item');
 if(item.length>0){
    item.forEach(elemnt=>{
      groceryList.removeChild(elemnt);
    })
 
  }
  groceryContainer.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
//  localStorage.removeItem("list");

}

function deleteItem(e){
   const item = e.currentTarget.parentElement.parentElement;
   const id = item.dataset.id;
   groceryList.removeChild(item);
   if(groceryList.children.length===0){
     groceryContainer.classList.remove('show-container');
   }
   displayAlert('item removed successfully','danger')
   setBackToDefault();
   removeFromLocalStorage(id);
  }

  function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
     editID = element.dataset.id;
     editFlag = true;
     editElement = e.currentTarget.parentElement.previousElementSibling;
     grocery.value = editElement.innerHTML;
     submitBtn.textContent = "Edit";
  }

// ****** LOCAL STORAGE **********

function addToLocalStorage(id,values){
  const grocery = {id:id,value:values};
   let itemlist = getLocalStore();
    itemlist.push(grocery);
   localStorage.setItem("list",JSON.stringify(itemlist));
}
function getLocalStore(){
  return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
}

function removeFromLocalStorage(id){
  let items = getLocalStore();
  items = items.filter(item=>{
    if(item.id !== id){
      return item;
    }
  });
  localStorage.setItem("list",JSON.stringify(items));

}

function editLocalStorage(id, value){
  let items = getLocalStore();
  items = items.map(item=>{
    if(item.id===id){
       item.value = value;
    }
    return item
  })
  localStorage.setItem("list",JSON.stringify(items));

}
// ****** SETUP ITEMS **********
 
function setUpItms(){
  let items = getLocalStore();
  if(items.length > 0){
  items.forEach(item=>{
    createListItem(item.id,item.value);
  })
  groceryContainer.classList.add('show-container');
}
}



function createListItem(id,value){

  const element =  document.createElement("article");
  const attribute=document.createAttribute("data-id");
  attribute.value = id;
  element.setAttributeNode(attribute);
  element.classList.add("grocery-item");
  element.innerHTML = `<p class="title">${value}</p>
  <div class="btn-container">
    <!-- edit btn -->
    <button type="button" class="edit-btn">
      <i class="fas fa-edit"></i>
    </button>
    <!-- delete btn -->
    <button type="button" class="delete-btn">
      <i class="fas fa-trash"></i>
    </button>
  </div>
`;
 // append child list
 groceryList.appendChild(element);

 const deletebtn =element.querySelector('.delete-btn');
 deletebtn.addEventListener('click',deleteItem);

 const editbtn =element.querySelector('.edit-btn');
 editbtn.addEventListener('click',editItem);
 list.appendChild(element);

}
