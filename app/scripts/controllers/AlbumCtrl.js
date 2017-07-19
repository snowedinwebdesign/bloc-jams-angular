(function() {
    function AlbumCtrl(Fixtures) {
        this.albumData = Fixture.getAlbum();
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();