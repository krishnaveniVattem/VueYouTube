<template>    
        <div class="card">  
            <div class="card-body">{{displayComment}}</div> 
        </div>   
</template>
<script>
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
