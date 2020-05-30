document.addEventListener("DOMContentLoaded", () => {
	console.log("App loaded")
	
	var img = document.getElementById("prof-pic")
	const text = document.getElementById("text")
	
	var angelfire = new Angelfire()
	
	var config = {
		"options": [
		{
			"name": "Profile",
			"event": function() {
				alert("Profile clicked!")
			},
			"styles": {
				"color": "royalblue"
			},
			"onHover": {
				"opacity": 0.5,
				"background": "none",
				"transition": "0.5s",
			}
		},
		{
			"name": "New Post",
			"event": function() {
				alert("New Post clicked!")
			}
		},
		{
			"name": "Settings",
			"event": function() {
				alert("Settings clicked!")
			}
		}
		],
	}
	
	var config2 = {
		"options": [
		{
			"name": "Copy",
			"event": function() {
				alert("Copy text")
			}
		},
		{
			"name": "Delete",
			"event": function() {
				alert("Delete text")
			}
		},
		{
			"name": "Colour",
			"event": function() {
				alert("Choose colour")
			}
		},
		{
			"name": "Duplicate",
			"event": function() {
				alert("Duplicate text")
			}
		}
		]
	}
	
	angelfire.addMenu(img, config)
	angelfire.addMenu(text, config2)
})