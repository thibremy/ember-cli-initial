/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-initial',

  included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/initial.js/initial.js');
  }
};
