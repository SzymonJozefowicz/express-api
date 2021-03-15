const express = require('express')
const app = express()
const port = 3000

var router = express.Router();              // get an instance of the express Router
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ response: 'COUNTRY' });   
});
app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

