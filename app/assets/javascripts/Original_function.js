//Begin renderMFS
var me;
var key;
function renderMFS(me, key) {
// First get the list of friends for this user with the Graph API
	FB.api('/me/friends?access_token=key', function(response) {
		alert(key);
		var container = document.getElementById('mfs');
		//alert('Good to see you, ' + container + '.');
		var mfsForm = document.createElement('form');
		mfsForm.id = 'mfsForm';
		
		// Iterate through the array of friends object and create a checkbox for each one.
		for(var i = 0; i < Math.min(response.data.length, 10); i++) {
			var friendItem = document.createElement('div');
			friendItem.id = 'friend_' + response.data[i].id;
			friendItem.innerHTML = '<input type="checkbox" name="friends" value="'
			+ response.data[i].id
			+ '" />' + response.data[i].name;
			mfsForm.appendChild(friendItem);
		}
		container.appendChild(mfsForm);
		
		// Create a button to send the Request(s)
		var sendButton = document.createElement('input');
		sendButton.type = 'button';
		sendButton.value = 'Send Request';
		sendButton.onclick = sendRequest;
		mfsForm.appendChild(sendButton);
	});
}
//End renderMFS

//Begin Send Request form
function sendRequestViaMultiFriendSelector() {
	FB.ui({method: 'apprequests',
	  message: 'おすすめ！！'
	}, requestCallback);
}

function requestCallback(response) {
// Handle callback here
}
//End Send Request from

//Begin getdata ;get data from API
var getdata = function(){
	$("#login").remove();
	//get my foudamental information
	FB.api('/me/friends', function(response){
		//parse got data
		var htm = '<ul>';
		for (var i = 0; i < response.data.length; i++){
			htm += '<li>' + response.data[i].id + '<li>' + response.data[i].name + '<li>';
		}
		htm += '</ul>'
		$("#result").html(htm);
	});
}
//End getdata

//Begin displayExplanation
//input番目のパネルに紐付くイベントPR文書を表示させるメソッド
function displayExplanation(input) {
	console.log("---displayExplanation start---");
	var prid = "#eventPR_" + input;
	$(prid).css('display','block');
	$(prid).css('z-index','5');
	console.log("---displayExplanation finish---");
}

//Begin eleaseExplanation
//input番目のパネルに紐付くイベントPR文書を非表示させるメソッド
function eleaseExplanation(input) {
	console.log("---eleaseExplanation start---");
	var prid = "#eventPR_" + input;
	$(prid).css('display','none');
	console.log("---eleaseExplanation finish---");
}

//Begin initExplanation
//input番目のパネルに紐付くイベントPR文書をデフォルトで非表示にするメソッド
function initExplanation(input) {
	console.log("---initExplanation start---");
	var prid = "#eventPR_" + input;
	$(prid).css('display','none');
	if(input%6 + 1 >= 4) {
		$(prid).css('position','relative');
		$(prid).css('top','-315px');
	}else{
		console.log("upper panel");
	}
	console.log("---initExplanation finish---");
}

//Begin initNavigationExp
//navigationの項目説明をデフォルトで非表示にするメソッド
//inputには非表示にしたいボックスのidを入れること
function initNavigationExp(input) {
	console.log("---initNavigationExp start---");
	var naviId = "#navigation p." + input;
	$(naviId).css('position','absolute');
	$(naviId).css('display','none');
	console.log("---initNavigationExp finish---");
}

//Begin displayNavigationExp
//navigationの項目説明を表示させるメソッド
//inputには表示したいボックスのidを入れること
function displayNavigationExp(input) {
	console.log("---displayNavigationExp start---");
	var naviId = "#navigation p." + input;
	$(naviId).css('display','block');
	$(naviId).css('z-index','5');
	console.log("---displayNavigationExp finish---");
}

//Begin eleaseNavigationExp
//navigationの項目説明を非表示させるメソッド
//inputには非表示したいボックスのidを入れること
function eleaseNavigationExp(input) {
	console.log("---eleaseNavigationExp start---");
	var naviId = "#navigation p." + input;
	$(naviId).css('display','none');
	console.log("---eleaseNavigationExp finish---");
}

//Begin og_displayMap
//一回目の地図タブクリックの際に、マップを再ロードするメソッド
function og_displayMap() {
	console.log("---og_displayMap start---");
	var counter = document.getElementById('click_counter');
	if(counter == 0){
		gmap_onLoad();
	}else{
	}
	counter += 1;
	document.getElementById('click_counter').innerHTML = counter;
}

