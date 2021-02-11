export default function handler(req: any, res: any) {
  const data = fetch("https://jsonplaceholder.typicode.com/users?_page=1")

  res.status(200).json(data)
}
