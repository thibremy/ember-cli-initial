module.exports = {
 
  normalizeEntityName: function() {},


  afterInstall: function() {
    return this.addBowerPackageToProject('initial', 'https://github.com/judesfernando/initial.js.git#0.1.0');
  }
};
