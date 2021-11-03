import nc from 'next-connect'
import articles from '../../../data/data'

const getArticle = id => articles.find(n => n.id === parseInt(id))

const handler = nc()
  .get((req, res) => {
    
    const article = getArticle(req.query.id)

    if (!article) {
      res.status(404)
      res.end()
      return
    }

    res.json({data: article})
  })
  .patch((req, res) => {
    const article = getArticle(req.query.id)

    if (!article) {
      res.status(404)
      res.end()
      return
    }
    
    const i = articles.findIndex(n => n.id === parseInt(req.query.id))
    const updated = {...article, ...req.body}

    articles[i] = updated
    res.json({data: updated})
  })
  .delete((req, res) => {
    const article= getArticle(req.query.id)

    if (!article) {
      res.status(404)
      res.end()
      return
    }
    const i = articles.findIndex(n => n.id === parseInt(req.query.id))
    
    articles.splice(i, 1)

    res.json({data: req.query.id})
  })
  

export default handler