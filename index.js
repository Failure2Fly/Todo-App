const addItem = () => {
  let newArray = []
  let item = document.getElementById('todo-input').value
  let listItem = document.getElementById('list-item')

  newArray.push(item)
  console.log(newArray)
  return listItem.innerHTML = item;
}

const completeTask = () => {
  let completeUndoButton = document.getElementById('complete-Undo')
  let listItem = document.getElementById('list-item')

  
  listItem.classList.add('completed')
  return completeUndoButton.innerHTML = 'Undo';
}






const getListData = () => {
  let listDataItem = "";

  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => console.log(data.title))

  listDataItem = data.title
  return listDataItem
}
// getListData();

const importList = () => {

  let listItem = document.getElementById('list-item')
  listItem.innerHTML = listDataItem;
  
}