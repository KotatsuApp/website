<script setup lang="ts">
import { computed, onMounted, ref, toRefs } from "vue"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { type AppRelease, data as release } from "../data/release.data"

dayjs.extend(relativeTime)

const props = defineProps<{ type: keyof AppRelease }>()
const { type } = toRefs(props)

const dayjsInfo = computed(() => ({
	relative: dayjs(release[type.value].published_at).fromNow(),
	exact: dayjs(release[type.value].published_at).format("dddd, MMMM Do YYYY [at] HH:mm"),
	iso: release[type.value].published_at ?? undefined,
}))

// Mimic the <ClientOnly /> behavior to show custom text while rendering.
const show = ref(false)

onMounted(() => {
	show.value = true
})
</script>

<template>
	<time v-if="show" :datetime="dayjsInfo.iso" :title="dayjsInfo.exact">
	{{ dayjsInfo.relative }}
	</time>
	<time v-else :datetime="dayjsInfo.iso">
		{{ dayjsInfo.exact }}
	</time>
</template>
