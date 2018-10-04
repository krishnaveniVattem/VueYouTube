<template>
    <div>
        <button  class="btn btn-primary" id="likeblack"  v-on:click="likeIt"><i class="fa fa-thumbs-o-up"  style="font-size:10px;color:red"></i>Like</button>
        <button class="btn btn-primary"  v-on:click="commentIt"><i class="fa fa-comments-o" style="font-size:10px;color:red"></i>View Comments</button>
        <div >
            <form v-on:submit.prevent="addNewCommentToVideo">
                <input v-model="newComment"  id="commentBar"  class="form-control col-sm-6 dropdown-content" style="display:inline;" >    
                <button class='btn btn-primary' style="margin-top:45">Comment</button>  
            </form>
        </div>
        <VideoComment v-for="comment in comments" v-bind:comment="comment" v-bind:key=""></VideoComment>

    </div>
</template>

<script>
    import like from './Like.js'
            import VideoComment from './comment.vue'
            import commentjs from './comment.js'
            export default {
                name: 'VideoLike',

                data() {
                    return{
                        'likeStatus': false,
                        'comments': ''
                    }
                },
                props: [
                    'video'
                ],
                created() {

                    var self = this;
                    var status = false;
                    like.findAll(response => {
                        console.log(response);

                        var likes = new Array();

                        likes = response;
                        console.log("like meeeee" + likes)
                        console.log(response[0])
                        response.forEach(findId);
                        function findId(value) {
                            console.log(value.VideoId);
                            if (value.VideoId === self.video.id.videoId)
                            {

                                status = true;
                                self.likeStatus = true;
                            }
                        }

                        if (status)
                        {

                            document.getElementById('likeblack').style.backgroundcolor = "black";
                        }
                    })

                },
                methods: {
                    likeIt() {
                        document.getElementById('likeblack').style.color = "Red";
                        var self = this;
                        if (self.likeStatus)
                        {
                            console.log(self.likeStatus);
                            return;
                        }

                        like.create({id: self.video.id.videoId}, () => {

                            self.likeStatus = true;
                            console.log(self.likeStatus);
                        });
                    },
                    commentIt() {
                        var self = this;
                        var comments = new Array();
                        var count = 0;
                        self.commentStatus = true;
                        commentjs.findAll(response => {
                            console.log(response);
                            // console.log(commentcheck)
                            var allComments = response;
                            allComments.forEach(findId);
                            function findId(value) {
                                console.log(value)
                                if (value.VideoId === self.video.id.videoId)
                                {
                                    console.log("one comment");
                                    console.log(value.comments);
                                    comments[count++] = value.comments;

                                }

                            }
                            console.log("comment for video");
                            console.log(comments);
                            self.comments = comments;
                            console.log("self")
                            console.log(self.comments)
                            self.commentStatus = true;
                        })
                    },

                    addNewCommentToVideo() {
                        var self = this;
                        console.log(self.newComment);
                        commentjs.create({
                            id: self.video.id.videoId,
                            comment: self.newComment
                        }, () => {
                            self.newComment = '';
                            self.addNewComment = false;
                            self.commentIt();



                        });

                    }

                },
                components: {
                    VideoComment
                }
            }
</script>

