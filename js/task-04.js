function longest(s1, s2) {
  const uniqeArr = [...new Set(s1.toLowerCase() + s2.toLowerCase())];
  return uniqeArr.sort().join("");
}

console.log(
  "longest('aretheyhere', 'yestheyarehere') ",
  longest("aretheyhere", "yestheyarehere")
);
console.log(
  'longest("loopingisfunbutdangerous", "lessdangerousthancoding") ',
  longest("loopingisfunbutdangerous", "lessdangerousthancoding")
);
console.log(
  'longest("inmanylanguages", "theresapairoffunctions") ',
  longest("inmanylanguages", "theresapairoffunctions")
);
