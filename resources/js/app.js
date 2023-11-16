import('./bootstrap');
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

// Import modules...
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

import Vue3Toastify from 'vue3-toastify';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

import "vue3-toastify/dist/index.css";
import VueClipboard from 'vue3-clipboard';

import Echo from "laravel-echo"
import Pusher from "pusher-js";
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'local',
    wsHost: '127.0.0.1',
    wsPort: 6001,
    cluster: "mt1",
    forceTLS: false,
    disableStats: true,

});
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    //
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob("./Pages/**/*.vue")),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(VueClipboard, {
                autoSetContainer: true,
                appendToBody: true,
            })
            .use(plugin).use(Vue3Toastify, { autoClose: 3000, theme: "colored" })
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#ad3861' });
