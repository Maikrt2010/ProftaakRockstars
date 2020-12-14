const  express = require('express');
const app = express();
app.listen(3000, () => console.log("Listening at 3000"));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb'}));

app.get('/css/style.css', function(request,response){
    response.sendFile(__dirname + '/css/style.css');
});

app.get('/css/article.css', function(request,response){
    response.sendFile(__dirname + '/css/article.css');
});

app.get('/css/tags-input.css', function(request,response){
    response.sendFile(__dirname + '/css/tags-input.css');
});

let article;
app.post('/api',(request, response) => {
    article = request.body;
    console.log('I got a request!');
    console.log(article);
});

