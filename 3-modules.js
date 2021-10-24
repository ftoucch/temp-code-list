// MODULES
// CommonJS, every file is module (by default)
// modules - Encapsulated code (only share minimum)

const names = require('./4-names'); // importing the needed mdules
const sayHI = require('./5-utils'); // importing the needed modules
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHI('susan');
sayHI(names.john);
sayHI(names.peter);