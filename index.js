
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.urlencoded({extended: true}))
  .get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
  })
  .get('/configuremenu', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/configuremenu.html'));
  })
  .get('/api/entrees', function(req, res) {
    res.json(entreeList); 
  })
  .delete('/api/entrees/:id', function(req, res) {
    let arr = []
    for (var i = 0; i < entreeList.length; i++) {
      if (req.params.id != entreeList[i].id) {
        arr.push(entreeList[i]);
      }
    }
    entreeList = arr;
    res.sendStatus(204);
  })
.post('/api/entrees/', function(req, res) {
    console.log(req.body)
  })
.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  var entreeList = [{ id: "chickenfriedsteak", name: "Chicken Fried Steak"},
  { id: "ribeyesteak", name: "Ribeye Steak"},
  { id: "baconlettucetomatosandwich", name: "Bacon Lettuce and Tomato"},
  { id: "lentilsoup", name: "Lentil Soup"}
];