<template>
   <div class="container">
    <Sidebar></Sidebar>
      <div class="contenido">
        <RouterView></RouterView>
      </div>
   </div>
</template>

<script setup>
import Sidebar from '../components/SideBar.vue';
import { RouterView } from 'vue-router';
</script>

<style>
.container{
    display: flex;
}
.contenido{
    flex: 1;
    padding: 20px;
}
</style>