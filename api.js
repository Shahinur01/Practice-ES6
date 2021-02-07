// const user ={id: 245, name:"shahinur"};

// const userJSON =JSON.stringify(user);
// console.log(userJSON);

// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(json => console.log(json))

  fetch ('https://jsonplaceholder.typicode.com/photos')
  .then(response =>response.json())
  .then (json => console.log(json))