import * as markdownBody from "weekly-digest/src/markdown/markdownBody"
import * as moment from 'moment'
import { GitHubAPI } from 'probot/lib/github'


export class WeeklyDigest {
    private repo: string
    from: moment.Moment
    to: moment.Moment

    constructor(repo: string) {
        this.repo = repo
        this.from = moment().subtract(7, 'days')
        this.to = moment()
    }

    async getMarkdown(): Promise<string> {
        let github = GitHubAPI()
        const GITHUB_TOKEN = process.env.GITHUB_TOKEN
        if (GITHUB_TOKEN) {
            console.log(`GITHUB_TOKEN env var is set, using it to authentificate`)
            github.authenticate({ type: 'token', token: GITHUB_TOKEN })
        }

        let context = {
            "github": github
        }

        const [owner, repo] = this.repo.split('/')
        let headDate = this.to
        let tailDate = this.from

        let config = {
            "canPublishIssues" : true,
            "canPublishPullRequests" : true,
            "canPublishCommits" : true,
            "canPublishContributors" : true,
            "canPublishStargazers" : true,
            "canPublishReleases" : true
        }
      
        return await markdownBody(context, {owner, repo, headDate, tailDate}, config);
    }
}