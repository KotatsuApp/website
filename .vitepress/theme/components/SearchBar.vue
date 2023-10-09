<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import { createTranslate } from 'vitepress/dist/client/theme-default/support/translation'
import { v4 as uuidv4 } from 'uuid'

const uid = uuidv4()
const { theme } = useData()
const $t = createTranslate(theme.value.search?.options)
withDefaults(defineProps<{
  modelValue: string
  placeholder: string
  backButton?: boolean
}>(), {
  backButton: true
})

/* Search input focus */

const searchInput = ref<HTMLInputElement>()

function focusSearchInput() {
  searchInput.value?.focus()
  // searchInput.value?.select()
}

onMounted(() => {
  focusSearchInput()
})

function onSearchBarClick(event: PointerEvent) {
  if (event.pointerType === 'mouse') {
    focusSearchInput()
  }
}
</script>

<template>
  <form class="search-bar" @pointerup="onSearchBarClick($event)" @submit.prevent="">
    <label :title="placeholder" id="localsearch-label" :for="uid">
      <svg
        class="search-icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21l-4.35-4.35" />
        </g>
      </svg>
    </label>
    <div
      v-if="backButton"
      class="search-actions before"
    >
      <button
        class="back-button"
        :title="$t('modal.backButtonTitle')"
        @click="$emit('close')"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 12H5m7 7l-7-7l7-7"
          />
        </svg>
      </button>
    </div>
    <input
      ref="searchInput"
      :id="uid"
      :value="modelValue"
      :placeholder="placeholder"
      class="search-input"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <div class="search-actions">
      <button
        v-if="modelValue"
        class="clear-button"
        :title="$t('modal.resetButtonTitle')"
        @click="$emit('update:modelValue', '')"
      >
        <svg width="24" height="24" viewBox="0 0 20 20">
          <path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
    </div>
  </form>
</template>

<style scoped>
.search-bar {
  border: 1px solid var(--vp-c-gray-soft);
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 6px 8px;
  height: 56px;
  cursor: text;
  background-color: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-1);
}

@media (max-width: 767px) {
  .search-bar {
    padding: 0 8px;
  }
}

.search-bar:focus-within {
  border-color: var(--vp-c-border);
}

.search-icon {
  margin: 8px;
}

@media (max-width: 767px) {
  .search-icon {
    display: none;
  }
}

.search-input {
  padding: 6px 12px;
  font-size: inherit;
  width: 100%;
}

@media (max-width: 767px) {
  .search-input {
    padding: 6px 4px;
  }
}

.search-actions {
  display: flex;
  gap: 4px;
}

@media (any-pointer: coarse) {
  .search-actions {
    gap: 8px;
  }
}

@media (min-width: 769px) {
  .search-actions.before {
    display: none;
  }
}

.search-actions button {
  padding: 8px;
}

.search-actions button:hover {
  color: var(--vp-c-brand-1);
}
</style>