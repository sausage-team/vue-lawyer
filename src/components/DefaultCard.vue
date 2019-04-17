<template>
  <div class="default-card">
    <div class="default-title">
      <span>{{cardTitle}}</span>
    </div>
    <div class="default-content content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cardTitle: String
  }
}
</script>

