<script setup>
import Button from '@/Components/DefaultButton.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import Input from '@/Components/TextInput.vue';
import Label from '@/Components/InputLabel.vue';
import ValidationErrors from '@/Components/ValidationErrors.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';

const form = useForm({
    password: '',
});

defineProps({
    lang: Object
});

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => form.reset(),
    })
};
</script>

<template>
    <GuestLayout>
        <Head title="Confirm Password" />

        <div class="mb-4 text-sm text-gray-600">
            {{ translate('This is a secure area of the application. Please confirm your password before continuing.') }}
        </div>

        <ValidationErrors class="mb-4" />

        <form @submit.prevent="submit">
            <div>
                <Label for="password" :value="translate('Password')" />
                <Input id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="current-password" autofocus />
            </div>

            <div class="flex justify-end mt-4">
                <Button class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    {{ translate('Confirm') }}
                </Button>
            </div>
        </form>
    </GuestLayout>
</template>
