// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { transferUserData, sendMessageToLineNotify } from '@/utils'
import { SendMail } from './sendMail'

type Data = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const userData = JSON.parse(req.body)
      await sendMessageToLineNotify(
        process.env.LINE_NOTIFY_KEY as string,
        transferUserData({ ...userData })
      )

      await SendMail({ ...userData })

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
