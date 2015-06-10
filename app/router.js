import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('todos',{path:'/'},function(){
		this.route('edit',{path:'edit/:todo_id'});
		this.route('new',{path:'new'});
		this.route('test',{path:'test'});
	});
});

export default Router;
