<template>{{ user }}</template>

<script setup lang="ts">
import { User } from '~/types';
import $http from '~/utils/http';

const id = ref<string | null>();
const user = ref<User>();

onMounted(async () => {
    const route = useRoute();
    id.value = <string>route.params.id;
    const { data } = await $http.get(`/users/${id.value}`);
    user.value = data;
});
</script>
