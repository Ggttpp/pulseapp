window.onload = function() {
	
	// var config = {
	// apiKey: "AIzaSyCXOnVpq39RP_cDy9JlUn85PwUtEGvViVI",
	// 	authDomain: "mmcproject-8e516.firebaseapp.com",
	// 	databaseURL: "https://mmcproject-8e516.firebaseio.com",
	// 	projectId: "mmcproject-8e516",
	// 	storageBucket: "mmcproject-8e516.appspot.com",
	// 	messagingSenderId: "113323670917",
	// 	appId: "1:113323670917:web:b9bee4d5f3487d09"
	// };
	var config = {
		apiKey: "AIzaSyAu7fVbMKZdHaHoik7TSVvNxTc8TlOcDgA",
		authDomain: "pulseapp-cbeca.firebaseapp.com",
		databaseURL: "https://pulseapp-cbeca.firebaseio.com",
		projectId: "pulseapp-cbeca",
		storageBucket: "",
		messagingSenderId: "587921804051",
		appId: "1:587921804051:web:011c36ae7acc8a8b"
	  };

	firebase.initializeApp(config);
	
	var databaseFirebase = document.getElementById('range');
	var notification = document.getElementById('notif');
	var databaseRef = firebase.database().ref().child("sensor").child("bpm");
	databaseRef.on( 'value', snap=> {
		 //databaseFirebase.innerText = JSON.stringify( snap.val(), null, 3 );
		 var valueJson = JSON.stringify( snap.val(), null, 3 );
		 var jsonValue = JSON.parse(valueJson);
		 
		//  console.log(valueJson);
		 var sensor = jsonValue.sensor;
		 console.log(sensor);
		 //databaseFirebase.innerText = sensor;
		 if(sensor > 180) 
		 {
			 notification.innerText = "Danger";
		 }
		 if(sensor <= 180 && sensor > 60)
		 {
			 notification.innerHTML = "Normal";
		 }
		 if(sensor <= 60){
			 notification.innerHTML = "Low";
		 }
		 document.getElementById('range').value = sensor;
		 
		 updateProgress(document.getElementById("range"));
	} );
    
}

function updateProgress(element) {
    var slider = document.getElementById("range");
    var progress = document.getElementById("number");
    var first = document.getElementById("first-half");
    var secnd = document.getElementById("second-half");
    var angle = -45;

    progress.innerHTML = element.value;
	
	if(element.value <= 180 && element.value > 60)
	{
		if (element.value >= element.max / 2) {
			first.style.borderColor = "blue transparent transparent blue";
			secnd.style.borderColor = "transparent blue blue transparent";
			secnd.style.transform = "rotate(-45deg)";
		} else if (element.value < element.max / 2 && element.value >= element.max / 4) {
			first.style.borderColor = "blue transparent transparent transparent";
			secnd.style.borderColor = "transparent blue transparent transparent";
			secnd.style.transform = "rotate(-45deg)";
		} else if (element.value < element.max / 4) {
			first.style.borderColor = "blue transparent transparent transparent";
			secnd.style.borderColor = "transparent white white transparent";
			secnd.style.transform = "rotate(-225deg)";
		}

	}
	if(element.value > 180)
	{
		if (element.value >= element.max / 2) {
			first.style.borderColor = "red transparent transparent red";
			secnd.style.borderColor = "transparent red red transparent";
			secnd.style.transform = "rotate(-45deg)";
		} else if (element.value < element.max / 2 && element.value >= element.max / 4) {
			first.style.borderColor = "red transparent transparent transparent";
			secnd.style.borderColor = "transparent red transparent transparent";
			secnd.style.transform = "rotate(-45deg)";
		} else if (element.value < element.max / 4) {
			first.style.borderColor = "red transparent transparent transparent";
			secnd.style.borderColor = "transparent white white transparent";
			secnd.style.transform = "rotate(-225deg)";
		}

	}
	if(element.value <= 60)
	{
		if (element.value >= element.max / 2) {
			first.style.borderColor = "orange transparent transparent orange";
			secnd.style.borderColor = "transparent orange orange transparent";
			secnd.style.transform = "rotate(-45deg)";
		} else if (element.value < element.max / 2 && element.value >= element.max / 4) {
			first.style.borderColor = "orange transparent transparent transparent";
			secnd.style.borderColor = "transparent orange transparent transparent";
			secnd.style.transform = "rotate(-45deg)";
		} else if (element.value < element.max / 4) {
			first.style.borderColor = "orange transparent transparent transparent";
			secnd.style.borderColor = "transparent white white transparent";
			secnd.style.transform = "rotate(-225deg)";
		}

	}
	
    angle += (360 / slider.max) * element.value;
    first.style.transform = "rotate(" + angle + "deg)";
    angle = -45;
}

function animateProgress(target) {
    element = document.getElementById('range');
    if (element.value < target) {
        var animation = setInterval(function() {
            element.stepUp();
            updateProgress(element);
            if (element.value >= target) {
                clearInterval(animation);
            }
        }, 1);

    }
    if (element.value > target) {
        var animation = setInterval(function() {
            element.stepDown();
            updateProgress(element);
            if (element.value <= target) {
                clearInterval(animation);
            }
        }, 1);
      
    }
}