<script setup lang="ts">
/// <reference types="@types/gtag.js" />

import { computed, onMounted, ref } from "vue"
import { data as release } from "../data/release.data"

const downloadInformation = computed(() => ({
	stable: {
		tagName: release.stable.tag_name ?? "v0.0.0",
		asset: (release.stable.assets ?? [])
			.find((a) => /^kotatsu-\d+\.\d+\.\d+-release.apk/.test(a.name)),
	},
}))

const isAndroid = ref(true)

onMounted(() => {
	isAndroid.value = !!navigator.userAgent.match(/android/i)
})

function handleAnalytics() {
	window.gtag?.("event", "Download", {
		event_category: "App",
		event_label: "Stable",
		version: release.stable.tag_name
	})
}
</script>

<template>
	<div>
		<div v-if="!isAndroid" class="custom-block danger">
			<p class="custom-block-title">
				Unsupported operating system
			</p>
			<p>
				<strong>Kotatsu</strong> is an <strong>Android app</strong> only.
				Use an <strong>Android device</strong> to download and install the app.
			</p>
		</div>
		<div v-if="!isAndroid" class="custom-block warning">
			<p class="custom-block-title">
				Caution
			</p>
			<p>
				Any app for any operating systems other than Android called
				<strong>Kotatsu</strong> (except kotatsu-dl) is not affiliated with this project.
			</p>
			<blockquote>
				For more information, read the
				<a href="/manuals/faq/general">General FAQ</a>.
			</blockquote>
		</div>
		<div class="download-buttons">
			<a
				class="download-button primary"
				:download="downloadInformation.stable.asset?.name"
				:href="downloadInformation.stable.asset?.browser_download_url"
                @click="handleAnalytics()"
			>
				<span class="text">Stable</span>
				<span class="version">{{ downloadInformation.stable.tagName }}</span>
			</a>
			<a
				class="download-button secondary"
				href="https://f-droid.org/packages/org.koitharu.kotatsu/"
			>
				<span class="text">Get it on F-Droid</span>
			</a>
		</div>
		<span class="version-disclaimer">
			Requires <strong>Android 5.0</strong> or higher.
		</span>
	</div>
</template>

<style scoped>
.download-buttons {
	display: flex;
	gap: 0.75em;
	justify-content: center;
	align-items: center;
	margin: 0.75em auto;
}

.download-button {
  position: relative;
  display: inline-block;
  border: 4px solid transparent;
  border-radius: 8px;
  justify-content: center;
  padding: 8px 18px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.25s, color 0.25s;
}

.download-button:hover {
	text-decoration: none !important;
}

.download-button.primary {
	border-color: var(--vp-button-brand-border);
	color: var(--vp-button-brand-text);
	background-color: var(--vp-button-brand-bg);
}

.download-button.primary:hover {
	border-color: var(--vp-button-brand-hover-border);
	color: var(--vp-button-brand-hover-text);
	background-color: var(--vp-button-brand-hover-bg);
}

.download-button.primary:active {
	border-color: var(--vp-button-brand-active-border);
	color: var(--vp-button-brand-active-text);
	background-color: var(--vp-button-brand-active-bg);
}

.download-button.secondary {
	border-color: var(--vp-button-alt-border);
	color: var(--vp-button-alt-text);
	background-color: var(--vp-button-alt-bg);
}

.download-button.secondary:hover {
	border-color: var(--vp-button-alt-hover-border);
	color: var(--vp-button-alt-hover-text);
	background-color: var(--vp-button-alt-hover-bg);
}

.download-button.secondary:active {
    border-color: var(--vp-button-alt-active-border);
	color: var(--vp-button-alt-active-text);
	background-color: var(--vp-button-alt-active-bg);
}

svg {
	display: inline-block;
	vertical-align: middle;
	margin-right: 0.5em;
	font-size: 1.25em;
}

.text {
	margin-right: 10px;
}

.version {
	font-size: 0.8em;
}

.version-disclaimer {
	display: block;
	text-align: center;
	margin: 0.75em auto;
	font-size: 0.75rem;
}
</style>