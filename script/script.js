
var taskName = document.getElementById('taskname');
var addTask = document.getElementById('addtask');
var remAllBtn = document.getElementById('removeall');

var taskContainer = document.getElementById('taskcontainer');

showTask();

addTask.addEventListener("click",()=>{

    let taskValue = taskName.value;

    // console.log(taskValue.length);

    if(taskValue.length == 0)
    {
        alert("Please enter a task in field");
    }

    else
    {

    let webTask = localStorage.getItem("localtask");
    if(webTask == null)
    {
        tasjObj = [];
    }
    else
    {
        tasjObj = JSON.parse(webTask);
    }

    tasjObj.push(taskValue);

    localStorage.setItem("localtask",JSON.stringify(tasjObj));

    showTask();

    }

});

function showTask()
{
    let webTask = localStorage.getItem("localtask");
    if(webTask == null)
    {
        tasjObj = [];
    }
    else
    {
        tasjObj = JSON.parse(webTask);
    }

    let html = '';

    tasjObj.forEach((elements,index) => {

       
        
        html += `
        <div class="task">
            <span>
            ${elements}
            </span>
            <button type="button" class="delete" onclick="deleteItem(${index})">
            <i class="fa-solid fa-trash"></i>
            </button>
        </div>
  
    `;

    });

    taskContainer.innerHTML = html;

    taskName.value = "";

}

function deleteItem(getIndex)
{
    // console.log(getIndex);

    let webTask = localStorage.getItem("localtask");
    let tasjObj = JSON.parse(webTask);

    tasjObj.splice(getIndex, 1);

    localStorage.setItem("localtask",JSON.stringify(tasjObj));
    showTask();


}



remAllBtn.addEventListener("click",()=>{

    taskContainer.innerHTML = "";

    localStorage.clear();
});

