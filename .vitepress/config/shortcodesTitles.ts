import { type Ref, computed } from 'vue'
import { useData } from 'vitepress'

export interface Data {
	lang: Ref<string>
}

const { lang }: Data = useData()

export const translator = computed<string>(() => (lang.value === 'ru') ? ('Переводчик') : ((lang.value === 'ua') ? ('Перекладач') : ('Translator')))

export const main_overflow_menu = computed<string>(() => (lang.value === 'ru') ? ('Меню') : ((lang.value === 'ua') ? ('Меню') : ('Overflow menu')))
export const main_history = computed<string>(() => (lang.value === 'ru') ? ('История') : ((lang.value === 'ua') ? ('Меню') : ('History')))
export const main_favourites = computed<string>(() => (lang.value === 'ru') ? ('Избранное') : ((lang.value === 'ua') ? ('Меню') : ('Favourites')))
export const main_explore = computed<string>(() => (lang.value === 'ru') ? ('Обзор') : ((lang.value === 'ua') ? ('Меню') : ('Explore')))
export const main_feed = computed<string>(() => (lang.value === 'ru') ? ('Лента') : ((lang.value === 'ua') ? ('Меню') : ('Feed')))
export const main_settings = computed<string>(() => (lang.value === 'ru') ? ('Настройки') : ((lang.value === 'ua') ? ('Меню') : ('Settings')))