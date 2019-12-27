const arr = [Promise1, Promise2];

arr.forEach(item => {
  // 비동기 불가
});

for (const item of arr) {
  // 비동기 코드 가능
}
