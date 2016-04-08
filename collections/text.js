//Text: server side; text: client side
Text = new Mongo.Collection("text");

Text.allow({
	update: function(fieldID, texts){
		return true;
	},
	remove: function(fieldID,texts){
		return true;
	}
});

Meteor.methods({
	textUpdate: function(id, texts, conditions){
		//Text.update(id, {$set: {text : texts, condition : conditions}});
		Text.remove({});
		Text.insert({
			text : texts, 
			condition : conditions
		});
		// var values = Text.find().fetch();
		// console.log(texts);
		// console.log(values[0].text);
		// return{
		// 	textDisplay: values[1].text
		// };
		return true;
	}
});