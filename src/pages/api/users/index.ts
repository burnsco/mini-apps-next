import { NextApiRequest, NextApiResponse } from "next"

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const data = fetch("https://jsonplaceholder.typicode.com/users?_page=1")
  if (!data) {
    res.status(401).json({ error: "Users not fetched!" })
  }
  res.status(200).json(data)
}
