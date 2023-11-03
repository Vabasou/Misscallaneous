var itemList = [];

function addToList(itm) {
  itemList.push(itm);
  console.log("Item added: " + itm);
  document.getElementById('list').innerHTML += '<li>' + itm + '</li>';
}

function checkAndRemoveFromList() {
  var itemToRemove = document.getElementById('itemInput').value; 

  if (itemList.indexOf(itemToRemove) > -1) { 
    itemList.splice(itemList.indexOf(itemToRemove), 1); 
    var updatedList = '';
    for (var i = 0; i < itemList.length; i++) {
      updatedList += '<li>' + itemList[i] + '</li>';
    }
    document.getElementById('list').innerHTML = updatedList;
    console.log('Item removed: ' + itemToRemove);
  }
  document.getElementById('itemInput').value = '';
}

document.getElementById('addItem').onclick = function() {
  addToList(document.getElementById('itemInput').value);
}

document.getElementById('itemInput').onkeypress = function(ev) {
  var key = ev.keyCode || ev.which; 
  if (key == 13) { 
    checkAndRemoveFromList();
  }
}