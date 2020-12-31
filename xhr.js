// XHR- XML Http Response
// XML is too low level for typical use and we use a third party library.
// HTTP Requests using XHR

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
xhttp.open("GET", "https://myid.mockapi.io/api/v1/users", true);
xhttp.send();
