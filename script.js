const inputb = document.getElementById('input-box');
const listc = document.getElementById('list-container');

function addtask() {
   if(inputb.value === ''){
    alert("You must write something");
   }
   else{
    let li = document.createElement("li");
    li.innerHTML=inputb.value;
    listc.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML='\u00d7';
    li.appendChild(span);
   }
     inputb.value ='';
     saveData();
}

listc.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listc.innerHTML);
}
function showTask(){
    listc.innerHTML = localStorage.getItem('data');
}
showTask();