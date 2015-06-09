import DS from "ember-data";

var todoList=DS.Model.extend({
	title:DS.attr('string'),
	description:DS.attr('string'),
	isCompleted:DS.attr('boolean'),
	dueDate:DS.attr('date')
});

todoList.reopenClass({
	FIXTURES:
	[
		{
			id:1,
			title:'go shopping',
			description:'shopping is good for pocket',
			isCompleted:false,
			dueDate:new Date(12)
		},
		{
			id:2,
			title:'morning walk',
			description:'walk is good for health and body',
			isCompleted:true,
			dueDate:new Date(3)
		},
		{
			id:3,
			title:'office time',
			description:'office in mid-town plaza pramati office',
			isCompleted:false,
			dueDate:new Date(5)
		},
		{
			id:4,
			title:'complete work',
			description:'complete work and take some time off in between',
			isCompleted:false,
			dueDate:new Date(8)
		},
		{
			id:5,
			title:'come home',
			description:'come home as soon as possible:-p',
			isCompleted:false,
			dueDate:new Date(10)
		},
		{
			id:6,
			title:'call home and have good sleep',
			description:'call home and friends and go to bed at 10:-p ',
			isCompleted:false,
			dueDate:new Date(11)
		}

	]
});

export default todoList;