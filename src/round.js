export default function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
};
