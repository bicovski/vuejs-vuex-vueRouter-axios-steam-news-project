<template>
    <div class="row d-flex justify-content-center mt-5 ml-2">
      
    <div v-for="item in items" class="card mr-5 mb-4 mt-3" style="width: 25rem;">
    <img class="card-img-top" :src="link" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">{{item.title}}</h5>
    <p class="card-text"> <strong>Yazar : </strong> {{item.author}}</p>
    <p class="card-text"> <strong>Etiket : </strong> {{item.feedlabel}}</p>
    <button class="btn btn-danger mb-0" @click="takeNewsContent(item.contents,item.title)">Detaya Git </button>
    </div>
    </div>
    
    <div v-if="flag">
        <h1 style="color:white"> İlgili Oyunun Haberi bulunmamakta......</h1>
        <br>
        <button class="btn btn-success" @click="$router.go(-1)" style="width:20rem; margin-left:10rem">Geri</button>
    </div>

    </div>
    
</template>


<script>
    import axios from "axios";
export default {
    data(){
        return{
            items : [],
            appId: this.$store.state.appId,
            link : "",
            flag : true
        }
    },
    created(){
      axios.get("http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002?appid="+this.$store.state.appId+"").then(response => {
          console.log(response.data);
          let data = response.data.appnews.newsitems;
          for(let key in data){
              this.items.push({...data[key], id : key})
          }
          if(this.items.length > 0){
            this.flag = false;
          }
          
      }),
      this.getNewsLink()

    },
    methods : {
        takeNewsContent(content,title){
            this.$store.dispatch('updateAppContent', content);
            this.$store.dispatch('updateHeader', title);
            this.$router.push("/haber-detay");
            console.log(content)
        },
        getNewsLink(){
            if(this.appId == 730){
                this.link = "./src/assets/csgo.jpg";
                this.$store.state.link = this.link;
            }
            else if(this.appId == 292030){
                this.link = "./src/assets/witcher3.jpg";
                this.$store.state.link = this.link;
            }
            else if(this.appId == 271590){
                this.link = "./src/assets/gta5.jpg";
                this.$store.state.link = this.link;
            }
            else if(this.appId == 578080){
                this.link = "./src/assets/pubg.jpg";
                this.$store.state.link = this.link;
            }
            else if(this.appId == 227300){
                this.link = "./src/assets/eurotruck2.jpg";
                this.$store.state.link = this.link;
            }
            else{
                this.link = "./src/assets/steam-wallpaper.jpg";
                this.$store.state.link = this.link;
            }
        }
    }
    
}
</script>



<style>

.row .row{
    background-color : grey;
    
}

</style>

