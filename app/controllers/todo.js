import Ember from "ember";
export default Ember.ObjectController.extend({
	actions:{
		deleteRecord:function(){
			var model=this.get('model');
			model.deleteRecord();
		}
	},
	isCompleted:function(key, value){
		var model=this.get('model');
		if(value===undefined){
			return model.get('isCompleted');
		}else{
			model.set('isCompleted',value);
			// model.save();
			return value;
		}
	}.property('model.isCompleted')
});