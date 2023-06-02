// Function to add a new grocery item
function addGroceryItem(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input value
  var itemName = document.getElementById("itemName").value;

  // Create a new list item
  var newItem = document.createElement("li");
  newItem.textContent = itemName;

  // Append the new item to the list
  var groceryList = document.getElementById("groceryItems");
  groceryList.appendChild(newItem);

  // Clear the input field
  document.getElementById("itemName").value = "";

  // Update the CSV file (Assuming you're using a server-side language like Node.js)
  fetch('/update-csv', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item: itemName }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to update CSV file');
    }
  })
  .catch(error => {
    console.error(error);
  });
}

// Event listener for form submission
var form = document.getElementById("groceryForm");
form.addEventListener("submit", addGroceryItem);
