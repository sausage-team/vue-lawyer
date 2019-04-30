<template>
  <div class="default-card">
    <div class="default-title">
      <span>{{cardTitle}}</span>
    </div>
    <div class="default-content content" v-if="data">
      <span v-for="(item, index) in data" :key="index">
        <a :href="item.href" target="_blank" >{{item.name}}</a>
      </span>
    </div>
    <div class="default-content content" v-else>
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import entry from './entry'
export default entry
</script>
