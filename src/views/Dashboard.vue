<template>
    <div>
        <h2>Dashboard</h2>
        <router-link :to="{ name: 'profile' }">Profile</router-link> |
        <router-link :to="{ name: 'settings' }">Settings</router-link>
        <router-view />
    </div>
</template>

<script setup>
import Sidebar from '@/components/SideBar.vue';
</script>
