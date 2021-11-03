

import nc from 'next-connect'
import { normalizeRepeatedSlashes } from 'next/dist/shared/lib/utils'
import articles from '../../../middleware/data'

const handler = nc()
    .post((req, res) => {
        const article = {
            ... req.body,
            id: Date.now()
        }

        articles.push(article)
        res.json({data: article})
    })
    .get((req, res) => {
        res.json({data: articles})
    })



export default handler