const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const keys = require('./config/keys');
require('./models/blogs');

mongoose.connect(keys.mongoURI)

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const BlogPost = mongoose.model('blogPosts');
// Express routes here
app.get('/api', (req, res) => {
    // new BlogPost({
    //     title:'test',
    //     content:'testing stuff jsut like that'
    // }).save()
    
    BlogPost.find(function (err, blog) {
        if (err) return console.error(err);
        res.send(blog)
      })
})

// Client routes here, any route if not defined by Express search here
if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    // Express will serve up index.html 
    // if it doesn't recongnize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

