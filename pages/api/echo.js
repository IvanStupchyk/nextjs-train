import React from 'react'

export default function echo(req, res) {
  res.statusCode = 200
  res.setHeader('content-Type', 'application/json')
  res.end(JSON.stringify({
    message: req.query.message ?? 'Base message'
  }))
}