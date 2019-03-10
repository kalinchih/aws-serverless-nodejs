// run in https://codepen.io

fetch(
  "https://gghd87h0s9ug.execute-api.ap-northeast-1.amazonaws.com/dev/comparisons",
  {
    method: "POST" // *GET, POST, PUT, DELETE, etc.
    //mode: 'cors' // no-cors, cors, *same-origin
  }
)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.log(error.name, error.message));
