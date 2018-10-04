
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        videos:'',
        searchString:"alan walker",
        
    },
    
    mutations:{
        setVideos(state,result)
        {
            state.videos = result;
        },
        setSearchString(state,result){
            state.searchString = result;
        }
    },
    
    actions:{
        
    },
    
    getters:{
        getVideos(state){
            return state.videos;
        },
        getSearchString(state){
            return state.searchString;
        }
    }
})