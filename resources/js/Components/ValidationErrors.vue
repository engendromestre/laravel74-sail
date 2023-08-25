<script setup>
import { computed } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";
import { ExclamationCircleIcon } from "@heroicons/vue/24/outline";

const errors = computed(() => usePage().props.value.errors);

const hasErrors = computed(() => Object.keys(errors.value).length > 0);

const props = defineProps({
    lang: Object,
});
</script>
<template>
    <div v-if="hasErrors">
        <div class="text-red-600 flex items-start font-semibold">
            <ExclamationCircleIcon class="h-6 w-6" />
            &nbsp;
            {{ translate("Whoops! Something went wrong.") }}
        </div>

        <div class="mt-3 list-disc list-inside text-sm text-red-600">
            <span v-for="(error, key) in errors" :key="key">{{ error }}</span>
        </div>
    </div>
</template>
