Router.configure({
	layoutTemplate: 'layout',
	// loadingTemplate: 'loading',

});

Router.route('/', {
	name: 'textsUpload',
	waitOn: function(){
		Meteor.subscribe('text');
	}
});
Router.route('/result', {
			name: 'textsResult',
			waitOn: function(){
				Meteor.subscribe('text');
			}
		});