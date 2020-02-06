function makeGETRequest(url) {
    return new Promise((res, rej) => {
        let xhr;
        xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                if (xhr.status === 200) {
                    res({data: xhr.responseText, msg: 'status OK'});
                } else {
                    rej('Error occured');
                }
            }
        }

        xhr.open('GET', url, true);
        xhr.send();
    })
}

const url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

makeGETRequest (url)
    .then (data => {
        console.log (data.msg);
        console.log (JSON.parse (data.data));
    })
    .catch (err => {
        console.log (err);
    });


class GoodsList {

    makeGETRequest(url) {
        return new Promise((res, rej) => {
            let xhr;
            xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    if (xhr.status === 200) {
                        res({data: xhr.responseText, msg: 'status OK'});
                    } else {
                        rej('Error occured');
                    }
                }
            };

            xhr.open('GET', url, true);
            xhr.send();
        })
    }

    fetchGoods() {
        return new Promise((res, rej) => {
            makeGETRequest(url, (goods) => {
                this.goods = JSON.parse(goods);
                if (this.goods) {
                    res(()=>{
                        return this.render();
                    })
                }else{
                    rej('Err');
                }
            });
        });
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const list = new GoodsList();
list.fetchGoods().then();

