export const sleep = async (ms: number = 100) =>
  new Promise(done => window.setTimeout(done, ms));

