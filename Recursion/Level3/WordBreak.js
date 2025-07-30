const wordBreak = function (s, wordDict) {
  const words = new Set(wordDict),
    starts = new Set([0]);

  for (const start of starts) {
    for (const word of words) {
      const end = start + word.length;
      if (words.has(s.slice(start, end))) starts.add(end);
    }
  }

  return starts.has(s.length);
};

console.log("leetcode", ["leet", "code"]);
