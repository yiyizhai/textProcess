//var context = Text.fetch();
if(Text.find().count() < 1){
	// Text.update(this._id, {$set: {condition : "Display"}})
	Text.insert({
		text: "No input",
		condition: "To process"
	})
}

