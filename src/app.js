document.addEventListener("DOMContentLoaded", () => {
	console.log("App loaded")
	
	var text = document.getElementById("prof-pic")
	var angelfire = new Angelfire()
	
	var config = {
		"options": [
		{
			"name": "Add",
			"event": function() {
				console.log("Add clicked!")
			}
		},
		{
			"name": "Subtract",
			"event": function() {
				console.log("Subtract clicked!")
			}
		},
		{
			"name": "Multiply",
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