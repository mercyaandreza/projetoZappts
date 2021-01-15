const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get("/list", (req, res) => {
  const names = fs.readdirSync(path.resolve(__dirname, '..', 'database'), {encoding: 'utf-8'})
  let result = [];
  names.forEach((name) => {
    const filePath = path.resolve(__dirname, '..', `database/${name}`)

    const data = fs.readFileSync(filePath, { encoding: 'utf-8' })

    const content = JSON.parse(data)
    result.push(content)
  })
  return res.send(result)
});

module.exports = router;