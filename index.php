<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<link href="style.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
<script src="app.js"></script>
<!------ Include the above in your HEAD tag ---------->

<h2 style="text-align: center;">Pulse Heart Sensor</h2>
<div id="number"></div>
<div id="first-half"></div>
<div id="second-half"></div>
<h2 id="notif" style="text-align: center;" ></h2>
<input oninput="updateProgress(this)"
       type="range"
       min="0" 
       max="220"
       value="0"
       step="1"
       id="range"
       name="">
</input>
