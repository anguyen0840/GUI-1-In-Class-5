const ulList = document.querySelector("ul");

// ADD NEW ITEM TO END OF LIST
const lastItem = document.createElement("li");
lastItem.id = "five";
lastItem.textContent = "cream";
ulList.appendChild(lastItem);

// ADD NEW ITEM START OF LIST
const firstItem = document.createElement("li");
firstItem.id = "firstItem";
firstItem.textContent = "kale";
ulList.prepend(firstItem);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
const listItems = document.querySelectorAll("li");

listItems.forEach(item => {
    item.classList.add("cool");
});

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
const heading = document.querySelector("h2");
const itemCount = ulList.querySelectorAll("li");
const count = itemCount.length;
heading.textContent = `Buy Groceries ${count}`;
