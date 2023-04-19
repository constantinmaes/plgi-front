<template>Je suis user avec id {{ id }}</template>

<script setup lang="ts">
import $http from '~/utils/http';

const id = ref<string | null>(null);

onMounted(() => {
    const route = useRoute();
    id.value = <string>route.params.id;
    $http.get(`/users/${id}`);
});
</script>
