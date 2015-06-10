import Ember from "ember";

export default Ember.ObjectController.extend({
	actions:{
		add:function(){
			var titleValue=this.get('titleValue');
			var dueDateValue=this.get('dateValue');
			var match=this.store.filter('todo',function(value){
				return (value.title===titleValue);
			});
			if(match && match.length>0){
				alert('Task already added');
			}else if(titleValue===undefined || titleValue==='' || dueDateValue===undefined || dueDateValue===''){
				alert('add the mandatory fields');
			}else{	
				dueDateValue=new Date(dueDateValue);
				var todo=this.store.createRecord('todo',{
					title:titleValue,
					dueDate:dueDateValue,
					description:this.get('descriptionValue')
				});
				//todo.save();
			}
			this.transitionTo('todos');
		},
		cancel:function(){
			this.transitionTo('todos');
		}
	}
});