Template.textsResult.helpers({
	   textDisplay: function(){
	   		return Text.find({}).fetch()[0].text;
	   }	  
});