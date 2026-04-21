# Post-deploy SEO checklist

After this commit ships to production, complete the following in order. Most
take 5–15 minutes each. The whole list is a half-day of work and will produce
the largest single SEO uplift you can get from your seat alone.

## 1. Claim the search consoles (do first)

- [ ] **Google Search Console** — https://search.google.com/search-console
  - Add property: `https://lilitu.org`
  - Verify via DNS TXT record OR via meta tag.
  - For meta tag verification: copy the `content="..."` value, set as
    `NEXT_PUBLIC_GOOGLE_VERIFICATION` in Vercel project env. Redeploy.
  - Submit sitemap: `https://lilitu.org/sitemap.xml`
- [ ] **Bing Webmaster Tools** — https://www.bing.com/webmasters
  - Same flow. Set `NEXT_PUBLIC_BING_VERIFICATION` in Vercel.
  - Submit sitemap.
- [ ] **Ahrefs Webmaster Tools** (free) — https://ahrefs.com/webmaster-tools
  - Verify, then enable backlink monitoring.
- [ ] **DuckDuckGo** — DDG aggregates from Bing, so once Bing is verified
      DDG follows.

## 2. Validate structured data

- [ ] **Google Rich Results Test** — https://search.google.com/test/rich-results
      Enter `https://lilitu.org`, then `/lilitu`, `/faq`, `/lattice`, `/letters/aleph`.
      Each should show recognized schema (FAQPage, Article, Organization, Person, Book, WebApplication).
- [ ] **Schema.org Validator** — https://validator.schema.org
      Same URLs. Confirms no errors.
- [ ] **Wikidata Reasonator** (after Wikidata entry filed) —
      https://reasonator.toolforge.org/?q=Q...

## 3. Submit to AI search engines explicitly

- [ ] **Bing IndexNow** — Bing-aware tools (most CDNs support; Vercel via plugin) ping IndexNow on every deploy.
      Free + automatic + accelerates indexing in Bing/Yandex/Naver. Vercel
      doesn't ship it natively; can be added if traffic warrants.
- [ ] **OpenAI** — does not have a manual submit; we already allow GPTBot and
      OAI-SearchBot in robots.ts. Check ChatGPT in 2-4 weeks: ask "what is
      Lilitu?" and see whether lilitu.org is cited.
- [ ] **Perplexity** — same; check `perplexity.ai` for "Lilitu" and "high
      priest of lilith" queries in 2-4 weeks.

## 4. File the Wikidata entry

See `docs/seo/wikidata-draft.md`. Single highest-leverage move on this list
for AI search visibility.

## 5. Begin outreach

See `docs/seo/outreach.md`. Tier 1 podcasts + Academia.edu essay first.

## 6. Monitor and iterate

After 4 weeks:

- [ ] Check Search Console: which queries are bringing impressions? Which pages?
      Optimize titles/descriptions for high-impression / low-CTR queries.
- [ ] Check rank for target queries: `lilitu`, `lilitu meaning`, `high priest
      of lilith`, `liber lilith`, `os lamia`, `mirror doctrine lilith`.
- [ ] Check AI citations: ask ChatGPT/Claude/Perplexity/Gemini "what is
      Lilitu?" and "who is Os Lamia?" — note when lilitu.org first appears
      as a cited source.

## Realistic timeline

- **Week 1**: Search consoles claimed; sitemap submitted; structured data
  validated. Pages start being crawled.
- **Week 2-4**: Pages indexed. First impressions in Search Console. Some
  ranking begins for low-competition long-tail queries (e.g., "obsidian bride
  weaving", "liber umbrarum lilith").
- **Month 2-3**: Wikidata entry live, first podcast appearance landed,
  Academia.edu essay indexed. Brand queries (`os lamia`, `lilitu org`) start
  ranking #1. Long-tail letter-station queries start ranking.
- **Month 4-6**: AI citation begins. lilitu.org appears in ChatGPT/Perplexity
  answers for "what is lilitu" type queries. Top 30 for `lilitu` head term.
- **Month 6-12**: Top 10 for `lilitu`. Top 1-3 for `high priest of lilith`,
  `mirror doctrine`, `black water current`, `liber umbrarum`. Knowledge Panel
  candidacy if Wikidata + secondary sources accumulated.

#1 for `lilitu` head term is reachable by month 12-18 if outreach holds; #1
position is held by Wikipedia and is unrealistic. #2-3 with consistent
citation is the realistic upper bound.
