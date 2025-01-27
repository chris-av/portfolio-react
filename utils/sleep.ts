export default function(seconds: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, seconds * 1000)
  });
}
