<template>
    <DataTable :value="users">
        <Column field="name" header="Name" sortable></Column>
        <Column field="email" header="Email address" sortable></Column>
        <Column field="age" header="Age"></Column>
        <Column field="_id">
            <template #body="{ data }">
                <NuxtLink :to="'/users/' + data._id">Voir</NuxtLink>
            </template>
        </Column>
    </DataTable>
</template>

<script setup lang="ts">
import $http from '~/utils/http';

const users = ref([]);

onMounted(async () => {
    const { data } = await $http.get('/users');
    users.value = data;
});
</script>
