import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		deleteRecord:function(){
			var model=this.get('todo');
			model.deleteRecord();
			model.save();
		}
	},
	todoIsCompleted:function(key, value){
		var model=this.get('todo');
		if(value===undefined){
			return model.get('isCompleted');
		}else{
			model.set('isCompleted',value);
			model.save();
			return value;
		}
	}.property('model.isCompleted')
});
