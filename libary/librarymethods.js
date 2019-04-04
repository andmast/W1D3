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
             },
  printPlaylists: function () {
      // var numofTracks = library["playlists"]["p01"]["tracks"].length;
      // var nameofPlay = library["playlists"]["p01"]["name"];
      // var idOfPlay = library["playlists"]["p01"]["id"];
      var x = this.playlists;
      for ( var playlistId in x ){
        var id = x[playlistId]["id"];
        var name = x[playlistId]["name"];
        var numofTracks = x[playlistId]["tracks"].length;

        console.log(id,":",name,"-",numofTracks,"tracks" )
      }
      return ""
    },
  printTracks: function () {
      var x = this.tracks;

      for ( var trackId in x ){
        var id = x[trackId]["id"];
        var name = x[trackId]["name"];
        var artist = x[trackId]["artist"];
        var album = x[trackId]["album"];


        console.log(id,":",name,"by",artist,"(",album,")");
      }
      return "";
    },
  printPlaylist: function (playlistId) {
    var x = this.playlists
    var id = x[playlistId]["id"];
    var name = x[playlistId]["name"];
    var tracks = x[playlistId]["tracks"]
    var numofTracks = x[playlistId]["tracks"].length;
    console.log(id,":",name,"-",numofTracks,"tracks" )

    for (var i = 0; i < tracks.length; i++) {
      // console.log(tracks[i]);

      var id = this.tracks[tracks[i]]["id"];
      var name = this.tracks[tracks[i]]["name"];
      var artist = this.tracks[tracks[i]]["artist"];
      var album = this.tracks[tracks[i]]["album"];


      console.log(id,":",name,"by",artist,"(",album,")");
    }
    return ""
},
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId]["tracks"].push(trackId);
},
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},
  addTrack: function (name, artist, album) {
    var uniID = this.uid();

    this.tracks[uniID] = {};
    this.tracks[uniID]["id"]  = uniID;
    this.tracks[uniID]["name"]  = name;
    this.tracks[uniID]["artist"]  = artist;
    this.tracks[uniID]["album"]  = album;

  },
  addPlaylist: function (name) {
   var uniID = this.uid();

   this.playlists[uniID] = {};
   this.playlists[uniID]["id"]  = uniID;
   this.playlists[uniID]["name"]  = name;
  },


}












