import { defineStore } from 'pinia';
import $http from '~/utils/http';

const useUsersStore = defineStore('users', {
    state: () => {
        return {
            loading: true,
            users: [],
        };
    },
    actions: {
        async getUsers() {
            this.loading = true;
            const { data } = await $http.get('/users');
            this.users = data;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        },
    },
    getters: {},
});

export { useUsersStore };
