let SoftUniFy = require('../softunify');
let { assert } = require('chai');

describe('Testing SoftUniFy class', function () {

    describe('testing constructor and initialization', function () {
        it('should return empty object if no songs in it', function () {
            let library = new SoftUniFy();
            let songs = library.allSongs

            assert.deepEqual(songs, {});
        });
    })

    describe('testing downloadSong(artist, song, lyrics)', function () {
        it('should work properly if correct input is passed', function () {
            let library = new SoftUniFy();
            library.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            let test = { Eminem: { rate: 0, votes: 0, songs: [ 'Venom - Knock, Knock let the devil in...']}}

            assert.deepEqual(library.allSongs, test);
        });

        it('should work correctly for more than 1 songs of 1 artist passed', function () {
            let library = new SoftUniFy();
            library.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');

            library.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            let test = { Eminem: { rate: 0, votes: 0, songs: [ 'Venom - Knock, Knock let the devil in...', 'Phenomenal - IM PHENOMENAL...' ]}};

            assert.deepEqual(library.allSongs, test);
        });

        it('should work correctly for 1 song from 2 artists each passed', function () {
            let library = new SoftUniFy();
            library.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');

            library.downloadSong('Dub FX', 'Phenomenal', 'IM PHENOMENAL...');
            let test = { Eminem: { rate: 0, votes: 0, songs: [ 'Venom - Knock, Knock let the devil in...']},  'Dub FX': { rate: 0, votes: 0, songs: [ 'Phenomenal - IM PHENOMENAL...' ]}};

            assert.deepEqual(library.allSongs, test);
        });

        it('should work correctly for more than 1 song from 2 artists each passed', function () {
            let library = new SoftUniFy();
            library.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            library.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');

            library.downloadSong('Dub FX', 'Venom', 'Knock, Knock let the devil in...');
            library.downloadSong('Dub FX', 'Phenomenal', 'IM PHENOMENAL...');
            let test = { Eminem: { rate: 0, votes: 0, songs: [ 'Venom - Knock, Knock let the devil in...', 'Phenomenal - IM PHENOMENAL...' ]},  'Dub FX': { rate: 0, votes: 0, songs: [ 'Venom - Knock, Knock let the devil in...', 'Phenomenal - IM PHENOMENAL...' ]}};

            assert.deepEqual(library.allSongs, test);
        });

        it('should work properly if empty strings are passed', function () {
            let library = new SoftUniFy();
            library.downloadSong('', '', '');
            let test = { '': { rate: 0, votes: 0, songs: [ ' - ']}}

            assert.deepEqual(library.allSongs, test);
        });

        it('should work properly if objects are passed', function () {
            let library = new SoftUniFy();
            library.downloadSong({} , '', '');
            let test = { '[object Object]': { rate: 0, votes: 0, songs: [ ' - ']}}

            assert.deepEqual(library.allSongs, test);

            let library1 = new SoftUniFy();
            library1.downloadSong('' , {}, '');
            let test1 = { '': { rate: 0, votes: 0, songs: [ '[object Object] - ']}}

            assert.deepEqual(library1.allSongs, test1);

            let library2 = new SoftUniFy();
            library2.downloadSong('' , '', {});
            let test2 = { '': { rate: 0, votes: 0, songs: [ ' - [object Object]']}}

            assert.deepEqual(library2.allSongs, test2);
        });
    })
    
    describe('testing playSong(song)', function () {
        it('should return correct Artist and song lyrics', function () {
            let sofunifyTest = new SoftUniFy();
            sofunifyTest.downloadSong('Eminem', 'Venom', 'teste test test ');
            sofunifyTest.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            sofunifyTest.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
            let test = sofunifyTest.playSong('Venom');
            let result = "Eminem:\n" + "Venom - teste test test \n";

            assert.equal(test, result);
        });

        it('should return correct song when the same name appears more than once', function () {
            let sofunifyTest = new SoftUniFy();
            sofunifyTest.downloadSong('Eminem', 'Venom', 'teste test test ');
            sofunifyTest.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            sofunifyTest.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
            sofunifyTest.downloadSong('Test', 'Venom', 'tova e test');
            let test = sofunifyTest.playSong('Venom');
            let result = "Eminem:\n" + "Venom - teste test test \n" + "Test:\n" + "Venom - tova e test\n";

            assert.equal(test, result);
        });

        it('should return correct song when the same name appears more than once from one artist', function () {
            let sofunifyTest = new SoftUniFy();
            sofunifyTest.downloadSong('Eminem', 'Venom', 'teste test test ');
            sofunifyTest.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            sofunifyTest.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
            sofunifyTest.downloadSong('Eminem', 'Venom', 'tova e test nomer 2');

            let test = sofunifyTest.playSong('Venom');
            let result = "Eminem:\n" + "Venom - teste test test \n" + "Venom - tova e test nomer 2\n";

            assert.equal(test, result);
        });

        it('should return Message if no songs in library', function () {
            let newLibrary = new SoftUniFy();
            let test = newLibrary.playSong('Maina maina');

            assert.equal(test, "You have not downloaded a Maina maina song yet. Use SoftUniFy's function downloadSong() to change that!");
        });

        it('should return Message if song is not found in library', function () {
            let newLibrary = new SoftUniFy();
            newLibrary.downloadSong('tes', 'test', "test test test");
            let test = newLibrary.playSong('Maina maina');

            assert.equal(test, "You have not downloaded a Maina maina song yet. Use SoftUniFy's function downloadSong() to change that!");
        });
    })

    describe('testing songsList()', function () {
        it('should return correct list of downloaded songs', function () {
            let newLibrary = new SoftUniFy();
            newLibrary.downloadSong('tes', 'test', "test test ");
            newLibrary.downloadSong('test2', 'test4', "test test st");
            newLibrary.downloadSong('test3', 'test5', "test test t");

            let test = newLibrary.songsList;
            let result = "test - test test \n" + "test4 - test test st\n" + "test5 - test test t";
            assert.equal(test, result);
        });

        it('should return correct list of if only 1 downloaded songs', function () {
            let newLibrary = new SoftUniFy();
            newLibrary.downloadSong('tes', 'test', "test test ");

            let test = newLibrary.songsList;
            let result = "test - test test ";
            assert.equal(test, result);
        });

        it('should return message if no downloaded songs', function () {
            let newLibrary = new SoftUniFy();

            let test = newLibrary.songsList;
            let message = "Your song list is empty";
            assert.equal(test, message);
        });
    })
})

