let FilmStudio = require('../filmStudio');
let {assert} = require('chai');

describe('Testing FilmStudio', function () {
    describe('Testing constructor', function () {
        it('should create a studi with correct name', function () {
            let studio = new FilmStudio('test');

            assert.equal(studio.name, 'test');
        });
    });

    describe('Testing makeMovie(filmName, roles)', function () {
        let studio;
        beforeEach(function () {
            studio = new FilmStudio();
        })

        it('should create film', function () {
            let movie = studio.makeMovie('test', ['test', 'test2']);
            let result = { filmName: 'test',
                filmRoles:
                    [ { role: 'test', actor: false },
                        { role: 'test2', actor: false } ] };

            assert.deepEqual(movie, result);
        });

        it('should create sequel', function () {
            studio.makeMovie('test', ['test']);
            let sequel = studio.makeMovie('test', ['test', 'Test2']);

            let result = { filmName: 'test 2',
                filmRoles:
                    [ { role: 'test', actor: false }, { role: 'Test2', actor: false } ] };

            assert.deepEqual(sequel, result);
        });

        it('should create film with 1 actor', function () {
            let movie = studio.makeMovie('test', ['test']);
            let result = { filmName: 'test',
                filmRoles:
                    [ { role: 'test', actor: false } ] };

            assert.deepEqual(movie, result);
        });

        it('should throw error if less than 1 parameter is passed', function () {
            assert.throws(function () {
                studio.makeMovie('test');
            }, 'Invalid arguments count');
        });

        it('should throw error if 0 parameters are passed', function () {
            assert.throws(function () {
                studio.makeMovie();
            }, 'Invalid arguments count');
        });

        it('should throw error if more than 2 parameters are passed', function () {
            assert.throws(function () {
                studio.makeMovie('test', ['asd'], 'test');
            }, 'Invalid arguments count');
        });

        it('should throw error if first arg is not a string', function () {
            assert.throws(function () {
                studio.makeMovie(12, ['asd']);
            }, 'Invalid arguments');
        });

        it('should throw error if first arg is object', function () {
            assert.throws(function () {
                studio.makeMovie({name: 'test'}, ['asd']);
            }, 'Invalid arguments');
        });

        it('should throw error if first arg is func', function () {
            assert.throws(function () {
                studio.makeMovie(() => {}, ['asd']);
            }, 'Invalid arguments');
        });

        it('should throw error if first arg is arr', function () {
            assert.throws(function () {
                studio.makeMovie([ 'test'], ['asd']);
            }, 'Invalid arguments');
        });

        it('should throw error if second arg is int', function () {
            assert.throws(function () {
                studio.makeMovie('test', 2);
            }, 'Invalid arguments');
        });

        it('should throw error if second arg is string', function () {
            assert.throws(function () {
                studio.makeMovie('test', 'testt');
            }, 'Invalid arguments');
        });

        it('should throw error if second arg is {}', function () {
            assert.throws(function () {
                studio.makeMovie('test', {name: 'test'});
            }, 'Invalid arguments');
        });

        it('should throw error if second arg is func', function () {
            assert.throws(function () {
                studio.makeMovie('test', () => {});
            }, 'Invalid arguments');
        });

        it('should create film, assign actor, and actor is employed', function () {
            studio.makeMovie('test', ['test', 'test2']);
            studio.casting('imence', 'test')

            let test = studio.films[0].filmRoles[0].actor;

            assert.deepEqual(test, 'imence');
        });
        
    });

    describe('Testing casting(actor, role)', function () {
        let stidio;
        beforeEach(function () {
            studio = new FilmStudio('SU');
            studio.makeMovie('Test movie', ['test 1', 'test 2']);
        })

        it('should add actor', function () {
            let test = studio.casting('ime', 'test 2');
            let result = "You got the job! Mr. ime you are next test 2 in the Test movie. Congratz!"

            assert.equal(test, result);
        });

        it('should add actor if more than 1 movie with same role persist', function () {
            studio.makeMovie('Test movie', ['test 2', "test 3"]);
            let test = studio.casting('ime', 'test 2');
            let result = "You got the job! Mr. ime you are next test 2 in the Test movie. Congratz!"

            assert.equal(test, result);
        });

        it('should add actor if more than 1 movie with same role persist', function () {
            studio.makeMovie('Test movie', ['test 2', "test 3"]);
            let test = studio.casting('ime', 'test 2');
            let result = "You got the job! Mr. ime you are next test 2 in the Test movie. Congratz!"

            assert.equal(test, result);
        });

        it('should add actor if more than 1 role in the same movie persist', function () {
            studio.makeMovie('Test movie 2', ['test 3', "test 2", "test 3"]);
            studio.casting('ime', 'test 3');
            test = studio.casting('ime', 'test 2');
            let result = "You got the job! Mr. ime you are next test 2 in the Test movie. Congratz!"

            assert.equal(test, result);
        });

        it('should return message if no movies', function () {
            let newStudio = new FilmStudio('Asd');

            let test = newStudio.casting('ime', 'test 3');
            let result = "There are no films yet in Asd."

            assert.equal(test, result);
        });

        it('should return message if no roles found', function () {

            let test = studio.casting('ime', 'test 3');
            let result = "ime, we cannot find a test 3 role..."

            assert.equal(test, result);
        });

    });
    
    describe('Testing lookForProducer(film)', function () {
       let studio;
       beforeEach(function () {
           studio = new FilmStudio('Asd');
           studio.makeMovie('Test film', ['actor1', 'actor2']);
       });

        it('should print correct result', function () {
            let test = studio.lookForProducer('Test film');
            let result = "Film name: Test film\n" +
                "Cast:\n" +
                "false as actor1\n" +
                "false as actor2\n";

            assert.equal(test, result);
        });

        it('should print correct result with actor employed ', function () {
            studio.casting('imence', 'actor1');
            let test = studio.lookForProducer('Test film');
            let result = "Film name: Test film\n" +
                "Cast:\n" +
                "imence as actor1\n" +
                "false as actor2\n";

            assert.equal(test, result);
        });

        it('should throw error if no movie found', function () {
            assert.throws(function () {
                studio.lookForProducer('tup film');
            }, 'tup film do not exist yet, but we need the money...');
        });
    });
});


