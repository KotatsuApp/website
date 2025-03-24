<script setup lang="ts">
import { computed, ref } from "vue"

const {body, author, tag} = defineProps<{ body: string; author: string; tag: string }>()

function isHigherThan(tagName: string, reference: string) {
	return reference.localeCompare(tagName, undefined, { numeric: true, sensitivity: "base" }) >= 0
}

const notMentioned = computed(() => {
	return isHigherThan("v0.1", tag) ? ["Koitharu"] : []
})

const nonExistent = ref<string[]>([])

const contributors = computed(() => {
	const list = [...body.matchAll(/(?<=\(|(, ))@(.*?)(?=\)|(, ))/g)]
		.map((match) => match[2])
	const uncredited = author.includes("[bot]")
		? notMentioned.value
		: [author, ...notMentioned.value]

	return [...new Set([...uncredited, ...list])].filter((user) => !nonExistent.value.includes(user))
})

const listFormatter = new Intl.ListFormat("en", {
	style: "long",
	type: "conjunction",
})

const contributorsText = computed(() => {
	if (contributors.value.length <= 3) {
		return listFormatter.format(contributors.value)
	}

	return listFormatter.format([
		...contributors.value.slice(0, 2),
		`${contributors.value.at(-2)} other contributors`,
	])
})

function addToNonExistent(user: string) {
	if (!nonExistent.value.includes(user)) {
		nonExistent.value.push(user)
	}
}
</script>

<template>
	<div v-if="contributors.length > 0" class="contributors">
		<h3>Contributors</h3>
		<ul class="contributors__list">
			<li
			  class="contributor"
				v-for="contributor of contributors"
				:key="contributor"
			>
				<a
					:href="`https://github.com/${contributor}`"
					target="_blank"
					:title="`${contributor} profile on GitHub`"
					:aria-label="`${contributor} profile on GitHub`"
				>
					<img
						:src="`https://github.com/${contributor}.png?size=32`"
						:alt="`@${contributor} profile picture`"
						loading="lazy"
						class="contributor__avatar"
						@error="addToNonExistent(contributor)"
					>
				</a>
			</li>
		</ul>
		<div class="contributors__names">
			{{ contributorsText }}
		</div>
	</div>
</template>

<style scoped>
.contrubutors {
  .contrubutors__contributors__list {
    display: flex;
  	align-items: center;
  	flex-wrap: wrap;
  	gap: 0.5rem;
  	list-style-type: none;
  	padding-left: 0;
  }

  .contrubutors__names {
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
  }

  & li + li {
    margin-top: 0
  }
}

.contributor {
  .contributor__avatar {
    width: 32px;
  	height: 32px;
  	border-radius: 50%;
  	box-shadow: var(--vp-shadow-1);
  	border: 1px solid var(--vp-c-divider);
  }
}
</style>
