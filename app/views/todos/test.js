import Ember from "ember";

export default Ember.View.extend({
    layoutName: 'todomodal',
    
    name:'himanshu',
    didInsertElement: function() {
      this.$().modal('show');
    },
    
    willDestroyElement: function() {
      this.$().modal('hide');
    }	
});