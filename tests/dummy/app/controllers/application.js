import Ember from 'ember';

export default Ember.Controller.extend({
	initials: Ember.A([
		{ name: 'test' },
		{ name: 'foo' },
		{ name: 'bar' },
	]),
});