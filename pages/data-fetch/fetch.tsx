export async function getData(url: string) {
  const res = await fetch(url)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json()
}
