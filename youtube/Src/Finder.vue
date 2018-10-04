<template>
    <div class="container ">
        <form v-on:submit="handleFormSubmit">
            <img src="./Image/you.jpg" class="youimage"> 
            <input v-model="searchString"  v-on:keyup.stop.prevent="searchSuggestion" class="form-control col-sm-6 dropdown-content" style="display:inline;" id="searchString">                       

            <button class="btn btn-primary col-sm-2" v-on:click="handleFormSubmit.bind(this)" style='margin-top:44' ><i class="fa fa-search"></i>Search</button>
            <ul>               
            <li v-for="video in videos" v-on:mouseover="searchString=video.snippet.title"> {{video.snippet.title}}</li>
                </ul>
        </form>
        
    </div>

</template>

<script>
    import search from './Search.js';
    export default{
        name: 'Finder',

        data() {
            return{
                searchString:null,
                videos:null,
                suggest:false,            }
        },
        methods: {
            handleFormSubmit() {
                var self = this;
                search({
                    apikey: 'AIzaSyDHAbaGJU28IscekFslIDjkuGZGiCEIJQE',
                    term: this.searchString,
                    items: 10
                }, data => {
                    self.$emit('handleSearchResults', data),
                            this.suggest = false;
                    self.searchString = '';
                })
                this.$emit('searchString', this.searchString)

            },
            searchSuggestion: function () {

                var self = this;
                search({
                    apikey: 'AIzaSyDHAbaGJU28IscekFslIDjkuGZGiCEIJQE',
                    term: this.searchString,
                    items:10
                }, response => {

                    self.videos = response;
                    self.suggest = true;
                })
//                    this.$emit('search',this.search)

            }
        }
    }





</script>
<style>
    .container{
        display:inline-block;
    }
    .search__wrapper{
        margin:auto;
        margin-right:12%;
        width:70%;
    }
    button{
        margin-bottom:50px;

    }
    .youimage{
        height:45px;
        ul.li{
                list-style-type:none;
        }


    }
    .form-control{
        margin-bottom:10px;
    }
    .form-control col-sm-4{
        display:inline-block;
    }

    .autocomplete {
        position: relative;
        width: 130px;
    }



    .autocomplete-result {
        list-style: none;
        text-align: left;
        padding: 4px 2px;
        cursor: pointer;
    }

    .autocomplete-result:hover {
        background-color: #4AAE9B;
        color: white;
    }

</style>