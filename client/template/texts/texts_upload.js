Template.textsUpload.events({
	'click #textSubmit': function(event){
		event.preventDefault();
		var texts = $("#text-in-upload").val();
		//console.log(texts);
		if(texts != " "){			
			//console.log(Text.find().count());
			if(Text.find({}).count() < 1){
				Text.insert({
					text : texts,
					condition : "To Process"
				});
			}else{
				Meteor.call('textUpdate', this._id, texts, "To Process");
				//Text.update(this._id, {$set: {text : texts, condition : "To Process"}});
				//console.log(texts);
			}
			//console.log(EJSON.stringify(Text.findOne()))
			//console.log(Text.find().fetch()[0].text);
			Router.go('/result');
		}else{
			alert("Ooops....The input text can't be empty. Try again!");
		}
		
	}
})