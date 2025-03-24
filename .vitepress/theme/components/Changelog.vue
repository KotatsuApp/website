<script setup lang="ts">
import { computed } from "vue"
import MarkdownIt from "markdown-it"
import { type AppRelease, data as release } from "../data/release.data"

const {type} = defineProps<{ type: keyof AppRelease }>()

const md = new MarkdownIt()

const changelog = computed(() => {
	const flavoredString = (release[type].body ?? "")
		.replace(/(?<=\(|(, ))@(.*?)(?=\)|(, ))/g, "[@$2](https://github.com/$2)")
		.replace("https://github.com/KotatsuApp/Kotatsu/releases", "/changelogs/")
		.replace(/## [ \t]*([^\n\r]*)/g, "### $1")

	return md.render(flavoredString)
})
</script>

<template>
	<section class="changelog">
		<header class="changelog__header">
			<h2 class="changelog__title">Changelog</h2>
		</header>
		<article class="changelog__content" v-html="changelog" />
	</section>
	<footer class="full-changelog">
		<p>
			View the full release
			<a class="full-changelog__link" href="https://github.com/KotatsuApp/Kotatsu/releases/latest" target="_blank" rel="noopener">
				here
			</a>
		</p>
	</footer>
</template>

<style scoped>
.changelog {
	display: block;
	border: 1px solid var(--vp-c-bg-soft);
	border-radius: 12px;
	background-color: var(--vp-c-bg-soft);
	transition: border-color 0.25s, background-color 0.25s;
	padding: 24px;
	height: 100%;
	margin: 1.5em auto 0.5em;

	.changelog__header {
	  display: flex;
		justify-content: center;
		align-items: baseline;
		margin: 0 0 1rem;

		.changelog__title {
			font-size: 1.5rem;
			margin: 0;
			padding: 0;
			color: var(--vp-c-text-1);
			border: none;
		}
	}

	.changelog__content {
		margin: 0;

		& > p {
		  margin: 0 0 1rem;
			color: var(--vp-c-text-2);
			font-size: 0.875rem;
		}

		& svg {
		  font-size: 1.2em;
			margin-right: 0.5rem;
			vertical-align: middle;
		}
	}
}

.full-changelog {
	margin: 0 0 1rem;
	color: var(--vp-c-text-2);
	font-size: 0.875rem;
}
</style>
