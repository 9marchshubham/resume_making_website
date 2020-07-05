let addbutton1 = document.getElementById("addbtnwork");
addbutton1.addEventListener("click", function() {
  let boxes1 = document.getElementById("Work");
  let clone1 = boxes1.firstElementChild.cloneNode(true);
  boxes1.appendChild(clone1);
});


let addbutton = document.getElementById("addbutton");
addbutton.addEventListener("click", function() {
  let boxes = document.getElementById("intern");
  let clone = boxes.firstElementChild.cloneNode(true);
  boxes.appendChild(clone);
});


let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function() {
  let box = document.getElementById("cer");
  let clon = box.firstElementChild.cloneNode(true);
  box.appendChild(clon);
});


let addbtn1 = document.getElementById("addbtn1");
addbtn1.addEventListener("click", function() {
  let box1 = document.getElementById("cer1");
  let clon1 = box1.firstElementChild.cloneNode(true);
  box1.appendChild(clon1);
});

