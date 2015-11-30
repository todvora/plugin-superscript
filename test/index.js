var path = require('path');
var tester = require('gitbook-tester');

describe('superscript', function() {
    it('should correctly replace by sup html tag', function() {
        return tester.builder()
            .withContent('#test me \n\nHello world. {% sup %}superscript text!{% endsup %}')
            .withBookJson({
                plugins: ['superscript']
            })
            .withLocalPlugin(path.join(__dirname, '..'))
            .create()
            .then(function(result) {
                console.log(result);
            });
    });
});