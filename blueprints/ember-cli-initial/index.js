module.exports = {
  description: 'Ember addon, wrap initial.js',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function() {
    return this.addBowerPackageToProject('judesfernando/initial.js'); // is a promise
  }
};
