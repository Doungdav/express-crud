const { connect } = require('http2');

const app = require('express')();
const http = require('http').Server(app);
const express = require('express');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://doungdav3:GXfwMptkShwwkxCB@esther0.uup9z.mongodb.net/?retryWrites=true&w=majority&appName=Esther0');

//const User = require('./models/userModel');
//const Playlist = require('./models/playlistModel');

const userRoutes = require('./routes/userRoutes');
const playlistRoutes = require('./routes/playlistRoutes');

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/playlists', playlistRoutes);



http.listen(5000, function(){
    console.log('Connected!');
});