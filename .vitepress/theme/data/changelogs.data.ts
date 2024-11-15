import { defineLoader } from "vitepress"
import { Octokit } from "@octokit/rest"
import type { GetResponseDataTypeFromEndpointMethod } from "@octokit/types"
import fs from "node:fs"

const isDev = process.env.NODE_ENV === "development"

const CACHE_PATH = "./changelogs.data.json"

const octokit = new Octokit()

type GitHubReleaseList = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.listReleases>

declare const data: GitHubReleaseList
export { data }

export default defineLoader({
	async load(): Promise<GitHubReleaseList> {
	   if (fs.existsSync(CACHE_PATH)) {
      console.log("Changelogs data cache found, loading from cache")
      const cachedData = JSON.parse(fs.readFileSync(CACHE_PATH, "utf-8"))
      return cachedData
    }

		const releases = await octokit.paginate(octokit.repos.listReleases, {
			owner: "KotatsuApp",
			repo: "Kotatsu",
			per_page: 100,
		})

		if (isDev) {
		  console.log("Creating changelogs cache")
      fs.writeFileSync(CACHE_PATH, JSON.stringify(releases, null, 2), "utf-8");
    }

		return releases
	},
})
