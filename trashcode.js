// NOTE: This code is intentionally bad and should not be used as a good practice example.

var itemList = []; // Global variable, bad practice

// Add items to list, poor naming and no use of 'const' or 'let'
function addToList(itm) {
  itemList.push(itm);
  console.log("Item added: " + itm); // Console logging, not ideal for production code
  // Update the UI directly, not separated into a different function
  document.getElementById('list').innerHTML += '<li>' + itm + '</li>';
}

// Function does too many things and has poor naming
function checkAndRemoveFromList() {
  var itemToRemove = document.getElementById('itemInput').value; // Should use let or const

  if (itemList.indexOf(itemToRemove) > -1) { // No error handling or messaging if item does not exist
    itemList.splice(itemList.indexOf(itemToRemove), 1); // Not using variable to store index
    // Direct DOM manipulation within logic function, also redundant code
    var updatedList = '';
    for (var i = 0; i < itemList.length; i++) { // Should use let
      updatedList += '<li>' + itemList[i] + '</li>'; // Inefficient DOM update
    }
    document.getElementById('list').innerHTML = updatedList;
    console.log('Item removed: ' + itemToRemove); // Console logging
  }
  // Clears the input without checking if the removal was successful
  document.getElementById('itemInput').value = '';
}

// Poorly structured code, no separation of concerns
document.getElementById('addItem').onclick = function() {
  addToList(document.getElementById('itemInput').value); // Directly accessing DOM element value
}

// Adding onkeypress event in a very confusing way
document.getElementById('itemInput').onkeypress = function(ev) {
  var key = ev.keyCode || ev.which; // No use of 'const' or 'let'
  if (key == 13) { // Magic number, should use a named constant for 'Enter' keycode
    checkAndRemoveFromList(); // Misleading function name as it checks and removes but is triggered on keypress
  }
}
