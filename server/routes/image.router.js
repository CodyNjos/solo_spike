const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
console.log(process.env.REACT_APP_FILESTACK_API_KEY)

router.get('/', (req, res) => {

  const query = `SELECT * FROM images`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all images', err);
      res.sendStatus(500)
    })

});



router.post('/', (req, res) => {
    const img = req.body
    const queryText = `INSERT INTO "images" ("name", "img_url")
    VALUES ($1, $2)`
    pool.query(queryText, [img.name, img.image_url])
        .then(result => {
            console.log(result)
            res.sendStatus(500)
        })
})
module.exports = router;