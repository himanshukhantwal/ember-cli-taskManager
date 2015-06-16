import Ember from 'ember';

export default Ember.Component.extend({
	toggleDescription:true,
	actions:{
		deleteRecord:function(){
			var model=this.get('todo');
			model.deleteRecord();
			model.save();
		},
		showDescription:function(){
			var model=this.get('todo');
			if(this.get('toggleDescription')){
				$('.todo-description#'+model.id).css("visibility","visible");
				this.set('toggleDescription',false);
			}else{
				$('.todo-description#'+model.id).css("visibility","hidden");
				this.set('toggleDescription',true);
			}
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
