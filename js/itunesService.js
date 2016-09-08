angular.module('itunes').service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also note that we're using a 'service' and not a 'factory' so all your methods you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in.
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here
    this.getSongData = function ( artistName ) {
      return $http.jsonp( 'https://itunes.apple.com/search?term=' + artistName + '&callback=JSON_CALLBACK' )
      .then( function ( response ) {
          var parse = response.data.results;
          var artistData = conformData( parse );
          return artistData;
      } )

     };

     function conformData ( arrayOfObj ) {
       var artistData = [];
      arrayOfObj.forEach( function ( songObj ) {
        var obj = {
          Artist: songObj.artistName
          , AlbumArt: songObj.artworkUrl100
          , Collection: songObj.collectionName
          , CollectionPrice: songObj.collectionPrice
          , Play: songObj.previewUrl
          , Type: songObj.kind
          , TrackName: songObj.trackName
          , TrackPrice: songObj.trackPrice
        };
        artistData.push( obj );
      } );
      return artistData;
    };


     /*
       AlbumArt: "http://a3.mzstatic.com/us/r30/Features4/v4/22/be/30/22be305b-d988-4525-453c-7203af1dc5a3/dj.srlprmuo.100x100-75.jpg"
       Artist: "Nelly"
       Collection: "Nellyville"
       CollectionPrice: 11.99
       Play: "http://a423.phobos.apple.com/us/r1000/013/Music4/v4/4a/ab/7c/4aab7ce2-9a72-aa07-ac6b-2011b86b0042/mzaf_6553745548541009508.plus.aac.p.m4a"
       Type: "song"
   */

});
