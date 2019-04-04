var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"},

          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  // var numofTracks = library["playlists"]["p01"]["tracks"].length;
  // var nameofPlay = library["playlists"]["p01"]["name"];
  // var idOfPlay = library["playlists"]["p01"]["id"];
  var x = library["playlists"];
  for ( var playlistId in x ){
    var id = x[playlistId]["id"];
    var name = x[playlistId]["name"];
    var numofTracks = x[playlistId]["tracks"].length;

    console.log(id,":",name,"-",numofTracks,"tracks" )
  }
  return ""
}

// console.log(printPlaylists());

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var x = library["tracks"];

  for ( var trackId in x ){
    var id = x[trackId]["id"];
    var name = x[trackId]["name"];
    var artist = x[trackId]["artist"];
    var album = x[trackId]["album"];


    console.log(id,":",name,"by",artist,"(",album,")");
  }
  return "";
}


// console.log(printTracks());



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var x = library["playlists"]
  var id = x[playlistId]["id"];
  var name = x[playlistId]["name"];
  var tracks = x[playlistId]["tracks"]
  var numofTracks = x[playlistId]["tracks"].length;
  console.log(id,":",name,"-",numofTracks,"tracks" )

  for (var i = 0; i < tracks.length; i++) {
    // console.log(tracks[i]);

    var id = library["tracks"][tracks[i]]["id"];
    var name = library["tracks"][tracks[i]]["name"];
    var artist = library["tracks"][tracks[i]]["artist"];
    var album = library["tracks"][tracks[i]]["album"];


    console.log(id,":",name,"by",artist,"(",album,")");
    }
    return ""
}

// console.log(printPlaylist("p01"));


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
 library["playlists"][playlistId]["tracks"].push(trackId);


}
 addTrackToPlaylist("t02", "p02");
console.log(library["playlists"]["p02"]);


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var uniID = uid();

  library["tracks"][uniID] = {};
  library["tracks"][uniID]["id"]  = uniID;
  library["tracks"][uniID]["name"]  = name;
  library["tracks"][uniID]["artist"]  = artist;
  library["tracks"][uniID]["album"]  = album;

}
// addTrack("A","B","C");
// console.log(library["tracks"])

// adds a playlist to the library

var addPlaylist = function (name) {
 var uniID = uid();

 library["playlists"][uniID] = {};
 library["playlists"][uniID]["id"]  = uniID;
 library["playlists"][uniID]["name"]  = name;
}

// addPlaylist("A");
// addPlaylist("ert");
// console.log(library["playlists"]);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}