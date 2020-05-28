document.addEventListener("DOMContentLoaded", () => {
	console.log("App loaded")
	
	var text = document.getElementById("prof-pic")
	var angelfire = new Angelfire()
	
	var config = {
		"options": [
		{
			"name": "Profile",
			"event": function() {
				console.log("Add clicked!")
			}
		},
		{
			"name": "New Post",
			"event": function() {
				console.log("Subtract clicked!")
			}
		},
		{
			"name": "Settings",
			"event": function() {
				console.log("Multiply clicked!")
			}
		}
		],
		"menu-styles": {
			"backgroundColor": "red",
			"textColor": "white",
			"header": "Options:"
		}
	}
	
	angelfire.addMenu(text, config)
})