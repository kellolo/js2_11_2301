const url = 'https://raw.githubusercontent.com/ShevelevAndrew/api-json-test/master/catalogData.json'

class GetData {
    constructor() {
        this.promise = this.data()
    }
    data() {
        return new Promise((res, rej) => {
            let xhr
            xhr = new XMLHttpRequest()

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    // console.log(xhr.status)
                    if (xhr.status === 200) {
                        res({ dateStr: xhr.responseText, msg: 'status OK' })
                    } else {
                        rej('error')
                    }
                }
            }
            xhr.open('GET', url, true)
            xhr.send()
        })
    }
}

export default GetData