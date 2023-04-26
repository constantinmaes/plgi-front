export default defineNuxtConfig({
    css: [
        'primevue/resources/themes/lara-light-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
    ],
    build: {
        transpile: ['primevue'],
    },
    runtimeConfig: {
        // Config within public will be also exposed to the client
        public: {
            apiUrl: 'http://localhost:3000',
        },
    },
    modules: ['@pinia/nuxt'],
});
