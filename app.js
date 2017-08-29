var apos = require('apostrophe')({
  shortName: 'test',
  title: 'test',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {
    // Add custom apostrophe-modules and their respective configuration here!
    'supernode-employees': {},
		'supernode-employees-widgets': {
			extend: 'apostrophe-pieces-widgets'
		}
  }
});
