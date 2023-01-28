const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// remove this to use the view engine
// app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

//prior for just returning 
// app.get('/', (req, res) => {
  //   res.send('raw string that should be json');
  // });
  
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Welcome to Merapi EJS',
    data: ['a', 'b', 'c']
  });
});
  
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});