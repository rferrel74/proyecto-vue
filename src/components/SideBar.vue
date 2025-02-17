<template>
    <div class="sidebar">
        <h2>Menu Lateral</h2>
        <ul>
            <li><router-link to="/contador">Contador</router-link></li>
            <li><router-link to="/lista-tareas">Lista de Tareas</router-link></li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style>
.sidebar{
    width: 200px;
    background-color: rgb(220, 217, 217);
    padding: 15px;
}
</style>