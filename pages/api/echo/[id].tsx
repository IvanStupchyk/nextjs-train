import {NextApiRequest, NextApiResponse} from 'next'

interface NextApiRequestProps extends NextApiRequest {
  query: {
    id: string
  }
}

export default function getById(req: NextApiRequestProps, res: NextApiResponse) {
  res.json({yourId: req.query.id})
}