<template>Je suis users/index</template>

<script setup lang="ts">
import $http from '~/utils/http';

onMounted(() => {
    $http.get('/users');
});
</script>
