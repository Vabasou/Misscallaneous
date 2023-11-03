var add_button = document.getElementById('add');
var rmv_button = document.getElementById('remove');
var the_input = document.getElementById('input');
var the_ul = document.getElementById('list');

function addFunc() {
  var li = document.createElement('li'); 
  li.innerText = the_input.value; 
  if (the_input.value != '') { 
    the_ul.appendChild(li);
    the_input.value = '';
  }
}

function rmvFunc() {
  var listItems = document.getElementsByTagName('li');
  for (var i = 0; i < listItems.length; i++) {
    if (the_input.value == listItems[i].innerText && the_input.value != '') {
      the_ul.removeChild(listItems[i]);
      break;
    }
  }
  the_input.value = '';
}

add_button.onclick = function() { addFunc(); };
rmv_button.onclick = function() { rmvFunc(); };
