//Begin FB.init
window.fbAsyncInit = function() {
	console.log('FB.init start');
	FB.init({
		appId : '411286712247085',// App ID
		channelUrl : '//http://www.cono-yubi.com/cono-top.html', // Channel File
		status     : true, // check login status
		cookie     : true, // enable cookies to allow the server to access the session
		xfbml      : true, // parse XFBML
		oauth	   : true, //OAuth2.0
		frictionlessRequests: true
	})
	console.log('FB.init finished');
};
//End FB.init

$(function(){
	(function() {
		var e = document.createElement('script'); 
		e.async = true;
		e.src = document.location.protocol +
		'//connect.facebook.net/ja_JP/all.js';
		document.getElementById('fb-root').appendChild(e);
	}()); 
	console.log('Getting appendChild e finished');
});
//End FB.init desynchronization

// Load the SDK Asynchronously
$(function(){
	(function(d){
		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement('script'); js.id = id; js.async = true;
		js.src = "//connect.facebook.net/en_US/all.js";
		ref.parentNode.insertBefore(js, ref);
	}(document));
	console.log('Load the SDK Asynchronously finished');
});
