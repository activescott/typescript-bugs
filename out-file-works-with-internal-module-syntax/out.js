var Sayings;
(function (Sayings) {
    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    })();
    Sayings.Greeter = Greeter;
})(Sayings || (Sayings = {}));
/// <reference path='exportsmodule.ts' />
/* Note we use the /// reference syntax above instead of:
import s = require('exportsmodule');
*/
var Boom = (function () {
    function Boom() {
    }
    Boom.prototype.main = function () {
        var g = new Sayings.Greeter('hi');
        console.log('boom:', g.greet());
    };
    return Boom;
})();
