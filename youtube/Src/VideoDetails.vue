<template>       
    <div class="VideoDetails__wrapper row" v-if="video">            
        <Finder @handleSearchResults='handleSearchResults'></Finder>

        <div class="col-sm-6-col-sm-push-2">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe v-bind:src="url" class="embed-responsive-item"></iframe>
            </div>
            <h2>{{video.snippet.title}}</h2>
            <br>
            <small>Channel:{{video.snippet.channelTitle}}</small>
            <p>{{video.snippet.description}}</p>  
            <videoLike v-bind:video="this.video"></videoLike>
            
        </div>
    
        <videoGroup :videos="videos"></videoGroup>

    </div>        

</template>

<script>
    import Search from './search.js';
    import videoGroup from './VideoGroup.vue'
            import Finder from './Finder.vue'
            import videoLike from './Like.vue'
            
            import { store} from './store.js'
            import {mapState} from "vuex"
            import {mapMutations} from "vuex"
            export default{
                name: 'VideoDetails',
                created() {
                    if (this.$route.params.video === undefined) {
                        this.$router.push({name: 'youtube-dash'});
                    }
                    Search({
                        apikey: 'AIzaSyDHAbaGJU28IscekFslIDjkuGZGiCEIJQE',
                        term: 'vue'

                    }, response => this.handleSearchResults(response));


                    //console.log(this.$route.params.id);
                    this.videoId = this.$route.params.id;
                    this.url = `http://www.youtube.com/embed/${this.videoId}`;
                    this.video = this.$route.params.video;
                },

                methods: {
                    handleSearchResults(result) {

                        this.loading = false;
                        this.videos = result;

                    }
                },

                data() {
                    return{
                        videoId: null,
                        video: null,
                        url: null,
                        videos: null
                    }
                },
                components: {

                    Finder, videoGroup,videoLike
                }
            }

</script>
<style>
    .VideoDetails__wrapper row,embed-responsive embed-responsive-16by9{
        align-content: center;
        text-align:  center;
        
    }
    
</style>