describe('Testing SoftUniFy class with beforeEach in the describe', function () {

    describe('Testing playSong(song) with beforeEach', function () {

        let beforeEachTest;
        beforeEach(function () {
            beforeEachTest = new SoftUniFy();
            beforeEachTest.downloadSong('Eminem', 'Venom', 'teste test test ');
            beforeEachTest.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...')
            beforeEachTest.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

        })

        it('should return correct Artist and song lyrics', function () {
            let test = beforeEachTest.playSong('Venom');
            let result = "Eminem:\n" + "Venom - teste test test \n";

            assert.equal(test, result);
        });

        it('should return correct song when the same name appears more than once', function () {
            beforeEachTest.downloadSong('Test', 'Venom', 'tova e test');
            let test = beforeEachTest.playSong('Venom');
            let result = "Eminem:\n" + "Venom - teste test test \n" + "Test:\n" + "Venom - tova e test\n";

            assert.equal(test, result);
        });

        it('should return correct song when the same name appears more than once from one artist', function () {
            beforeEachTest.downloadSong('Eminem', 'Venom', 'tova e test nomer 2');

            let test = beforeEachTest.playSong('Venom');
            let result = "Eminem:\n" + "Venom - teste test test \n" + "Venom - tova e test nomer 2\n";

            assert.equal(test, result);
        });
    })
})

describe('Testing SoftUniFy class with beforeEach globally', function () {

    let beforeEachTest;
    beforeEach(function () {
        beforeEachTest = new SoftUniFy();
        beforeEachTest.downloadSong('Eminem', 'Venom', 'teste test test ');
        beforeEachTest.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...')
        beforeEachTest.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

    })

    describe('Testing playSong(song) with beforeEach', function () {

        it('should return correct Artist and song lyrics', function () {
            let test = beforeEachTest.playSong('Venom');
            let result = "Eminem:\n" + "Venom - teste test test \n";

            assert.equal(test, result);
        });

        it('should return correct song when the same name appears more than once', function () {
            beforeEachTest.downloadSong('Test', 'Venom', 'tova e test');
            let test = beforeEachTest.playSong('Venom');
            let result = "Eminem:\n" + "Venom - teste test test \n" + "Test:\n" + "Venom - tova e test\n";

            assert.equal(test, result);
        });

        it('should return correct song when the same name appears more than once from one artist', function () {
            beforeEachTest.downloadSong('Eminem', 'Venom', 'tova e test nomer 2');

            let test = beforeEachTest.playSong('Venom');
            let result = "Eminem:\n" + "Venom - teste test test \n" + "Venom - tova e test nomer 2\n";

            assert.equal(test, result);
        });
    })
})

