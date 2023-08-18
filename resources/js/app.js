require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
const translate = (text) => {
    let t = this.lang[text];

    if (t !== undefined)
        return t;
    else
        return text
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .mixin({
                methods: {
                    route,
                    translate: function(text) {
                        let t = this.lang[text];
            
                        if (t !== undefined) 
                            return t;
                        else
                            return text
                    }
                }
            })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
