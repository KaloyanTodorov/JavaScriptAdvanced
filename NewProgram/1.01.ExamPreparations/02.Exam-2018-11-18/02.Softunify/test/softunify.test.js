let SoftUniFy = require('softunify');
let { assert } = require('chai');

describe('Testing SoftUniFy class', function () {
    describe('testing constructor and initialization'), function () {
        it('should return empty object if no songs in it', function () {
            let library = new SoftUniFy();
            let songs = library.allSongs

            assert.deepEqual(songs, {});
        });
    }

    describe('testing downloadSong(artist, song, lyrics)', function () {
        it('should work properly if correct input is passed', function () {
            let library = new SoftUniFy();
            library.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            let test = { Eminem: { rate: 0, votes: 0, songs: [ 'Venom - Knock, Knock let the devil in...']}}

            assert.deepEqual(library.allSongs, test);
        });


    })
})