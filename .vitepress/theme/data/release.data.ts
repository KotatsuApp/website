import { defineLoader } from "vitepress"
import { Octokit } from "@octokit/rest"
import type { GetResponseDataTypeFromEndpointMethod } from "@octokit/types"
import fs from "node:fs"

const isDev = process.env.NODE_ENV === "development"

const CACHE_PATH = "./release.data.json"

const octokit = new Octokit()

type GitHubRelease = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.getLatestRelease>

export interface AppRelease {
	stable: GitHubRelease
}

declare const data: AppRelease
export { data }

export default defineLoader({
	async load(): Promise<AppRelease> {
    if (fs.existsSync(CACHE_PATH)) {
      console.log("Release data cache found, loading from cache")
      const cachedData = JSON.parse(fs.readFileSync(CACHE_PATH, "utf-8"))
      return cachedData
    }

		const { data: stable } = await octokit.repos.getLatestRelease({
			owner: "KotatsuApp",
			repo: "Kotatsu",
		})

		const releaseData = {stable}

		if (isDev) {
      console.log("Creating release cache")
      fs.writeFileSync(CACHE_PATH, JSON.stringify(releaseData, null, 2), "utf-8");
    }

		return releaseData
	},
})
