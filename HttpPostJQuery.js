// It is mainly used posting a form or any data
import $ from "jquery";
let user = {
  name: "Mbote Joseph",
  avatar: "jose.jpg",
};

let promise = $.post("https://myid.mockapi.io/api/v1/users", user); //user stands for the data you want to post
promise.then(
  (data) => console.log("Data :", data),
  (error) => console.log("Error :", error)
);

// let promise = $.post(url , data);
