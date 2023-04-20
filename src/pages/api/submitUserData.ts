// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sendMessageToLineNotify } from '@/utils/sendLine'

type Data = {
  success: boolean
}

type UserData = Record<
  | 'username'
  | 'userphone'
  | 'useremail'
  | 'service'
  | 'price'
  | 'legalAge'
  | 'userdescription',
  string
>

const transferData = ({
  username,
  userphone,
  useremail,
  service,
  price,
  legalAge,
  userdescription,
}: UserData) => {
  return `\n客戶名稱: ${username}\n客戶信箱: ${useremail}\n客戶電話: ${userphone}\n服務項目: ${service}\n預期借款金額: ${price}\n已成年: ${legalAge}\n客戶描述: ${userdescription}`
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
        transferData({ ...userData })
      )

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
