const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create a Playlist schema
const playlistSchema = new Schema({
    name: String,
    songs: [
      {
        title: String,
        artist: String,
        duration: String // e.g., "3:45"
      }
    ]
  });
  
  const Playlist = mongoose.model('Playlist', playlistSchema);
  module.exports = Playlist;