const isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false; // If lengths does not match it can't be a isomorphic strings
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      let valueStored = map.get(s[i]);
      if (valueStored !== t[i]) return false; // If stored value is diffrent than current replacement value return false
    } else {
      const alreadyHasValue = [...map.values()].includes(t[i]);
      if (alreadyHasValue) return false; // If any of the value has t[i] or replacement then that is also not possible

      map.set(s[i], t[i]); // If the replacement value does not exists then only add the key and value to the map
    }
  }

  return true; // If all the conditions passed then only it will be isomorphic so return true
};

console.log(isIsomorphic("egg", "add"));
