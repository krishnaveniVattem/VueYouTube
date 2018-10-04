<template>    
        <div class="card" style=" height: 3rem">  
            <div class="card-body" >{{displayComment}}</div> 
        </div>   
</template>
<script>
    import comment from './comment.js'
    export default{
            name:'VideoComment',
            data:{
                return:{
                    
                }
            },
            props:[
                'comment'
            ],
            computed:{
                displayComment(){
                    return this.comment;
                }
            }
    }
</script>