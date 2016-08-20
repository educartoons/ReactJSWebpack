// Pure Functions
// Evaluates the same result given the same arguments
// Doesn't depend on and  doesn't modify the states of variables out of its scope.
// No side effects (mutations, asynch reqs)

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');


// var sentryKey = '0d5a683b20ba4d188f6fb8d81ead92e6';
// var sentryApp = '93244';
// var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;
//
// var _APP_INFO = {
//   name: 'Github Battle',
//   branch: '4',
//   version: '1.0'
// };
//
// Raven.config(sentryURL, {
//   release: _APP_INFO.version,
//   tags: {
//     branch: _APP_INFO.branch,
//   }
// }).install();

ReactDOM.render(
  routes,
  document.getElementById('app')
);
