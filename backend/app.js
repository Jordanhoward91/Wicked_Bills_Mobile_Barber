const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require('./models/post');

const app = express();

<<<<<<< HEAD
mongoose.connect("mongodb+srv://Max:KLeoWx0ycoFH87rz@cluster0.qld5u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
=======
mongoose.connect("mongodb+srv://Max:KLeoWx0ycoFH87rz@cluster0.qld5u.mongodb.net/node-angular?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });
>>>>>>> 9d174d5e5414ba80b8f31a30d694de365e55a65f

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept"
    );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app. post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
<<<<<<< HEAD
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "ainfkeanfk516513",
      title: "First server-side post",
      content: "This is coming from the server"
    },
    {
      id: "agagerafea123165",
      title: "Second server-side post",
      content: "This is coming from the server!"
    }
  ];
  res.status(200).json({
    message: 'Post fetched successfully!',
    posts: posts
=======
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully",
      postId: createdPost._id
    });
  });
});

app.get('/api/posts', (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: 'Post fetched successfully!',
      posts: documents
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({ message: 'Post deleted!' });
>>>>>>> 9d174d5e5414ba80b8f31a30d694de365e55a65f
  });
});

module.exports = app;
