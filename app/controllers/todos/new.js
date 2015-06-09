import Ember from "ember";

export default Ember.ObjectController.extend({
	actions:{
		add:function(){
			var titleValue=this.get('titleValue');
			var dueDateValue=(new Date(this.get('dateValue'))).getMilliseconds();
			var match=this.store.filter('todo',function(value){
				return (value.title===titleValue);
			});
			if(match && match.length>0){
				alert('Task already added');
			}else if(!titleValue || titleValue==='' || !dueDateValue || dueDateValue===''){
				alert('add the mandatory fields');
			}else{	
				var todo=this.store.createRecord('todo',{
					title:titleValue,
					dueDate:new Date(dueDateValue),
					description:this.get('descriptionValue')
				});
				todo.save();
			}
			this.transitionTo('todos');
		},
		cancel:function(){
			this.transitionTo('todos');
		}
	}
});