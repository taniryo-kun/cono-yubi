//ページ遷移をなくす試み
$('#make a').bind('click', function(e){ 
	    e.preventDefault();
		console.log('#make has been clicked');
		var dispage = 'page1'
		var apepage = 'page2'
		if($(this).attr('id') === 'makea'){
			dispage = '#page1'
			apepage = '#page2'
			console.log('makea');
			$('h2').html('イベント作成');
		}else if($(this).attr('id') === 'finda'){
			dispage = '#page2'
			apepage = '#page1'
			console.log('finda');
		}else{console.log('Error');}
		
		$('#make').css({background: '-webkit-gradient(linear, 0 0, 0 100%, color-stop(0, #f29679), color-stop(0.05, #f2754d), color-stop(0.2, #e44815), color-stop(1, #601902))'});
		$('#find, #mypage').css({background: '-webkit-gradient(linear, 0 0, 0 100%, color-stop(0, #f29679), color-stop(0.2, #f2754d), color-stop(0.7, #e44815), color-stop(1, #942907))'});
		$(dispage).hide();
		$(apepage).fadeIn(1000);

		loaded();
		myScroll.refresh();
	});
	
$('#mypage a').bind('click', function(){
		$('#mypage').css({background: '-webkit-gradient(linear, 0 0, 0 100%, color-stop(0, #f29679), color-stop(0.05, #f2754d), color-stop(0.2, #e44815), color-stop(1, #601902))'});
	});
	
$('dt').bind('click', function(){
	$(this).css('background', '#b5ddff');
	});