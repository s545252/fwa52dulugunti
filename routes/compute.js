var express = require('express');
var router = express.Router();
var storeValue;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams
      storeValue=Number(search_params.get("x"))
    
    if(storeValue == 0)
    storeValue=Math.random()
    
    res.write("Computes the values for Math.abs and math.acos function."+"\n")
    res.write('Math.atan2 applied to '+storeValue+" is "+Math.atan2(storeValue)+"\n");
    res.write('Math.atanh applied to '+storeValue+" is "+Math.atanh(storeValue)+"\n");
    res.end('Math.cbrt applied to '+storeValue+" is "+Math.cbrt(storeValue));
 });

module.exports = router;