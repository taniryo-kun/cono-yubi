$(document).ready(function() {
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
	var calendar = $('#calendar').fullCalendar({
		selectable: true,
		selectHelper: true,
		select: function(start, end, allDay) {
			var title = prompt('予定を入力してください:');
			if (title) {
				calendar.fullCalendar('renderEvent',
					{
						title: title,
						start: start,
						end: end,
						allDay: allDay
					},
					true // make the event "stick"
				);
			}
			calendar.fullCalendar('unselect');
		},
		editable: true,
		eventDblClick:function(event, element){
			alert(event.title+"ダブルクリック");	
		},
		 eventClick: function(event, element) {
			/*
			event.title = "CLICKED!";
		
			$('#calendar').fullCalendar('updateEvent', event);
			*/
		 },
		eventDrop: function(event,dayDelta,minuteDelta,allDay,revertFunc) {
			/*
			alert(
				event.title + " was moved " +
				dayDelta + " days and " +
				minuteDelta + " minutes."
			);
			

			if (allDay) {
				alert("Event is now all-day");
			}else{
				alert("Event has a time-of-day");
			}

			if (!confirm("Are you sure about this change?")) {
				revertFunc();
			}
			*/
		},
		eventResize: function(event,dayDelta,minuteDelta,revertFunc) {
			/*
			alert(
				"The end date of " + event.title + "has been moved " +
				dayDelta + " days and " +
				minuteDelta + " minutes."
			);

			if (!confirm("is this okay?")) {
				revertFunc();
			}
			*/

		},
		viewDisplay: function(view) {
			//console.log(view);
			/*
			$.ajax({
				url: "selectable.json",
				dataType: 'json',
				type:"post",
				data: {
					"start": view.start.toString(),
					"end": view.end.toString(),
				},
				success: function(EventSource) {
					$('#calendar').fullCalendar('removeEvents');
					$('#calendar').fullCalendar('addEventSource', EventSource);
				}
			});
			*/
		},
		events: {
				url: 'http://www.google.com/calendar/feeds/ja.japanese%23holiday%40group.v.calendar.google.com/public/full/',
				color: 'red',
				success:function(events){
					$(events).each(function(){
							this.url = null;
					});		
				}
		},
	});

});