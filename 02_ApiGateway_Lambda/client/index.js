//// run in https://codepen.io

const url = "https://API.execute-api.ap-northeast-1.amazonaws.com/dev/books";

//// ES6
fetch(url, {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  headers: {
    "user-agent": "Mozilla/4.0 MDN Example",
    "content-type": "application/json"
  },
  body: JSON.stringify({
    name: "Refactoring: Improving the Design of Existing Code",
    authors: ["Martin Fowler", "Kent Beck"]
  })
  //mode: 'cors' // no-cors, cors, *same-origin,
})
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.log(error.name, error.message));

//// ES5
var xhr = new XMLHttpRequest();
xhr.open("POST", url);
xhr.onreadystatechange = function(event) {
  console.log(event.target);
};
xhr.send();
