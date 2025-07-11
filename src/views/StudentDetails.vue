<template>
    <div>
        <h2>Student Details</h2>
        <p>ID: {{ route.params.id }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route)
</script>
