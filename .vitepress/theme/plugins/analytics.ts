// Code based on vitepress-plugin-google-analytics.
// Customized as the plugin did not consider the script loading time.
// https://github.com/ZhongxuYang/vitepress-plugin-google-analytics

function mountGoogleAnalytics(id: string) {
	if (("dataLayer" in window && window.gtag) || window.location.hostname === "localhost") {
		return
	}

	const analyticsScript = document.createElement("script")
	analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${id}`

	analyticsScript.addEventListener("load", () => {
		// @ts-expect-error Missing types
		window.dataLayer = window.dataLayer || []
		const gtag = (...args: unknown[]) =>{
			// @ts-expect-error Missing types
			// eslint-disable-next-line prefer-rest-params
			window.dataLayer.push(args)
		}

		gtag("js", new Date())
		gtag("config", id)

		window.gtag = gtag
	})


	document.body.appendChild(analyticsScript)
}

export default function initializeAnalytics(id: string) {
  if (process.env.NODE_ENV === "production" && id && typeof window !== "undefined") {
		mountGoogleAnalytics(id)
	}
}
