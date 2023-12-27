<script setup lang="ts">

export interface Feature {
  title: string
  subtitle: string
}

</script>

<template>
    <div class="FeatureTitle">
        <div class="container">
            <p class="title">What Kotatsu can do?</p>
            <h1 class="subtitle">And here's what it does!</h1>
        </div>
    </div>
</template>

<style scoped>

.FeatureTitle {
  position: relative;
  padding: 0 24px 24px 24px;
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.title {
  max-width: 392px;
  line-height: 28px;
  font-size: 24px;
  font-weight: 500;
  white-space: pre-wrap;
}

.subtitle {
  padding-top: 8px;
  max-width: 392px;
  line-height: 28px;
  font-size: 18px;
  font-weight: 300;
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}

</style>