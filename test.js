QUnit.test(
    "generateURL generates correct The Movie Database url",
    function(assert) {
        var actual = logic.generateURL("mov", "jaws");
        var expected = "https://api.themoviedb.org/3/search/movie?api_key=f76207a8fd7032c7072aa2f3dc514176&query=jaws";
        assert.deepEqual(actual, expected);
    });

QUnit.test(
    "generateURL generates correct Giphy url",
    function(assert) {
        var actual = logic.generateURL("gif", "thumbs+down");
        var expected = "https://api.giphy.com/v1/gifs/random?api_key=YK70QDi19ZIBIoIWwHzAlvL9nSV8CXfY&tag=applause&rating=g";
        assert.deepEqual(actual, expected);
    });