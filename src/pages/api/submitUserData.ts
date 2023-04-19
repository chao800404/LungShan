// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const userData = req.body

      res.status(200).json({
        success: true,
      })
    } catch (err) {
      res.status(400).json({
        success: false,
      })
    }
  }
}
