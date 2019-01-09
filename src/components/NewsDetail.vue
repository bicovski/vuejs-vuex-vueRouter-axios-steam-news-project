<template>
<div class="d-flex justify-content-center mt-5">
    <div class="card" style="width: 45rem">
        <img class="card-img-top" :src="link" alt="Card image cap">
        <hr>
        <h2>{{header}}</h2>
        <hr>
    <p v-html="appContent"></p>
    <hr>
    <div class="d-flex justify-content-center">
    <button class="btn btn-primary  mb-2"  style="width: 8rem;" @click="$router.go(-1)">Geri</button>
    </div>
    </div>
    
    
</div>
</template>


<script>
export default {
    data(){
        return {
            appContent : null,
            link: "",
            header: ""

        }
    },
    created(){
        this.appContent = this.$store.state.appContent;
        this.link = this.$store.state.link;
        this.header = this.$store.state.header;
    }
    
}
</script>



<style>

</style>


