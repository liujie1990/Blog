require('@babel/polyfill');
const elements = [1, 2, 3].map((item) => item * 2);

console.log(elements);

async function a() {
  console.log('begin');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
  console.log('done');
}
a();

console.log(Object.values({ 1: 2 }));

console.log(Array.isArray([]));