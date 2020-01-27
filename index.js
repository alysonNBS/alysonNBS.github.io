var request = new XMLHttpRequest();

request.open("GET", "publications/publications.json");
request.responseType = "json";

request.send();

request.addEventListener("readystatechange", function() {
    console.log(request.readyState);
});