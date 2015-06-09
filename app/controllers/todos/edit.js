import Ember from "ember";

export default Ember.Controller.extend({
	actions:{
		save:function(){
			var titleValue=this.get('titleValue'),
				descriptionValue=this.get('descriptionValue'),
				dateValue=this.get('dateValue'),
				todo=this.get('model');
			if(titleValue){
				todo.set('title',titleValue);			
			}
			if(descriptionValue){
				todo.set('description',descriptionValue);
			}
			if(dateValue){
				todo.set('date',dateValue);
			}
			
			// todo.save();	
			this.transitionToRoute('todos');
		},
		cancel:function(){
			this.transitionToRoute('todos');
		}
	}
});