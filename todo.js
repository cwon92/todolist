'use strict';

const createListBtn = document.getElementById('create');
const div = document.getElementById('box');
const content = document.getElementById("inputText");

createListBtn.addEventListener('click', function(){
  const newDiv = document.createElement('div');
  const newDoneBtn = document.createElement('button');
  const newDeleteBtn = document.createElement('button');
  const buttonDiv = document.createElement('div');
  const textBox = document.createElement('div');

  textBox.innerHTML = content.value;
  content.value = " ";
  
  div.id = 'newDiv';
  newDoneBtn.id = 'doneBtn';
  newDeleteBtn.id = 'deleteBtn';
  buttonDiv.id = 'buttonDiv';

  newDeleteBtn.addEventListener('click', function(){
    newDiv.style.display = 'none';
  })

  newDoneBtn.addEventListener('click', function(){
    textBox.style.textDecoration = "line-through";
  })

  newDiv.style.display = 'flex';
  newDiv.style.alignItems = 'center';
  newDiv.style.justifyContent = 'space-between';
  newDiv.style.background = 'none';
  newDiv.style.width = '500px';
  newDiv.style.height = '40px';
  newDiv.style.padding = '20px';
  newDiv.style.borderRadius = '5px';
  newDiv.style.border = '1px solid tomato';

  buttonDiv.style.display = 'flex';

  newDoneBtn.innerHTML = '했음';
  newDoneBtn.style.borderRadius = '4px';
  newDoneBtn.style.marginRight = '10px';
  
  newDeleteBtn.innerHTML = '지우기';
  newDeleteBtn.style.borderRadius = '4px';
  
  div.appendChild(newDiv);
  newDiv.appendChild(textBox);
  newDiv.appendChild(buttonDiv);
  buttonDiv.appendChild(newDoneBtn);
  buttonDiv.appendChild(newDeleteBtn);
})

