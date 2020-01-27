var request = new XMLHttpRequest();

request.open("GET", "publications/publications.json");
request.responseType = "json";

request.send();

request.addEventListener("readystatechange", function() {
    if(request.readyState == 4 && request.status == 200)
        console.log(request.response);
});