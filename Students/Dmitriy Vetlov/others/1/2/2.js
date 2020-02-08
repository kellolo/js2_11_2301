function makeGETRequest(url, callback) {
    let xhr;

    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if(window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    }

    xhr.open('GET', url, true);
    xhr.send();
}