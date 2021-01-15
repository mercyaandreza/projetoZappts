const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post("/letter", (request, response) => {
    const data = request.body;

    fs.writeFile(path.resolve(__dirname, '..', `database/${data.name}.json`), JSON.stringify(data), (err) => {
      if(err) {
      console.log(err);
      } else {
        console.log("The file was saved!");
      }
    }); 

    return response.status(200).send('OK');
});

module.exports = router;