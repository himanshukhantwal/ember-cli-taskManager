import Ember from "ember";

export function dateInString(value){
	 return value.toDateString();
	//return value;
}

export default Ember.Handlebars.makeBoundHelper(dateInString);