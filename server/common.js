Meteor.publish('text', function(){
	return Text.find();
})