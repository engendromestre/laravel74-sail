<script setup>
import { Link } from '@inertiajs/inertia-vue3';

const props = defineProps({
    lang: Object,
    item: {
        type: Object
    }
});
</script>

<template>
    <li class="inline-flex items-center" v-if="item.href">
        <Link :href="route(item.href)" :active="route().current(item.href)">
        {{ translate(item.label) }}
        </Link>

    </li>
    <li aria-current="page" v-else>
        <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
            </svg>
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{{ translate(item.label)
            }}</span>
        </div>

    </li>
</template>