const  express = require('express');
const app = express();
app.listen(3000, () => console.log("Listening at 3000"));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb'}));

let article;
app.post('/api',(request, response) => {
    article = request.body;
    console.log('I got a request!');
    console.log(article);
});

let articleGet;
app.get('/api',(request, response) => {
    articleGet = response.body;
    console.log('I got a request!');
    console.log(articleGet);
});
