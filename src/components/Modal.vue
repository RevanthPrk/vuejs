<template>
    <teleport to="body">
        <div class="modal">
            <p>This is a modal</p>
            <button @click="$emit('close')">Close</button>
        </div>
    </teleport>
</template>

<style scoped>
.modal {
    position: absolute;
    top: 400px;
    /* outside the 300px container height */
    left: 50%;
    transform: translateX(-50%);
    background-color: red;
    padding: 1rem;
    border: 1px solid black;
}
</style>