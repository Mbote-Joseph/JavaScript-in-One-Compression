// you have to install jQuery- npm install jquery

// jQuery and HTTP GET
import $ from "jquery";

$.get("https://myid.mockapi.io/api/v1/users", (data) =>
  console.log("data : ", data)
);

// OR
import $ from "jquery";

let promise = $.get("https://myid.mockapi.io/api/v1/users");
promise.then(
  (data) => console.log("Success : ", data),
  (error) => console.log("Error :", error)
);

// let promise =$.get(url);
