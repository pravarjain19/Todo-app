const addBtn = document.querySelector(".add");
const inpField = document.querySelector(".text");

const reminder = document.querySelector(".container");

var arr = [];



function addData(remove , index){
    if(remove == "remove"){
        arr.splice(index , 1);
        console.log(arr);
        showList(arr)
    }
    else{
    arr.push(inpField.value);
   
    console.log(arr);
   
    showList(arr);

    inpField.value="";
    }
    

}
function showList(list){
    reminder.innerHTML = "";
    for (let index = 0; index < list.length; index++) {
       reminder.innerHTML += ` <div class="reminders">
       <div class="left">
       <input type="checkbox" name="text" id="${index}" onclick="textCross(this)">
       <label for="text" id="lable${index}">${list[index]}</label>
     </div>
     <div class="right">
       <button class="cross" id=${index} onclick="removeEle(this)">𐤕</button>
     </div> </div>`
        
    }
}

function removeEle(e){
    let id = e.getAttribute("id");
    addData("remove" , id);
}


function textCross(e){
    var inptag = e;
    let id = inptag.getAttribute("id");
  
   var labelEle =  document.getElementById(`lable${id}`);
   
   if(inptag.checked){
    labelEle.classList.add("text-through");
   }
   else{
    labelEle.classList.remove("text-through");
   }
   
}


// Execute a function when the user presses a key on the keyboard
inpField.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    addBtn.click();
  }
});

