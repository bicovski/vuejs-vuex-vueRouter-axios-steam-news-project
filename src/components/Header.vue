<template>
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
    <router-link
    active-class="active"
      to="/oyunlar"
      tag="a"
      class="navbar-brand">
      Steam Oyunlar
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          active-class="active"
          to="/haberler"
          tag="li"
          class="nav-item">
          <a class="nav-link">Steam Haberler</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
    
}
</script>



<style>

</style>

