let axios = require('axios');
const  Base_url = "http://127.0.0.1:8080/api";
var url="";
 var comment ={

 create:function(options, callback){
   
   
   url=Base_url+ '/CommentsController/create';
            axios({
                    method: 'post',
                    url: url,
                    data: {
                     id:options.id,
                     comment:options.comment
                    }
                  }).then(() => {
                          if(callback){
                            callback()
                        }
                    }).catch(error => console.error(error));      
        
},
findAll:function(callback){
    url=Base_url+'/CommentsController/index';
    axios.get(url)
            .then(response=>{
                console.log("in function")
        console.log(response.data)
                if(callback){
//                    console.log(response);
//                    console.log(response.data);
                    callback(response.data)
                }
            })
},
 }
 
 module.exports=comment;
