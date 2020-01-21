
<!DOCTYPE html>
<html>
<head>
	<title>Get Time </title>
	<style type="text/css">
		body {
			text-align: center;
		}
	</style>
</head>
<body>
	<div>
		<h1> The current time is: <span id="time"> </span> <h1>
	</div>
	<script type="text/javascript">
		function checkTime(i) {
		  if (i < 10) {
		    i = "0" + i;
		  }
		  return i;
		}

		function startTime() {
		  var today = new Date();
		  var h = today.getHours();
		  var m = today.getMinutes();
		  var s = today.getSeconds();
		  // add a zero in front of numbers<10
		  m = checkTime(m);	
		  s = checkTime(s);
		  var newformat = h >= 12 ? 'PM' : 'AM'; 
		  document.getElementById('time').innerHTML = h + ":" + m + ":" + s + "s " + newformat;
		  t = setTimeout(function() {
		    startTime()
		  }, 500);
		}
		startTime();
	</script>
</body>
</html>
