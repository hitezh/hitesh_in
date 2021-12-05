---
title: "Stemming transliterated Hindi"
date: "2012-03-29"
categories: 
  - "technology"
tags: 
  - "hindi"
  - "hinglish"
  - "regex"
  - "stemming"
---

I needed a library which could [stem](http://en.wikipedia.org/wiki/Word_stem "stem definition on wikipedia") Hindi words written in roman script ([transliterated](http://en.wikipedia.org/wiki/Transliterate)), but could not find one.

My search took me to [Lucene's HindiStemmer](https://svn.apache.org/repos/asf/lucene/dev/trunk/modules/analysis/common/src/java/org/apache/lucene/analysis/hi/HindiStemmer.java), which in turn led me to the paper by Ananthakrishnan Ramanathan and Durgesh D Rao: [A Lightweight Stemmer for Hindi \[PDF\]](http://computing.open.ac.uk/Sites/EACLSouthAsia/Papers/p6-Ramanathan.pdf). It was a good initiation to how some simple rules could stem most Hindi words. The problem was, it was for words written in Devanagari script not Roman. So I decided to implement the logic for transliterated Hindi. After some refinement, I ended up a large subset of what the paper does, because I wanted to keep the implementation simple.

At the end of a few hours work over a few days, I ended up with one line of code. _(I will be paid almost nothing if I were being paid by KLOC written)_

```
re.sub(r'(.{2,}?)([aeiougyn]+$)',r'\1', word)
```

For people who are regex challenged, the above regex, deletes all vowels along with g,y,n from the end of the word, but leaves at least a 2 character long stem, so that words like 'aayenga' do not completely vanish.

The above regex will stem the words as below:

| Input word | Stemmed word |
| --- | --- |
| Dost_i_ | Dost |
| Dost_on_ | Dost |
| Bol_iye_ | Bol |
| Bol_ungi_ | Bol |
| Bol_a_ | Bol |
| Ja_na_ | Ja |
| Ja_enge_ | Ja |

What do you think? How could this be improved? What edge cases are not considered?
