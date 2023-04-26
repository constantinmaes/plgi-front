<template>
    <Dialog
        v-model:visible="visible"
        close-on-escape
        dismissable-mask
        draggable
        :modal="true"
        @hide="deleteUser"
    >
        <div v-if="user">
            <p>User {{ user.email }}</p>
        </div>
        <div v-else>
            <Skeleton width="10rem"></Skeleton>
        </div>
    </Dialog>
    <DataTable :value="users">
        <Column field="name" header="Name" sortable></Column>
        <Column field="email" header="Email address" sortable></Column>
        <Column field="age" header="Age"></Column>
        <Column field="_id">
            <template #body="{ data }">
                <!--<NuxtLink :to="'/users/' + data._id">Voir</NuxtLink>-->
                <span style="cursor: pointer" @click="toggleDialog(data._id)"
                    >Voir</span
                >
            </template>
        </Column>
    </DataTable>
</template>

<script setup lang="ts">
import { User } from '~/types';
import $http from '~/utils/http';

const user = ref<User>();
const users = ref([]);
const visible = ref(false);

const deleteUser = () => {
    user.value = undefined;
};

const toggleDialog = async (_id: string) => {
    if (!visible.value) {
        setTimeout(async () => {
            const { data } = await $http.get(`/users/${_id}`);
            user.value = data;
        }, 2000);
    }

    visible.value = !visible.value;
};

onMounted(async () => {
    const { data } = await $http.get('/users');
    users.value = data;
});
</script>
