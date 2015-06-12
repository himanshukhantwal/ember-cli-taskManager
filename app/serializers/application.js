import DS from "ember-data";

export default DS.RESTSerializer.extend({
	normalizePayload: function(type, payload) {
        return { todos: type };
    }
});