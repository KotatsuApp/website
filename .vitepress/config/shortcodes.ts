const iconMappings = {
    about: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-outline</title><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /></svg>',
    bookmark: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>bookmark-outline</title><path d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg>',
    bookPage: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 1l-5 5v11l5-4.5V1m2 4v13.5c-1.1-0.35-2.3-0.5-3.5-0.5-1.7 0-4.15 0.65-5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5C4.55 4.5 2.45 4.9 1 6v14.65c0 0.25 0.25 0.5 0.5 0.5 0.1 0 0.15-0.05 0.25-0.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05 0.4 5.5 1.5 1.35-0.85 3.8-1.5 5.5-1.5 1.65 0 3.35 0.3 4.75 1.05 0.1 0.05 0.15 0.05 0.25 0.05 0.25 0 0.5-0.25 0.5-0.5V6c-0.6-0.45-1.25-0.75-2-1M10 18.41C8.75 18.09 7.5 18 6.5 18c-1.06 0-2.32 0.19-3.5 0.5V7.13C3.91 6.73 5.14 6.5 6.5 6.5c1.36 0 2.59 0.23 3.5 0.63v11.28z" /></svg>',
	compassOutline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,17L10.2,10.2L17,7L13.8,13.8L7,17M12,11.1A0.9,0.9 0 0,0 11.1,12A0.9,0.9 0 0,0 12,12.9A0.9,0.9 0 0,0 12.9,12A0.9,0.9 0 0,0 12,11.1M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" /></svg>',
	dataPrivacy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 14.4C17.6 14.4 18.1 14.9 18.1 15.5S17.6 16.6 17 16.6 15.9 16.1 15.9 15.5 16.4 14.4 17 14.4M17 17.5C16.3 17.5 14.8 17.9 14.8 18.6C15.3 19.3 16.1 19.8 17 19.8S18.7 19.3 19.2 18.6C19.2 17.9 17.7 17.5 17 17.5M18 11.1V6.3L10.5 3L3 6.3V11.2C3 15.7 6.2 20 10.5 21C11.1 20.9 11.6 20.7 12.1 20.5C13.2 22 15 23 17 23C20.3 23 23 20.3 23 17C23 14 20.8 11.6 18 11.1M11 17C11 17.6 11.1 18.1 11.2 18.6C11 18.7 10.7 18.8 10.5 18.9C7.3 17.9 5 14.7 5 11.2V7.6L10.5 5.2L16 7.6V11.1C13.2 11.6 11 14 11 17M17 21C14.8 21 13 19.2 13 17S14.8 13 17 13 21 14.8 21 17 19.2 21 17 21Z" /></svg>',
    dice: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dice-5-outline</title><path d="M19 5V19H5V5H19M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7.5 6C6.7 6 6 6.7 6 7.5S6.7 9 7.5 9 9 8.3 9 7.5 8.3 6 7.5 6M16.5 15C15.7 15 15 15.7 15 16.5C15 17.3 15.7 18 16.5 18C17.3 18 18 17.3 18 16.5C18 15.7 17.3 15 16.5 15M16.5 6C15.7 6 15 6.7 15 7.5S15.7 9 16.5 9C17.3 9 18 8.3 18 7.5S17.3 6 16.5 6M12 10.5C11.2 10.5 10.5 11.2 10.5 12S11.2 13.5 12 13.5 13.5 12.8 13.5 12 12.8 10.5 12 10.5M7.5 15C6.7 15 6 15.7 6 16.5C6 17.3 6.7 18 7.5 18S9 17.3 9 16.5C9 15.7 8.3 15 7.5 15Z" /></svg>',
    dotsHorizontal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>',
	downloadOutline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,5V11H14.17L12,13.17L9.83,11H11V5H13M15,3H9V9H5L12,16L19,9H15V3M19,18H5V20H19V18Z" /></svg>',
	favourite: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>heart-outline</title><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" /></svg>',
    feed: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>rss</title><path d="M6.18,15.64A2.18,2.18 0 0,1 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82A2.18,2.18 0 0,1 6.18,15.64M4,4.44A15.56,15.56 0 0,1 19.56,20H16.73A12.73,12.73 0 0,0 4,7.27V4.44M4,10.1A9.9,9.9 0 0,1 13.9,20H11.07A7.07,7.07 0 0,0 4,12.93V10.1Z" /></svg>',
	history: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" /></svg>',
	local: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 4v16H6V8.83L10.83 4H18m0-2h-8L4 8v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z" /></svg>',
    paletteOutline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z" /></svg>',
    sources: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 20h14v2H4c-1.1 0-2-0.9-2-2V6h2v14M22 4v12c0 1.1-0.9 2-2 2H8c-1.1 0-2-0.9-2-2V4c0-1.1 0.9-2 2-2h12c1.1 0 2 0.9 2 2m-2 0H8v12h12V4m-2 2h-5v7l2.5-1.5L18 13V6z" /></svg>',
    services: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,13.5C22,15.26 20.7,16.72 19,16.96V20A2,2 0 0,1 17,22H13.2V21.7A2.7,2.7 0 0,0 10.5,19C9,19 7.8,20.21 7.8,21.7V22H4A2,2 0 0,1 2,20V16.2H2.3C3.79,16.2 5,15 5,13.5C5,12 3.79,10.8 2.3,10.8H2V7A2,2 0 0,1 4,5H7.04C7.28,3.3 8.74,2 10.5,2C12.26,2 13.72,3.3 13.96,5H17A2,2 0 0,1 19,7V10.04C20.7,10.28 22,11.74 22,13.5M17,15H18.5A1.5,1.5 0 0,0 20,13.5A1.5,1.5 0 0,0 18.5,12H17V7H12V5.5A1.5,1.5 0 0,0 10.5,4A1.5,1.5 0 0,0 9,5.5V7H4V9.12C5.76,9.8 7,11.5 7,13.5C7,15.5 5.75,17.2 4,17.88V20H6.12C6.8,18.25 8.5,17 10.5,17C12.5,17 14.2,18.25 14.88,20H17V15Z" /></svg>',
    threeDots: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-vertical</title><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" /></svg>',
    web: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-0.32-1.25-0.78-2.45-1.38-3.56 1.84 0.63 3.37 1.91 4.33 3.56zM12 4.04c0.83 1.2 1.48 2.53 1.91 3.96h-3.82c0.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s0.1-1.36 0.26-2h3.38c-0.08 0.66-0.14 1.32-0.14 2 0 0.68 0.06 1.34 0.14 2H4.26zm0.82 2h2.95c0.32 1.25 0.78 2.45 1.38 3.56-1.84-0.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c0.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-0.83-1.2-1.48-2.53-1.91-3.96h3.82c-0.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-0.09-0.66-0.16-1.32-0.16-2 0-0.68 0.07-1.35 0.16-2h4.68c0.09 0.65 0.16 1.32 0.16 2 0 0.68-0.07 1.34-0.16 2zm0.25 5.56c0.6-1.11 1.06-2.31 1.38-3.56h2.95c-0.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c0.08-0.66 0.14-1.32 0.14-2 0-0.68-0.06-1.34-0.14-2h3.38C19.9 10.64 20 11.31 20 12s-0.1 1.36-0.26 2h-3.38z" /></svg>'
}

