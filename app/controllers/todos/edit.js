import Ember from "ember";

export default Ember.Controller.extend({
	dateValue:function(){
			return moment(this.get('model').get('dueDate')).format('YYYY-MM-DDTHH:mm');
	}.property('model'),
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
				dateValue=new Date(dateValue);
				todo.set('dueDate',dateValue);
			}	
			todo.save();	
			this.transitionToRoute('todos');
		},
		cancel:function(){
			this.transitionToRoute('todos');
		}
	}
});