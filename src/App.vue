<template>
    <div class="app">
        <router-view name="header"></router-view>
        <div class="flex">
            <router-view name="sidebar"></router-view>
            <router-view></router-view>
        </div>

        <div class="container">
            <button @click="showModal = true">Open Modal</button>
            <Modal v-if="showModal" @close="showModal = false" />
        </div>
        <router-view name="footer"></router-view>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '../src/components/Modal.vue'

const showModal = ref(false)
</script>

<style scoped>
.container {
    height: 300px;
    overflow: hidden;
    background: green;
    position: relative;
}
</style>
