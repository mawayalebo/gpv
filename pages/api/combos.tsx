import type { NextApiRequest, NextApiResponse } from 'next'

type s = Array<
    {
        Name: string,
        s: Array<string>
    }
>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<s>
) {
  res.status(200).json(
      [
          {
                Name: ' 1',
                s: ['Company Registration', 'Tax Clearance', 'BBBEE', 'CSD Registration', 'Share certificate', 'Bank Account']
          },
          {
            Name: ' 2',
            s: ['Company Registration', 'Tax Clearance', 'BBBEE', 'CSD Registration', 'Share certificate', 'Bank Account', 'Visual Landline', 'Basic website & Hosting']
        }
      ]
  )
}
