<script setup lang="ts">
import { computed, toRefs } from "vue"
import MarkdownIt from "markdown-it"
import { type AppRelease, data as release } from "../data/release.data"

const props = defineProps<{ type: keyof AppRelease }>()
const { type } = toRefs(props)

const md = new MarkdownIt()

const changelog = computed(() => {
	const flavoredString = (release[type.value].body ?? "")
		.replace(/(?<=\(|(, ))@(.*?)(?=\)|(, ))/g, "[@$2](https://github.com/$2)")
		.replace("https://github.com/KotatsuApp/Kotatsu/releases", "/changelogs/")
		.replace(/## [ \t]*([^\n\r]*)/g, "### $1")

	return md.render(flavoredString)
})
</script>

<template>
	<div class="changelog">
		<header>
			<h2>Changelog</h2>
		</header>
		<div v-html="changelog" />
	</div>
	<div class="fullChangelog">
		<p>
			View the full release
			<a href="https://github.com/KotatsuApp/Kotatsu/releases/latest" target="_blank" rel="noopener">
				here
			</a>
		</p>
	</div>
</template>

<style>
.changelog {
	display: block;
	border: 1px solid var(--vp-c-bg-soft);
	border-radius: 12px;
	background-color: var(--vp-c-bg-soft);
	transition: border-color 0.25s, background-color 0.25s;
	padding: 24px;
	height: 100%;
	margin: 1.5em auto 0.5em;
}

.changelog header {
	display: flex;
	justify-content: center;
	align-items: baseline;
	margin: 0 0 1rem;
}

.changelog svg {
	font-size: 1.2em;
	margin-right: 0.5rem;
	vertical-align: middle;
}

.changelog h2 {
	font-size: 1.5rem;
	margin: 0;
	padding: 0;
	color: var(--vp-c-text-1);
	border: none;
}

.changelog div > p {
	margin: 0 0 1rem;
	color: var(--vp-c-text-2);
	font-size: 0.9rem;
}

.fullChangelog {
	margin: 0 0 1rem;
	color: var(--vp-c-text-2);
	font-size: 0.9rem;
}
</style>
