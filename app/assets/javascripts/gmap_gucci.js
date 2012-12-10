var marker1;
var marker2;
var marker3;
  
  //this function open the information window
function doOpen(){
  infowindow.open(map);
}


  //this function close the information window
function doClose(){
  infowindow.close();
}

//this function can do local search
//注意！！オプションを定義した直後にオブジェクトの定義を行わないと、マップに反映されません。
//記述方法は
//オブジェクト１のオプション定義
//オブジェクト１の定義
//オブジェクト２のオプション定義
//オブジェクト２の定義
//・・・という順番です。
function initialize3(){
  //define center of the map
  var latlng = new google.maps.LatLng(36.062092, 136.223323);
  //define center of the marker
  //var m_latlng = new google.maps.LatLng(35.709984,139.810703);
  //set up some map options
  var mapOptions={
    center: latlng,
    mapTypeId : google.maps.MapTypeId.ROADMAP,
    zoom : 15
  },
  //set up some result options
  gbarOptions={
    resultList : document.getElementById('resultsCanvas')
  };
  //define the map
  var map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);
  //define the result window
  map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push((window.gbar=new window.jeremy.jGoogleBar(map,gbarOptions)).container);
  //set up some marker options
  var markerOptions = {
    position: latlng,
	flat: false,
	map: map
  };
  //define the marker
  var marker = new google.maps.Marker(markerOptions);
  //set up some infowindow options
  var infowindowOptions = {
    content: "InfoWindow - test<br />" +  
    "<a href='http://www.google.co.jp/'>google検索</a><br />" +  
    "0123456789<br />" +  
    "0123456789<br />" +  
    "0123456789<br />" +  
    "0123456789<br />" +  
    "0123456789<br />" +  
    "0123456789<br />" +  
    "0123456789<br />" +  
    "0123456789<br />" +  
    "0123456789<br />" ,  
    maxWidth: 200  
  }; 
  //define the infowindow
  var infoWindow = new google.maps.InfoWindow(infowindowOptions);
  google.maps.event.addListener(gmarker, 'click', function(event) {
    infoWindow.open(map, marker); 
  });
}
