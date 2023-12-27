import { type Ref, computed } from 'vue'
import { useData } from 'vitepress'

export interface Data {
	lang: Ref<string>
}

const { lang }: Data = useData()

export const main_three_dots = computed<string>(() => (lang.value === 'ru') ? ('Переводчик') : ((lang.value === 'ua') ? ('Перекладач') : ('Translator')))