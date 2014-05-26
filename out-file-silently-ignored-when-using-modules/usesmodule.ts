import s = require('exportsmodule');

class Boom {
	public main() {
		var g = new s.Greeter('hi');
		console.log('boom:', g.greet());
	}
}