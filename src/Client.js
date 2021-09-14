export default class Client {
    kisi() {
        let result = new Promise((resolve, reject) => {
            fetch('http://10.0.254.83:8080/api/kisi/tumunu-getir')
                .then(response => response.json())
                .then(data => console.log(data));
        });
        return result;
    }
}