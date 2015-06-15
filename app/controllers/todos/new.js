import Ember from "ember";

export default Ember.Controller.extend({
	titleValue:"",
	dateValue:"",
	descriptionValue:"",
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
					description:this.get('descriptionValue'),
					isCompleted:false
				});
				todo.save();
			}
			this.transitionToRoute('todos');
		},
		cancel:function(){
			this.transitionToRoute('todos');
		}
	}
});