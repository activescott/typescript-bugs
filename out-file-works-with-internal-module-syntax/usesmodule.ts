/// <reference path='exportsmodule.ts' />

/* Note we use the /// reference syntax above instead of: 
import s = require('exportsmodule');
*/

class Boom {
	public main() {
		var g = new Sayings.Greeter('hi');
		console.log('boom:', g.greet());
	}
}
