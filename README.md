# Weekly Digest CLI

CLI tool to generate a digest of all activities of a given Opne Source project/repository.

Uses and inspired by initial GSoC work https://github.com/probot/weekly-digest

[Example of the report](https://gist.github.com/bzz/b9afb24f49e723a91ccde8d4f12c489d).

## Run

```
$ yarn install
$ GITHUB_TOKEN="<personal token>" node ./bin/main.js src-d/go-git
```

## TODOs:
- [ ] contributors: from PRs instead of commits
  (otherwise, attributed to person who merged)
- [ ] "Last week there were no stargazers/releases" -> no NEW stargezers/releases
- [ ] formating: use lists (no newline in between el)
- [ ] remove last link to "digest issue"
- [ ] use template for .md generation
- [ ] separate: data/filtering + representaiton \w template
- [ ] add ToC header (Capitalize Titles)
- [ ] change footer to CLI (mention bot)
- [ ] CLI: add --to/--from args, -h
- [ ] tests!