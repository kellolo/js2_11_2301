
export default class ServerData{

  constructor(){

  };

  _makeGETRequest(url) {
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

        xhr.open('GET', url, true)
        xhr.send()
    })
}

  _getDataFromRequest() {
    let url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';
    let r;
 
    return this._makeGETRequest (url)
      .then (data => {
        console.log (JSON.parse(data))
         //result = ;
        //res(JSON.parse(data));
        r= JSON.parse(data);
      })
      .catch (err => {

          console.log (2, err);
          rej(err);
      })
    
    console.log (5, r);
    return r;
   
  }

  getAllGoods(){
    
    return this._getDataFromRequest();

  };

  getItem(id) {

  };
}