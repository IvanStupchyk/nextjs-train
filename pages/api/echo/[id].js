export default function getById(req, res) {
  // res.statusCode = 200
  // res.setHeader('content-Type', 'application/json')
  // res.end(JSON.stringify(req.query.id))
  res.json({yourId: req.query.id})
}