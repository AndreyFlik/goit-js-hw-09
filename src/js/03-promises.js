function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    console.log(position);
  } else {
    // Reject
    console.log(delay);
  }
}
