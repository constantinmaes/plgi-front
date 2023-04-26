import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Column from 'primevue/column';
import Skeleton from 'primevue/skeleton';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('DataTable', DataTable);
    nuxtApp.vueApp.component('Dialog', Dialog);
    nuxtApp.vueApp.component('Column', Column);
    nuxtApp.vueApp.component('Skeleton', Skeleton);
    //other components that you need
});
