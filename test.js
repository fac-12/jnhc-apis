test(
    "output object is expected object",
    function(assert) {
        const actual = logic.generateAPIcall("mov", "jaws");
        const expected = {
            gifURL: "https://media3.giphy.com/media/f3xLsh5ceSbi8/200_d.gif",
            posterPath: "http://image.tmdb.org/t/p/w300///l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg",
            releaseDate: "1975-06-18",
            synopsis: "An insatiable great white shark terrorizes the townspeople of Amity Island, The police chief, an oceanographer and a grizzled shark hunter seek to destroy the bloodthirsty beast.",
            title: "Jaws",
            voteAverage: 7.5
        };
        assert.equal(expected, actual);
    });