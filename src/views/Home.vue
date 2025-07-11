<template>
    <div>
        <h1>Home Page</h1>
        <!-- <router-link :to="{ name: 'profile' }">Go to profile</router-link> |
        <router-link to="/about">About</router-link>
        <router-link to="/settings">Settings</router-link> -->
        <router-link :to="{ name: 'profile' }">Go to profile</router-link> | <router-link :to="{ name: 'about' }">Go to
            about</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup>
</script>
