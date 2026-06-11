# Auto-posting new blog posts to LinkedIn

When a blog post is published on `master`, the
[`linkedin-announce.yml`](workflows/linkedin-announce.yml) workflow shares a short
blurb to LinkedIn via [`scripts/post-to-linkedin.mjs`](scripts/post-to-linkedin.mjs).

## What counts as "published"

The script announces a post when:

- a new `content/blog/<year>/<slug>/index.md` is added and is **not** a draft, or
- an existing post's front matter flips from `draft: true` to `draft: false`.

Ordinary edits to an already-published post are **not** re-announced, so fix-up
commits are safe. Drafts are skipped.

The blurb is built from the post's front matter:

```
<title>

<description>

Read more: https://hitesh.in/<year>/<slug>/

#Tag1 #Tag2 #Tag3   (first three tags, optional)
```

## One-time setup

The workflow runs as a **dry-run** until two repository secrets exist. Without
them it just logs the blurb it would post — safe to merge as-is.

### 1. Create a LinkedIn app

1. Go to <https://www.linkedin.com/developers/apps> and create an app.
2. Add the **Share on LinkedIn** product (grants the `w_member_social` scope).
   Posting to a personal profile also needs **Sign In with LinkedIn using OpenID
   Connect** so you can read your member id.

### 2. Get an access token + your author URN

1. Run the OAuth authorization-code flow requesting scopes
   `openid profile w_member_social`. LinkedIn's
   [token tools](https://www.linkedin.com/developers/tools/oauth) can mint a
   token for testing.
2. Find your member id by calling the userinfo endpoint with that token:
   ```sh
   curl -s -H "Authorization: Bearer $TOKEN" https://api.linkedin.com/v2/userinfo
   ```
   The `sub` field is your id. Your author URN is `urn:li:person:<sub>`.

> Member access tokens expire (~60 days). When announcements stop working, mint a
> fresh token and update the secret, or wire up the refresh-token flow.

### 3. Add the secrets

In **Settings → Secrets and variables → Actions**:

| Type     | Name                     | Value                                  |
| -------- | ------------------------ | -------------------------------------- |
| Secret   | `LINKEDIN_ACCESS_TOKEN`  | the OAuth access token                 |
| Secret   | `LINKEDIN_AUTHOR_URN`    | `urn:li:person:<your-id>`              |
| Variable | `LINKEDIN_API_VERSION`   | optional, e.g. `202506` (YYYYMM)       |

## Testing

- Use the **Run workflow** button (workflow_dispatch) on the Actions tab. It
  defaults to `dry_run: true`, so it parses the latest commit's posts and prints
  the blurb without posting.
- Locally:
  ```sh
  GIT_AFTER=HEAD DRY_RUN=true node .github/scripts/post-to-linkedin.mjs
  ```

## Troubleshooting

**`401 INVALID_ACCESS_TOKEN`** — LinkedIn rejected the token. In order of likelihood:

1. **Wrong value pasted.** Make sure the secret holds the **access token** returned
   by the token exchange — not the OAuth *authorization code* from the redirect URL,
   and not the app's client secret.
2. **Stray whitespace.** A trailing newline pasted into the secret box corrupts the
   `Authorization` header. The script now trims the value, but re-paste cleanly if in
   doubt.
3. **Expired token.** Member tokens last ~60 days. Mint a fresh one.
4. **Wrong scope/flow.** It must be a 3-legged member token with `w_member_social`.

Verify a token in one command:

```sh
curl -H "Authorization: Bearer $TOKEN" https://api.linkedin.com/v2/userinfo
```

A `200` with a `sub` field means the token is good (and `urn:li:person:<sub>` is your
author URN — the workflow derives this automatically if `LINKEDIN_AUTHOR_URN` is unset).

## Notes & limits

- LinkedIn deprecates API versions over time. If you see a version error, bump
  the `LINKEDIN_API_VERSION` variable to a current `YYYYMM`.
- The post is plain commentary with the URL; LinkedIn usually renders a link
  preview automatically. Rich article cards would need an extra media upload step.
- The job is pinned to the `hitezh/hitesh_in` repo so forks can't post.
