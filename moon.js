'use strict';

 
const createListBtn = document.getElementById('create');
const div = document.getElementById('box');

 
const content = document.getElementById("inputText");

 
createListBtn.addEventListener('click', function () {
  const newDiv = document.createElement('div');
  const newDoneBtn = document.createElement('button');
  const newDeleteBtn = document.createElement('button');

 
  newDiv.innerHTML = content.value;
  content.value = " "


 
  newDiv.style.display = 'flex';
  newDiv.style.backgroundColor = 'red';
  newDiv.style.width = '300px';
  newDiv.style.height = '80px';
  newDiv.style.padding = '20px';
  newDiv.style.borderRadius = '5px'
  newDoneBtn.innerHTML = '했음';
  newDeleteBtn.innerHTML = '지우기';

 
  div.appendChild(newDiv);
  div.appendChild(newDoneBtn);
  div.appendChild(newDeleteBtn);
})
