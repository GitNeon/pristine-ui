export function chunkList(list: any[], chunkSize: number) {
  const result = [];
  for (let i = 0; i < list.length; i += chunkSize) {
    const chunk = list.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}
