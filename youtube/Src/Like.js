let axios = require('axios');
const Base_url = "http://127.0.0.1:8080/api";
var like = {
    create: function (options, callback) {


        url = Base_url + '/LikesController/create';
        axios({
            method: 'post',
            url: url,
            data: {
                id: options.id
            }
        }).then(() => {
            if (callback) {
                callback()
            }
        }).catch(error => console.error(error));

    },
    findAll: function (callback)
    {
        debugger;
        url = Base_url + '/LikesController/index';
        axios.get(url)
                .then(response =>
                {
                    if (callback) {
                        callback(response.data)
                    }
                })
    },
    findId: function (options, callback) {
        url:Base_url + '/LikesController/showd/' + options.id;
        axios.get(url).then(response => {
            if (callback) {
                console.log(response.config)
                console.log(response.headers)
                console.log()
                callback(response.data)
            }
        })
    }

}
console.log("in like.js " + like);
module.exports = like;
