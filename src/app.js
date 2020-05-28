document.addEventListener("DOMContentLoaded", () => {
	console.log("App loaded")
	
	var text = document.getElementById("text")
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
		},
		{
			"name": "Divide",
			"event": function() {
				console.log("Divide clicked!")
			}
		}
		]
	}
	
	angelfire.addMenu(text, config)
})