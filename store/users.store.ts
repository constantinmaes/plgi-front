import { defineStore } from 'pinia';
import $http from '~/utils/http';

const useUsersStore = defineStore('users', {
    state: () => {
        return {
            users: [],
        };
    },
    actions: {
        async getUsers() {
            const { data } = await $http.get('/users');
            this.users = data;
        },
    },
    getters: {},
});

export { useUsersStore };
