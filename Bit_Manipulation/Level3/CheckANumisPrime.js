const checkANumisPrime = (num) => {
  if (num <= 1) return false;
  let count = 0;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) count++;
    if (count > 1) break;
  }

  if(count >= 1) return false;
  return true;
};

console.log(checkANumisPrime(36));
console.log(checkANumisPrime(31));
``