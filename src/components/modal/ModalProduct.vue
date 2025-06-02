<template>
    <modal-base size-width="sm" v-if="isVisible">
        <template #title>
            <div class="">
                <h2 class="font-semibold">Add Product</h2>
            </div>
        </template>
        <template #content>
            Add Product
        </template>
        <template #footer>
            <div class="flex items-center justify-end">
                <component-button :loading="isLoadingBtn" class="bg-C01 p-2 rounded-md text-white text-14px" @click="$emit('handleLogin',phone)">
                    Add
                </component-button>
            </div>
        </template>
    </modal-base>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

defineProps<{
    isLoadingBtn: boolean
}>();

defineEmits(['handleLogin']);

const isVisible = ref(true);
const phone = ref('');

const openModal = () => {
    isVisible.value = true;
};

const closeModal = () => {
    isVisible.value = false;
};

defineExpose({ openModal, closeModal });
</script>
