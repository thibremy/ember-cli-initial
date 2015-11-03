import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  
  didInsertElement() {
    const options = this.getProperties(Object.keys(this.get('attrs')));
    this.$().initial(options);
  }
});
