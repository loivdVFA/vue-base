<template>
  <div>
    <div class="loader"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  width: 30px;
  --b: 4px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #514b82;
  -webkit-mask:
    repeating-conic-gradient(#0000 0deg,#000 1deg 70deg,#0000 71deg 90deg),
    radial-gradient(farthest-side,#0000 calc(100% - var(--b) - 1px),#000 calc(100% - var(--b)));
  -webkit-mask-composite: destination-in;
          mask-composite: intersect;
  animation: l5 1s infinite;
}
@keyframes l5 {to{transform: rotate(.5turn)}}
</style>
