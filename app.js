var selectFiled = document.getElementById('selectFiled');
var selectText = document.getElementById('selectText');
var options = document.getElementsByClassName('options');
var hide = document.getElementsByClassName('hide');
var selectFiled = document.getElementById('selectFiled');
var list = document.getElementById('list');
var arrow = document.getElementById('arrow');

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle('hide');
    arrow.classList.toggle('rotate');
  }
}

selectFiled.onclick = function () {
  list.classList.toggle('hide');
   arrow.classList.toggle('rotate');
}














