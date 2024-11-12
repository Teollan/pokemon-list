export default function fetchMockData(offset: number, limit: number) {
  const data = new Array(limit);

  for (let i = 0; i < limit; i++) {
    data[i] = offset + i;
  }

  console.log(`fetching data from ${offset} to ${offset + limit}`);

  return new Promise<number[]>((res) => {
    setTimeout(() => {
      res(data);
    }, 3000);
  });
}
