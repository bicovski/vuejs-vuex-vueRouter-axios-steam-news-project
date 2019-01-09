<template>
<div>
<div class="d-flex justify-content-center mt-5">
    <div @click="updateAppNews(730)" class="card mr-4" style="width: 18rem;">
    <img class="card-img-top" src="../assets/csgo.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-text">Counter Strike Global Offence</h5>
        </div>
</div>

<div @click="updateAppNews(292030)" class="card mr-4" style="width: 18rem;">
    <img class="card-img-top" src="../assets/witcher3.jpg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-text">The Witcher 3 Wild Hunt</h5>
        </div>
</div>


<div  @click="updateAppNews(271590)" class="card mr-4" style="width: 18rem;">
    <img class="card-img-top" src="../assets/gta5.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-text">Grand Theft Auto V</h5>
        </div>
</div>

<div @click="updateAppNews(578080)" class="card mr-4" style="width: 18rem;">
    <img class="card-img-top" src="../assets/pubg.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-text">PlayerUnknown's BattleGrounds</h5>
        </div>
</div>

<div @click="updateAppNews(227300)" class="card mr-4" style="width: 18rem;">
    <img class="card-img-top" src="../assets/eurotruck2.jpg" alt="Card image cap">
        <div class="card-body">
         <h5 class="card-text">Euro Truck Simulator 2</h5>
        </div>
</div>
</div>
 <hr/>


    

    <div class="d-flex justify-content-center mt-5">
    <li  class="list-group-item" style="width:70rem;border-radius:23px;" >
                <input type="text" v-model="search" placeholder="Oyun Arayın..." style="width:68rem;border: 0px;"/>
            </li>
  </div>

 <div class="d-flex justify-content-center mt-1">
    <virtual-list :size="40" :remain="8" class="" style="width:70rem;border-radius:23px;">
            <li  class="list-group-item" v-for="item in filteredList" :key="item.id" >
                <h5 @click="updateAppNews(item.appid)" class="card-text-a">{{item.name}}</h5>
            </li>
    </virtual-list>
    </div>


    >
</div>

</template>


<script>
 import {mapGetters} from 'vuex';
 import News from './News';
 import axios from "axios";
 import VirtualList from 'vue-virtual-scroll-list';
export default {
    data(){
        return{
            items : [],
            search: ''
        }
    },
    components : {
    virtualList : VirtualList
  },
    methods: {
        updateAppNews(appId){
            console.log(appId);
            this.$store.dispatch('updateAppId', appId);
            this.$router.push('haberler');
            
        }

    },
    computed :{
        filteredList() {
      return this.items.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }

    },
    created(){
      axios.get("http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json").then(response => {
          console.log(response.data);
          let data = response.data.applist.apps;
          for(let key in data){
              this.items.push({...data[key], id : key})
          }
          
      })

    }
    
    
    
}
</script>



<style scoped>
img{
    width: 100%;
    height: 60%;
}

h5{
 font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.card:hover{
    box-shadow: 6px 5px 48px rgb(185, 183, 183);
    transition: box-shadow .4s;
    cursor: pointer;
}

.card-text-a:hover{
    box-shadow: 6px 5px 48px rgb(185, 183, 183);
    transition: box-shadow .4s;
    cursor: pointer;
}

input::placeholder {
      font-size: 1.4em;  
     font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
     }



  

</style>

