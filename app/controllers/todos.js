import Ember from "ember";

export default Ember.ArrayController.extend({
	filteredModel:function(){
		var model=this.get('model'),
			filteredString=this.get('filterString'),
			isSortedByDate=this.get('isSortedByDate'),
			filteredModel;
		if(!filteredString && !isSortedByDate){
			return model;
		}else{
			if(!filteredString){
				filteredModel=model;
			}else{
					filteredModel=model.filter(function(data){
						if((data.get('title')).toLowerCase().indexOf(filteredString.toLowerCase())!==-1){
							return true;
						}
					});
			}
			if(!isSortedByDate){
				return filteredModel;
			}else{
				return filteredModel.sortBy('dueDate');
			}
		}
	}.property('filterString','model.@each','isSortedByDate')

});