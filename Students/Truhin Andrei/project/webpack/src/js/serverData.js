
function makeGETRequest(url_request) {
    return new Promise ((res, rej) => {
        let xhr;
        xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    res (xhr.responseText);
                } else {
                    rej ('Error occured');
                }
            }
        }
        //console.log(777, url_request)

        xhr.open('GET', `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/${url_request}`, true)
        xhr.send()
    })
}

export default makeGETRequest;