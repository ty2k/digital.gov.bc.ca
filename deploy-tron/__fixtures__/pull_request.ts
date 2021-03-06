export const pullRequest = {
  url: 'https://api.github.com/repos/patricksimonian/strapi-demo/pulls/11',
  id: 468070805,
  node_id: 'MDExOlB1bGxSZXF1ZXN0NDY4MDcwODA1',
  html_url: 'https://github.com/patricksimonian/strapi-demo/pull/11',
  diff_url: 'https://github.com/patricksimonian/strapi-demo/pull/11.diff',
  patch_url: 'https://github.com/patricksimonian/strapi-demo/pull/11.patch',
  issue_url: 'https://api.github.com/repos/patricksimonian/strapi-demo/issues/11',
  number: 11,
  state: 'open',
  locked: false,
  title: 'Update README.md',
  user: {
    login: 'patricksimonian',
    id: 21046727,
    node_id: 'MDQ6VXNlcjIxMDQ2NzI3',
    avatar_url: 'https://avatars1.githubusercontent.com/u/21046727?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/patricksimonian',
    html_url: 'https://github.com/patricksimonian',
    followers_url: 'https://api.github.com/users/patricksimonian/followers',
    following_url: 'https://api.github.com/users/patricksimonian/following{/other_user}',
    gists_url: 'https://api.github.com/users/patricksimonian/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/patricksimonian/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/patricksimonian/subscriptions',
    organizations_url: 'https://api.github.com/users/patricksimonian/orgs',
    repos_url: 'https://api.github.com/users/patricksimonian/repos',
    events_url: 'https://api.github.com/users/patricksimonian/events{/privacy}',
    received_events_url: 'https://api.github.com/users/patricksimonian/received_events',
    type: 'User',
    site_admin: false
  },
  body: '',
  created_at: '2020-08-14T16:19:51Z',
  updated_at: '2020-08-14T19:58:57Z',
  closed_at: null,
  merged_at: null,
  merge_commit_sha: '2a094fc185ee4d89f2661bc4fb535de7cdb0afec',
  assignee: null,
  assignees: [],
  requested_reviewers: [],
  requested_teams: [],
  labels: [],
  milestone: null,
  draft: false,
  commits_url: 'https://api.github.com/repos/patricksimonian/strapi-demo/pulls/11/commits',
  review_comments_url: 'https://api.github.com/repos/patricksimonian/strapi-demo/pulls/11/comments',
  review_comment_url: 'https://api.github.com/repos/patricksimonian/strapi-demo/pulls/comments{/number}',
  comments_url: 'https://api.github.com/repos/patricksimonian/strapi-demo/issues/11/comments',
  statuses_url: 'https://api.github.com/repos/patricksimonian/strapi-demo/statuses/038dade51d78ccf77d396793410d54af438ca7ae',
  head: {
    label: 'patricksimonian:patricksimonian-patch-1',
    ref: 'patricksimonian-patch-1',
    sha: '038dade51d78ccf77d396793410d54af438ca7ae',
    user: [],
    repo: []
  },
  base: {
    label: 'patricksimonian:master',
    ref: 'master',
    sha: '1dde852b72aaa1e62d1f8cd5281208761c254e78',
    user: [],
    repo: []
  },
  _links: {
    self: [],
    html: [],
    issue: [],
    comments: [],
    review_comments: [],
    review_comment: [],
    commits: [],
    statuses: []
  },
  author_association: 'OWNER',
  active_lock_reason: null,
  merged: false,
  mergeable: true,
  rebaseable: true,
  mergeable_state: 'clean',
  merged_by: null,
  comments: 16,
  review_comments: 0,
  maintainer_can_modify: false,
  commits: 1,
  additions: 2,
  deletions: 0,
  changed_files: 1
};


