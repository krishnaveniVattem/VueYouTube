<template>
    <div class="VideoGroup__wrapper">
        <videoItem 
            v-for="video in videos"               

            :video="video">
        </videoItem>
    </div>
</template>

<script>

    import videoItem from './VideoItem.vue'
            import { store} from './store.js'
            import {mapState} from "vuex"
            import {mapMutations} from "vuex"


            export default{
                store,
                name: 'videoGroup',                     

                props: ['videos'],

                components: {

                    videoItem

                }
            }
</script>
<style>
    .VideoGroup__wrapper{
        margin-left:450;
    }
</style>
