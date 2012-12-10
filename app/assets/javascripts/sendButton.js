//Begin FB.init
window.fbAsyncInit = function() {
	console.log('FB.init start2');
	FB.init({
		appId : '411286712247085',// App ID
		channelUrl : '//http://www.cono-yubi.com/cono-top.html', // Channel File
		status     : true, // check login status
		cookie     : true, // enable cookies to allow the server to access the session
		xfbml      : true, // parse XFBML
		oauth	   : true, //OAuth2.0
		frictionlessRequests: true
	})
	console.log('FB.init finished2');
};
//End FB.init

// Define requestCallback
function requestCallback(response) {
  // Handle callback here
}

//Begin send_test
function send_test2() {
  console.log('start send_test2');
  var vr1 = document.getElementById('eid').innerHTML;
  var vr2 = document.getElementById('epr').innerHTML;
  var conourl = 'http://www.cono-yubi.com/cono-top/events/'+String(vr1);
  //var conourl = 'http://www.cono-yubi.com/cono-top/events/19';
  //var eventurl = new Url('イベントへのリンクはこちらhttp://www.cono-yubi.com/cono-top/events/' + String(vr1));
  console.log('function publish(start)');
  var publish = {
	method: 'send',
	//redirect_uriは送信者が送信ボタンを押した後にリダイレクトするURL
	//redirect_uri: conourl,
	message: 'CONOYUBI',
	name: String(vr2),
	display: 'popup',
	caption: '',
	to: '',
	description: (
	  conourl
	),
	//link: 'http://www.cono-yubi.com/cono-top/events/19',
	link: conourl,
	//link: 'http://www.cono-yubi.com/cono-top/events/'+String(vr1)+'/',
	//link: conourl.value,
	picture: 'http://www.cono-yubi.com/cono-top/assets/Mainlogo.png',
	actions:[
	  {name: 'fbrell', link: ''}
	],
	user_message_prompt:''
  };
  
  //alert('vr1');
  //alert(vr1);
  //alert(String(vr1));
  console.log('finish send_test');
  FB.ui(publish, requestCallback);
}
//End send_test

//Begin feed_test
function feed_test() {
 console.log('feed_test start');
 var vr1 = document.getElementById('eid').innerHTML;
 var vr2 = document.getElementById('epr').innerHTML;
 var conourl = 'http://www.cono-yubi.com/cono-top/events/'+String(vr1);
 FB.ui({
     method: 'feed',
     //name: String(vr2),
     //link: conourl,
     picture: 'http://www.cono-yubi.com/cono-top/assets/Mainlogo.png',
     caption: 'CONOYUBI',
     description: 'みんなで楽しくレッツパーリィ！！',
   },
 function(response) {   
    if (response && response.post_id) {   
     // success posting   
		//alert('Post was successful! Action ID: ' + response.id);
    } else {   
     // failure posting   
	 	//alert('Error occured');
    }   
  }   
 );   
 console.log('feed_test finished');
}  
//End feed_test 