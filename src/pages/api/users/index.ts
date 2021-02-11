export default async function handler(req: any, res: any) {
  const data = await fetch("https://jsonplaceholder.typicode.com/users?_page=1")

  res.status(200).json(data)
}
