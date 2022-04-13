const express = require('express')
const bodyParser = require('body-parser');
const req = require('express/lib/request');
const app = express()
let port = 3000
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

title = []
paragraph = []

app.get('/',(req,res)=>{
    res.render('index',{para:title,art:paragraph})
})

app.post('/',(req,res)=>{
    title1 = req.body.titlepara
    title.push(title1)
    art = req.body.paramk
    paragraph.push(art)
    
    // Object.assign(data, {data1});

    res.redirect('/')
})



app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
  });
  