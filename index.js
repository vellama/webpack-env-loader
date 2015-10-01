'use strict';

var loaderUtils = require('loader-utils');
var vm = require('vm');

module.exports = function (content) {

  var app;
  var env;
  var md;
  var sandbox = { module: {} };
  var settings;

  vm.runInNewContext(content, sandbox, this.resourcePath);
  md = sandbox.module.exports;

  try {
    app = this.options.loader.appSettings.name || 'app';
  } catch (e) {
    app = 'app';
  }

  try {
    env = this.options.loader.appSettings.env || 'development';
  } catch (e) {
    env = 'development';
  }

  if (md[app] && !md[app][env]) {
    settings = md[app];
  }

  if (md[app] && md[app][env]) {
    settings = md[app][env];
  }

  if (md[env]) {
    settings = md[env];
  }

  return 'module.exports = ' + JSON.stringify(settings) + ';';
};
