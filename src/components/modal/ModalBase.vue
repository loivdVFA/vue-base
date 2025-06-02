<template>
  <div class="modal-overlay" >
    <div
    class="modal-content w-[calc(100%-50px)]"
    :class="modalContentClass"
    >
      <slot name="title"></slot>
      <slot name="content"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  sizeWidth: 'sm' | 'md' | 'lg' | 'xl';
}

const props = withDefaults(defineProps<Props>(),{
  sizeWidth: 'lg'
})

const modalContentClass = computed(() => {
  return {
    'modal-sm': props.sizeWidth === 'sm',
    'modal-md': props.sizeWidth === 'md',
    'modal-lg': props.sizeWidth === 'lg',
    'modal-xl': props.sizeWidth === 'xl',
  };
});
</script>

<style lang="scss" scoped>
.modal-sm {
  max-width: 320px;
}

.modal-md {
  max-width: 500px;
}

.modal-lg {
  max-width: 1020px;
}

.modal-xl {
  max-width: 1240px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>