interface Navigation {
	name: string
	icon?: string
	dependsOn?: string
}

const navigationMappings: Record<string, Navigation> = {
	// Main menus
    "main_three_dots": { name: "Three dots", icon: iconMappings.threeDots },
	"main_history": { name: "History", icon: iconMappings.history },
	"main_favourites": { name: "Favourites", icon: iconMappings.favourite },
	"main_explore": { name: "Explore", icon: iconMappings.compassOutline },
	"main_feed": { name: "Feed", icon: iconMappings.feed },
    "main_settings": { name: "Settings", dependsOn: "main_three_dots" },

    // Explore
    "explore_local_storage" : { name: "Local storage", icon: iconMappings.local, dependsOn: "main_explore" },
    "explore_bookmarks" : { name: "Bookmarks", icon: iconMappings.bookmark, dependsOn: "main_explore" },
    "explore_random" : { name: "Random", icon: iconMappings.dice, dependsOn: "main_explore" },
    "explore_downloads" : { name: "Downloads", icon: iconMappings.downloadOutline, dependsOn: "main_explore" },
    "explore_manage_sources" : { name: "Manage", dependsOn: "main_explore" },

    // Details
    "details_tracking" : { name: "Tracking", dependsOn: "main_three_dots" },

    // Favourites
    "favourites_three_dots": { name: "Three dots", icon: iconMappings.threeDots, dependsOn: "main_favourites" },
    "favourites_manage_categories" : { name: "Manage categories", dependsOn: "favourites_three_dots" },

	// Settings submenu
	"appearance": { name: "Appearance", icon: iconMappings.paletteOutline, dependsOn: "main_settings" },
	"sources": { name: "Manga sources", icon: iconMappings.sources, dependsOn: "main_settings" },
	"reader": { name: "Reader settings", icon: iconMappings.bookPage, dependsOn: "main_settings" },
	"network": { name: "Network", icon: iconMappings.web, dependsOn: "main_settings" },
	"data": { name: "Data and privacy", icon: iconMappings.dataPrivacy, dependsOn: "main_settings" },
	"downloads": { name: "Downloads", icon: iconMappings.downloadOutline, dependsOn: "main_settings" },
	"checking": { name: "Check for new chapters", icon: iconMappings.feed, dependsOn: "main_settings" },
	"services": { name: "Services", icon: iconMappings.services, dependsOn: "main_settings" },
    "about": { name: "About", icon: iconMappings.about, dependsOn: "main_settings" },

	// Sync
	"sync_settings": { name: "Synchronization settings", dependsOn: "services" },
	"server_address": { name: "Server address", dependsOn: "sync_settings" }
}

function generateNavigationHtml(navKey: string) {
	const navData = navigationMappings[navKey]

	if (!navData) {
		return "<strong style='color:var(--vp-c-danger-1)'>Unsupported Navigation!</strong>"
	}

	const { name, icon, dependsOn } = navData

	const iconHtml = icon ?? ""
	let html = `<span class='shortcode navigation ${navKey}'>${iconHtml}<span class="name">${name}</span></span>`

	if (dependsOn) {
		html = `${generateNavigationHtml(dependsOn)} <span class='shortcode navigation direction'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-thin</title><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" /></svg></span> ${html}`
	}

	return html
}

const shortcodes = {
	nav: {
		render({ to }) {
			return generateNavigationHtml(to)
		},
	},
}

export default shortcodes