export const pullRequestEvent = {
  name: 'pull_request.opened',
  id: 'foo',
  payload: {
    "action": "opened",
    "number": 13,
    "pull_request": {
      "url": "https://api.github.com/repos/patricksimonian/strapi-demo/pulls/13",
      "id": 1,
      "node_id": "3432",
      "html_url": "https://github.com/patricksimonian/strapi-demo/pull/13",
      "diff_url": "https://github.com/patricksimonian/strapi-demo/pull/13.diff",
      "patch_url": "https://github.com/patricksimonian/strapi-demo/pull/13.patch",
      "issue_url": "https://api.github.com/repos/patricksimonian/strapi-demo/issues/13",
      "number": 13,
      "state": "open",
      "locked": false,
      "title": "Update README.md",
      "user": {
        "login": "patricksimonian",
        "id": 1,
        "node_id": "3432",
        "avatar_url": "https://avatars1.githubusercontent.com/u/21046727?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/patricksimonian",
        "html_url": "https://github.com/patricksimonian",
        "followers_url": "https://api.github.com/users/patricksimonian/followers",
        "following_url": "https://api.github.com/users/patricksimonian/following{/other_user}",
        "gists_url": "https://api.github.com/users/patricksimonian/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/patricksimonian/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/patricksimonian/subscriptions",
        "organizations_url": "https://api.github.com/users/patricksimonian/orgs",
        "repos_url": "https://api.github.com/users/patricksimonian/repos",
        "events_url": "https://api.github.com/users/patricksimonian/events{/privacy}",
        "received_events_url": "https://api.github.com/users/patricksimonian/received_events",
        "type": "User",
        "site_admin": false
      },
      "body": "",
      "created_at": "2020-08-23T23:29:19Z",
      "updated_at": "2020-08-23T23:29:19Z",
      "closed_at": null,
      "merged_at": null,
      "merge_commit_sha": null,
      "assignee": null,
      "assignees": [],
      "requested_reviewers": [],
      "requested_teams": [],
      "labels": [],
      "milestone": null,
      "draft": false,
      "commits_url": "https://api.github.com/repos/patricksimonian/strapi-demo/pulls/13/commits",
      "review_comments_url": "https://api.github.com/repos/patricksimonian/strapi-demo/pulls/13/comments",
      "review_comment_url": "https://api.github.com/repos/patricksimonian/strapi-demo/pulls/comments{/number}",
      "comments_url": "https://api.github.com/repos/patricksimonian/strapi-demo/issues/13/comments",
      "statuses_url": "https://api.github.com/repos/patricksimonian/strapi-demo/statuses/99b32cbc00fa0018f07a1610e255cb6c64b55e7d",
      "head": {
        "label": "patricksimonian:patricksimonian-patch-3",
        "ref": "patricksimonian-patch-3",
        "sha": "99b32cbc00fa0018f07a1610e255cb6c64b55e7d",
        "user": {
          "login": "patricksimonian",
          "id": 1,
          "node_id": "3432",
          "avatar_url": "https://avatars1.githubusercontent.com/u/21046727?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/patricksimonian",
          "html_url": "https://github.com/patricksimonian",
          "followers_url": "https://api.github.com/users/patricksimonian/followers",
          "following_url": "https://api.github.com/users/patricksimonian/following{/other_user}",
          "gists_url": "https://api.github.com/users/patricksimonian/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/patricksimonian/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/patricksimonian/subscriptions",
          "organizations_url": "https://api.github.com/users/patricksimonian/orgs",
          "repos_url": "https://api.github.com/users/patricksimonian/repos",
          "events_url": "https://api.github.com/users/patricksimonian/events{/privacy}",
          "received_events_url": "https://api.github.com/users/patricksimonian/received_events",
          "type": "User",
          "site_admin": false
        },
        "repo": {
          "id": 1,
          "node_id": "3432=",
          "name": "strapi-demo",
          "full_name": "patricksimonian/strapi-demo",
          "private": false,
          "owner": {
            "login": "patricksimonian",
            "id": 1,
            "node_id": "3432",
            "avatar_url": "https://avatars1.githubusercontent.com/u/21046727?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/patricksimonian",
            "html_url": "https://github.com/patricksimonian",
            "followers_url": "https://api.github.com/users/patricksimonian/followers",
            "following_url": "https://api.github.com/users/patricksimonian/following{/other_user}",
            "gists_url": "https://api.github.com/users/patricksimonian/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/patricksimonian/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/patricksimonian/subscriptions",
            "organizations_url": "https://api.github.com/users/patricksimonian/orgs",
            "repos_url": "https://api.github.com/users/patricksimonian/repos",
            "events_url": "https://api.github.com/users/patricksimonian/events{/privacy}",
            "received_events_url": "https://api.github.com/users/patricksimonian/received_events",
            "type": "User",
            "site_admin": false
          },
          "html_url": "https://github.com/patricksimonian/strapi-demo",
          "description": "A demonstration of Strapi in Openshift with a HA mongo replica set",
          "fork": false,
          "url": "https://api.github.com/repos/patricksimonian/strapi-demo",
          "forks_url": "https://api.github.com/repos/patricksimonian/strapi-demo/forks",
          "keys_url": "https://api.github.com/repos/patricksimonian/strapi-demo/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/patricksimonian/strapi-demo/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/patricksimonian/strapi-demo/teams",
          "hooks_url": "https://api.github.com/repos/patricksimonian/strapi-demo/hooks",
          "issue_events_url": "https://api.github.com/repos/patricksimonian/strapi-demo/issues/events{/number}",
          "events_url": "https://api.github.com/repos/patricksimonian/strapi-demo/events",
          "assignees_url": "https://api.github.com/repos/patricksimonian/strapi-demo/assignees{/user}",
          "branches_url": "https://api.github.com/repos/patricksimonian/strapi-demo/branches{/branch}",
          "tags_url": "https://api.github.com/repos/patricksimonian/strapi-demo/tags",
          "blobs_url": "https://api.github.com/repos/patricksimonian/strapi-demo/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/patricksimonian/strapi-demo/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/patricksimonian/strapi-demo/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/patricksimonian/strapi-demo/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/patricksimonian/strapi-demo/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/patricksimonian/strapi-demo/languages",
          "stargazers_url": "https://api.github.com/repos/patricksimonian/strapi-demo/stargazers",
          "contributors_url": "https://api.github.com/repos/patricksimonian/strapi-demo/contributors",
          "subscribers_url": "https://api.github.com/repos/patricksimonian/strapi-demo/subscribers",
          "subscription_url": "https://api.github.com/repos/patricksimonian/strapi-demo/subscription",
          "commits_url": "https://api.github.com/repos/patricksimonian/strapi-demo/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/patricksimonian/strapi-demo/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/patricksimonian/strapi-demo/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/patricksimonian/strapi-demo/issues/comments{/number}",
          "contents_url": "https://api.github.com/repos/patricksimonian/strapi-demo/contents/{+path}",
          "compare_url": "https://api.github.com/repos/patricksimonian/strapi-demo/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/patricksimonian/strapi-demo/merges",
          "archive_url": "https://api.github.com/repos/patricksimonian/strapi-demo/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/patricksimonian/strapi-demo/downloads",
          "issues_url": "https://api.github.com/repos/patricksimonian/strapi-demo/issues{/number}",
          "pulls_url": "https://api.github.com/repos/patricksimonian/strapi-demo/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/patricksimonian/strapi-demo/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/patricksimonian/strapi-demo/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/patricksimonian/strapi-demo/labels{/name}",
          "releases_url": "https://api.github.com/repos/patricksimonian/strapi-demo/releases{/id}",
          "deployments_url": "https://api.github.com/repos/patricksimonian/strapi-demo/deployments",
          "created_at": "2020-07-10T00:55:14Z",
          "updated_at": "2020-08-19T22:00:33Z",
          "pushed_at": "2020-08-23T23:29:16Z",
          "git_url": "git://github.com/patricksimonian/strapi-demo.git",
          "ssh_url": "git@github.com:patricksimonian/strapi-demo.git",
          "clone_url": "https://github.com/patricksimonian/strapi-demo.git",
          "svn_url": "https://github.com/patricksimonian/strapi-demo",
          "homepage": null,
          "size": 2204,
          "stargazers_count": 0,
          "watchers_count": 0,
          "language": "JavaScript",
          "has_issues": true,
          "has_projects": true,
          "has_downloads": true,
          "has_wiki": true,
          "has_pages": false,
          "forks_count": 0,
          "mirror_url": null,
          "archived": false,
          "disabled": false,
          "open_issues_count": 6,
          "license": null,
          "forks": 0,
          "open_issues": 6,
          "watchers": 0,
          "default_branch": "master",
          "allow_squash_merge": true,
          "allow_merge_commit": true,
          "allow_rebase_merge": true,
          "delete_branch_on_merge": false
        }
      },
      "base": {
        "label": "patricksimonian:master",
        "ref": "master",
        "sha": "9bf25420e9d1b4439d62c63e5a21b14f10354865",
        "user": {
          "login": "patricksimonian",
          "id": 1,
          "node_id": "3432",
          "avatar_url": "https://avatars1.githubusercontent.com/u/21046727?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/patricksimonian",
          "html_url": "https://github.com/patricksimonian",
          "followers_url": "https://api.github.com/users/patricksimonian/followers",
          "following_url": "https://api.github.com/users/patricksimonian/following{/other_user}",
          "gists_url": "https://api.github.com/users/patricksimonian/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/patricksimonian/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/patricksimonian/subscriptions",
          "organizations_url": "https://api.github.com/users/patricksimonian/orgs",
          "repos_url": "https://api.github.com/users/patricksimonian/repos",
          "events_url": "https://api.github.com/users/patricksimonian/events{/privacy}",
          "received_events_url": "https://api.github.com/users/patricksimonian/received_events",
          "type": "User",
          "site_admin": false
        },
        "repo": {
          "id": 1,
          "node_id": "3432=",
          "name": "strapi-demo",
          "full_name": "patricksimonian/strapi-demo",
          "private": false,
          "owner": {
            "login": "patricksimonian",
            "id": 1,
            "node_id": "3432",
            "avatar_url": "https://avatars1.githubusercontent.com/u/21046727?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/patricksimonian",
            "html_url": "https://github.com/patricksimonian",
            "followers_url": "https://api.github.com/users/patricksimonian/followers",
            "following_url": "https://api.github.com/users/patricksimonian/following{/other_user}",
            "gists_url": "https://api.github.com/users/patricksimonian/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/patricksimonian/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/patricksimonian/subscriptions",
            "organizations_url": "https://api.github.com/users/patricksimonian/orgs",
            "repos_url": "https://api.github.com/users/patricksimonian/repos",
            "events_url": "https://api.github.com/users/patricksimonian/events{/privacy}",
            "received_events_url": "https://api.github.com/users/patricksimonian/received_events",
            "type": "User",
            "site_admin": false
          },
          "html_url": "https://github.com/patricksimonian/strapi-demo",
          "description": "A demonstration of Strapi in Openshift with a HA mongo replica set",
          "fork": false,
          "url": "https://api.github.com/repos/patricksimonian/strapi-demo",
          "forks_url": "https://api.github.com/repos/patricksimonian/strapi-demo/forks",
          "keys_url": "https://api.github.com/repos/patricksimonian/strapi-demo/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/patricksimonian/strapi-demo/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/patricksimonian/strapi-demo/teams",
          "hooks_url": "https://api.github.com/repos/patricksimonian/strapi-demo/hooks",
          "issue_events_url": "https://api.github.com/repos/patricksimonian/strapi-demo/issues/events{/number}",
          "events_url": "https://api.github.com/repos/patricksimonian/strapi-demo/events",
          "assignees_url": "https://api.github.com/repos/patricksimonian/strapi-demo/assignees{/user}",
          "branches_url": "https://api.github.com/repos/patricksimonian/strapi-demo/branches{/branch}",
          "tags_url": "https://api.github.com/repos/patricksimonian/strapi-demo/tags",
          "blobs_url": "https://api.github.com/repos/patricksimonian/strapi-demo/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/patricksimonian/strapi-demo/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/patricksimonian/strapi-demo/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/patricksimonian/strapi-demo/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/patricksimonian/strapi-demo/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/patricksimonian/strapi-demo/languages",
          "stargazers_url": "https://api.github.com/repos/patricksimonian/strapi-demo/stargazers",
          "contributors_url": "https://api.github.com/repos/patricksimonian/strapi-demo/contributors",
          "subscribers_url": "https://api.github.com/repos/patricksimonian/strapi-demo/subscribers",
          "subscription_url": "https://api.github.com/repos/patricksimonian/strapi-demo/subscription",
          "commits_url": "https://api.github.com/repos/patricksimonian/strapi-demo/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/patricksimonian/strapi-demo/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/patricksimonian/strapi-demo/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/patricksimonian/strapi-demo/issues/comments{/number}",
          "contents_url": "https://api.github.com/repos/patricksimonian/strapi-demo/contents/{+path}",
          "compare_url": "https://api.github.com/repos/patricksimonian/strapi-demo/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/patricksimonian/strapi-demo/merges",
          "archive_url": "https://api.github.com/repos/patricksimonian/strapi-demo/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/patricksimonian/strapi-demo/downloads",
          "issues_url": "https://api.github.com/repos/patricksimonian/strapi-demo/issues{/number}",
          "pulls_url": "https://api.github.com/repos/patricksimonian/strapi-demo/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/patricksimonian/strapi-demo/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/patricksimonian/strapi-demo/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/patricksimonian/strapi-demo/labels{/name}",
          "releases_url": "https://api.github.com/repos/patricksimonian/strapi-demo/releases{/id}",
          "deployments_url": "https://api.github.com/repos/patricksimonian/strapi-demo/deployments",
          "created_at": "2020-07-10T00:55:14Z",
          "updated_at": "2020-08-19T22:00:33Z",
          "pushed_at": "2020-08-23T23:29:16Z",
          "git_url": "git://github.com/patricksimonian/strapi-demo.git",
          "ssh_url": "git@github.com:patricksimonian/strapi-demo.git",
          "clone_url": "https://github.com/patricksimonian/strapi-demo.git",
          "svn_url": "https://github.com/patricksimonian/strapi-demo",
          "homepage": null,
          "size": 2204,
          "stargazers_count": 0,
          "watchers_count": 0,
          "language": "JavaScript",
          "has_issues": true,
          "has_projects": true,
          "has_downloads": true,
          "has_wiki": true,
          "has_pages": false,
          "forks_count": 0,
          "mirror_url": null,
          "archived": false,
          "disabled": false,
          "open_issues_count": 6,
          "license": null,
          "forks": 0,
          "open_issues": 6,
          "watchers": 0,
          "default_branch": "master",
          "allow_squash_merge": true,
          "allow_merge_commit": true,
          "allow_rebase_merge": true,
          "delete_branch_on_merge": false
        }
      },
      "_links": {
        "self": {
          "href": "https://api.github.com/repos/patricksimonian/strapi-demo/pulls/13"
        },
        "html": {
          "href": "https://github.com/patricksimonian/strapi-demo/pull/13"
        },
        "issue": {
          "href": "https://api.github.com/repos/patricksimonian/strapi-demo/issues/13"
        },
        "comments": {
          "href": "https://api.github.com/repos/patricksimonian/strapi-demo/issues/13/comments"
        },
        "review_comments": {
          "href": "https://api.github.com/repos/patricksimonian/strapi-demo/pulls/13/comments"
        },
        "review_comment": {
          "href": "https://api.github.com/repos/patricksimonian/strapi-demo/pulls/comments{/number}"
        },
        "commits": {
          "href": "https://api.github.com/repos/patricksimonian/strapi-demo/pulls/13/commits"
        },
        "statuses": {
          "href": "https://api.github.com/repos/patricksimonian/strapi-demo/statuses/99b32cbc00fa0018f07a1610e255cb6c64b55e7d"
        }
      },
      "author_association": "OWNER",
      "active_lock_reason": null,
      "merged": false,
      "mergeable": null,
      "rebaseable": null,
      "mergeable_state": "unknown",
      "merged_by": null,
      "comments": 0,
      "review_comments": 0,
      "maintainer_can_modify": false,
      "commits": 1,
      "additions": 2,
      "deletions": 3,
      "changed_files": 1
    },
    "repository": {
      "id": 1,
      "node_id": "3432=",
      "name": "strapi-demo",
      "full_name": "patricksimonian/strapi-demo",
      "private": false,
      "owner": {
        "login": "patricksimonian",
        "id": 1,
        "node_id": "3432",
        "avatar_url": "https://avatars1.githubusercontent.com/u/21046727?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/patricksimonian",
        "html_url": "https://github.com/patricksimonian",
        "followers_url": "https://api.github.com/users/patricksimonian/followers",
        "following_url": "https://api.github.com/users/patricksimonian/following{/other_user}",
        "gists_url": "https://api.github.com/users/patricksimonian/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/patricksimonian/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/patricksimonian/subscriptions",
        "organizations_url": "https://api.github.com/users/patricksimonian/orgs",
        "repos_url": "https://api.github.com/users/patricksimonian/repos",
        "events_url": "https://api.github.com/users/patricksimonian/events{/privacy}",
        "received_events_url": "https://api.github.com/users/patricksimonian/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/patricksimonian/strapi-demo",
      "description": "A demonstration of Strapi in Openshift with a HA mongo replica set",
      "fork": false,
      "url": "https://api.github.com/repos/patricksimonian/strapi-demo",
      "forks_url": "https://api.github.com/repos/patricksimonian/strapi-demo/forks",
      "keys_url": "https://api.github.com/repos/patricksimonian/strapi-demo/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/patricksimonian/strapi-demo/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/patricksimonian/strapi-demo/teams",
      "hooks_url": "https://api.github.com/repos/patricksimonian/strapi-demo/hooks",
      "issue_events_url": "https://api.github.com/repos/patricksimonian/strapi-demo/issues/events{/number}",
      "events_url": "https://api.github.com/repos/patricksimonian/strapi-demo/events",
      "assignees_url": "https://api.github.com/repos/patricksimonian/strapi-demo/assignees{/user}",
      "branches_url": "https://api.github.com/repos/patricksimonian/strapi-demo/branches{/branch}",
      "tags_url": "https://api.github.com/repos/patricksimonian/strapi-demo/tags",
      "blobs_url": "https://api.github.com/repos/patricksimonian/strapi-demo/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/patricksimonian/strapi-demo/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/patricksimonian/strapi-demo/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/patricksimonian/strapi-demo/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/patricksimonian/strapi-demo/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/patricksimonian/strapi-demo/languages",
      "stargazers_url": "https://api.github.com/repos/patricksimonian/strapi-demo/stargazers",
      "contributors_url": "https://api.github.com/repos/patricksimonian/strapi-demo/contributors",
      "subscribers_url": "https://api.github.com/repos/patricksimonian/strapi-demo/subscribers",
      "subscription_url": "https://api.github.com/repos/patricksimonian/strapi-demo/subscription",
      "commits_url": "https://api.github.com/repos/patricksimonian/strapi-demo/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/patricksimonian/strapi-demo/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/patricksimonian/strapi-demo/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/patricksimonian/strapi-demo/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/patricksimonian/strapi-demo/contents/{+path}",
      "compare_url": "https://api.github.com/repos/patricksimonian/strapi-demo/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/patricksimonian/strapi-demo/merges",
      "archive_url": "https://api.github.com/repos/patricksimonian/strapi-demo/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/patricksimonian/strapi-demo/downloads",
      "issues_url": "https://api.github.com/repos/patricksimonian/strapi-demo/issues{/number}",
      "pulls_url": "https://api.github.com/repos/patricksimonian/strapi-demo/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/patricksimonian/strapi-demo/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/patricksimonian/strapi-demo/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/patricksimonian/strapi-demo/labels{/name}",
      "releases_url": "https://api.github.com/repos/patricksimonian/strapi-demo/releases{/id}",
      "deployments_url": "https://api.github.com/repos/patricksimonian/strapi-demo/deployments",
      "created_at": "2020-07-10T00:55:14Z",
      "updated_at": "2020-08-19T22:00:33Z",
      "pushed_at": "2020-08-23T23:29:16Z",
      "git_url": "git://github.com/patricksimonian/strapi-demo.git",
      "ssh_url": "git@github.com:patricksimonian/strapi-demo.git",
      "clone_url": "https://github.com/patricksimonian/strapi-demo.git",
      "svn_url": "https://github.com/patricksimonian/strapi-demo",
      "homepage": null,
      "size": 2204,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 6,
      "license": null,
      "forks": 0,
      "open_issues": 6,
      "watchers": 0,
      "default_branch": "master"
    },
    "sender": {
      "login": "patricksimonian",
      "id": 1,
      "node_id": "3432",
      "avatar_url": "https://avatars1.githubusercontent.com/u/21046727?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/patricksimonian",
      "html_url": "https://github.com/patricksimonian",
      "followers_url": "https://api.github.com/users/patricksimonian/followers",
      "following_url": "https://api.github.com/users/patricksimonian/following{/other_user}",
      "gists_url": "https://api.github.com/users/patricksimonian/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/patricksimonian/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/patricksimonian/subscriptions",
      "organizations_url": "https://api.github.com/users/patricksimonian/orgs",
      "repos_url": "https://api.github.com/users/patricksimonian/repos",
      "events_url": "https://api.github.com/users/patricksimonian/events{/privacy}",
      "received_events_url": "https://api.github.com/users/patricksimonian/received_events",
      "type": "User",
      "site_admin": false
    },
    "installation": {
      "id": 1,
      "node_id": "3432="
    }
  }
};
