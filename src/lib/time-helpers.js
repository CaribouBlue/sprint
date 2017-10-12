export const numberToTime = (num) => {
  const min = (Math.floor(num) + '').padStart(2, 0);
  const sec = num.toFixed(2).slice(-2);
  return min + ':' + sec;
};

export const parseInputTime = (orig, next) => {
  next = next.replace(/\D/g, '');
  return next.substr(0, 2) + ':' + next.substr(2, 2);
};

export const parseSubmitTime = (next) => {
  next = next.replace(/\D/g, '');
  if (next.length < 1)
    return '25:00';
  if(next.length < 2)
    next = '0' + next;
  next = next.padEnd(4, '0');
  return next.substr(0, 2) + ':' + next.substr(2, 2);
};