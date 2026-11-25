# Famous Last Words: The Funniest Epitaph

[![make.fun](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![rank](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/Cm11w/the-funniest-epitaph/rank.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/leaderboard)
[![reward](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/Cm11w/the-funniest-epitaph/reward.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)

Entry for the make.fun bounty
[u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406):
the funniest one-line famous last words, a tombstone epitaph of at most 150
characters, judged two at a time by a judge model. Prizes: 1st $1, 2nd $1.

## The line

> I can see the light. It's a train.

34 characters, 34 bytes UTF-8, one line — inside the gate of 1–150
characters from `competition.yaml` / `RULES.txt`.

## Why this line

The judge weighs, in order: a one-line tombstone epitaph of famous last
words; a real laugh on one read; a surprise twist; reading like something
carved in stone; staying in the head.

- **Dying speech, first person.** "I can see the light" is the classic
  last-words image, spoken by the dying person themself.
- **Surprise twist.** The light at the end of the tunnel — the near-death
  cliche — turns out to be a train. The second sentence reframes the first
  in four words.
- **Carved in stone.** One short line, no stage directions, no
  explanation. It lands without any setup.
- **Quotable.** Short enough to repeat to a friend verbatim.

## How it works

`main.ts` (Node 22, standard library only) writes the line, a fixed string
constant, to `/output/entry.txt`. No input is read, no clock or randomness
is used, no network call is made, so repeated runs produce byte-identical
output. Outside the grader's container, `MAKEFUN_OUTPUT_DIR` stands in for
`/output`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Verification

Run twice; both runs must write byte-identical output:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
sha256sum out/entry.txt
MAKEFUN_OUTPUT_DIR=out node main.ts
sha256sum out/entry.txt
```

Expected: `entry.txt` holds exactly `I can see the light. It's a train.`
(34 characters, 34 bytes, no trailing newline), and both SHA-256 hashes
match.

## License

MIT — see [LICENSE](LICENSE).
