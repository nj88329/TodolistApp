let addtaskinput = document.getElementById('addtaskinput');
let addtaskbtn = document.getElementById('addtaskbtn');
showTask();

addtaskbtn.addEventListener('click', function(){
    addtaskinputval = addtaskinput.value;
 if(addtaskinputval.trim()!=0){
   
    let webtask = localStorage.getItem('localtask');
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
    taskObj.push(addtaskinputval);
    
    localStorage.setItem('localtask', JSON.stringify(taskObj));
    addtaskinput.value='';
}
    showTask();
}) 


function showTask(){
    let webtask = localStorage.getItem('localtask');
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    let addtasklist = document.getElementById('tbl');
    taskObj.forEach((item,index) => {
        html +=`
        <tr>
        <th scope="col"> ${index+1} </th>
        <th scope="col"> ${item} </th>
        <td> <button type="button" onclick="edittask(${index})">Edit</th>
        <td> <button type="button" onclick="deltask(${index})">Delete</th>
      </tr>
        `
    });
    addtasklist.innerHTML=html;
}
function deltask(index){
    addtaskinput.value='';
    let webtask = localStorage.getItem('localtask');
    let taskObj = JSON.parse(webtask);
        taskObj.splice(index,1);
        localStorage.setItem('localtask',JSON.stringify(taskObj));
        showTask();    
}

let deleteallbtn = document.getElementById('deleteallbtn');
deleteallbtn.addEventListener('click',function(){
let webtask = localStorage.getItem('localtask');
let taskObj = JSON.parse(webtask);
    if(webtask==null){
        taskObj=[];
    }
    else{
        taskObj= JSON.parse(webtask);
        taskObj = [];
    }
    addtaskinput.value='';
    localStorage.setItem('localtask', JSON.stringify(taskObj));
    showTask();
})
function edittask(index){
    let saveindex=document.getElementById('saveindex');
    let addtaskbtn = document.getElementById('addtaskbtn');
    let savetaskbtn = document.getElementById('savetaskbtn');
    saveindex.value = index;
    let webtask = localStorage.getItem('localtask');
    let taskObj = JSON.parse(webtask);
    addtaskinput.value = taskObj[index];
    addtaskbtn.style.display='none';
    savetaskbtn.style.display='block';
}

//savetask
let savetaskbtn = document.getElementById('savetaskbtn');
savetaskbtn.addEventListener('click', function(){
    let webtask = localStorage.getItem('localtask');
    let taskObj = JSON.parse(webtask);
    let saveindex = document.getElementById('saveindex').value;
    taskObj[saveindex] = addtaskinput.value;
    addtaskbtn.style.display='block';
    savetaskbtn.style.display='none';
    localStorage.setItem('localtask',JSON.stringify(taskObj));
    addtaskinput.value='';
    showTask();
})