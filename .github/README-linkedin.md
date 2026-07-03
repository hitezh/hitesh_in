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

The post is built from the post's front matter:

- **Image:** the post's featured image is attached to the post. LinkedIn only
  accepts JPG/PNG/GIF, so an SVG `image:` is swapped for its `.png` (then `.jpg`)
  page-bundle sibling, falling back to `static/images/default.jpg` — the same
  rule `head.html` uses for OG images.
- **Body:** title, description, and up to three hashtags — deliberately with **no
  link**, so LinkedIn doesn't dampen the post's reach.
- **First comment:** `Read more: https://hitesh.in/<year>/<slug>/` is posted as
  the first comment immediately after the post is created.

```
<title>

<description>

#Blog #Tag1 #Tag2 #Tag3   (first three tags, optional)
```

(Set `LINK_IN_COMMENT=false` to keep the link in the body instead, or
`POST_IMAGE=false` to skip the image.)

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

**From GitHub (recommended): Actions tab → _Announce new posts on LinkedIn_ →
Run workflow.** Leave the *dry_run* box checked (the default) and pick the branch.

In dry-run the workflow:

- **calls the LinkedIn API** (`/v2/userinfo`) to validate the token and confirm/derive
  the author URN — a read-only call that **never posts**, and
- **previews the exact post** it would publish — the commentary, the resolved
  image file, and the first-comment link (the changed post, or the latest
  published post if nothing changed).

A successful run logs `Token valid; author URN confirmed.` Untick *dry_run* only when
you actually want it to post.

Locally:

```sh
# Offline preview (no API, no posting):
GIT_AFTER=HEAD DRY_RUN=true node .github/scripts/post-to-linkedin.mjs

# Validate the token against the API without posting:
LINKEDIN_ACCESS_TOKEN="<token>" DRY_RUN=true GIT_AFTER=HEAD \
  node .github/scripts/post-to-linkedin.mjs
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
- **The image and the first-comment link both use the existing `w_member_social`
  token** — no new scope. One caveat: LinkedIn's Comments API docs list a
  `w_member_social_feed` scope. If the link-comment ever returns `403`, the post
  and image still publish; add `w_member_social_feed` to the OAuth scopes,
  re-mint the token, and future runs will comment. Image and comment failures are
  logged and never abort the announcement.
- **No newsletters or long-form articles.** LinkedIn exposes no API to publish a
  newsletter or an article — those are UI-only. The Posts API "article" type is
  only a link-preview card, not a newsletter, so the workflow posts a normal
  image post with the link in the first comment.
- The job is pinned to the `hitezh/hitesh_in` repo so forks can't post.
