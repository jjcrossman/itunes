angular.module('itunes').controller('mainCtrl', function($scope, itunesService){

  function init() {
    $scope.songData;
  };

  $scope.gridOptions = {
      data: 'songData',
      height: '110px',
      sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
      columnDefs: [
        {field: 'Play', displayName: 'Play', width: '50px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
        {field: 'TrackName', displayName: 'Track'},
        {field: 'Artist', displayName: 'Artist'},
        {field: 'Collection', displayName: 'Collection'},
        {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
        {field: 'Type', displayName: 'Type'},
        {field: 'TrackPrice', displayName: 'Price'},
        {field: 'CollectionPrice', displayName: 'Album Price'},
      ]
  };


$scope.getSongData = function ( artist ) {
  itunesService.getSongData( artist )
    .then( function ( artistDataRetrieved ) {
      console.log ( artistDataRetrieved );
      $scope.songData = artistDataRetrieved;
    } );
};

init();


});
