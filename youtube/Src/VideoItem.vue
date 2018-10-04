<template>
    <div class="VideoItem__wrapper">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" v-bind:src="videoImage" v-bind:alt="videoTitle">
            <div class="card-body">
                <h5 class="card-title">{{videoTitle}}</h5>
                <p class="card-text">{{VideoDescription}}</p>
                <router-link :to="{name:'youtubevideo',params:{id: video.id.videoId,video:video}}" class="btn btn-primary">
                    Show video
                </router-link>

            </div>      
            
            
        </div>
    </div>
</template>

<script>

    export default{

        name: 'videoItem',

        props: ['video'],

        computed: {
            videoTitle() {
                console.log(this.video);
                return this.video.snippet.title;
            },
            VideoDescription() {
                return this.video.snippet.description;
            },
            videoImage() {
                return this.video.snippet.thumbnails.medium.url;
            }
        }

    }
</script>

