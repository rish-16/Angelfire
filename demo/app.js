document.addEventListener("DOMContentLoaded", () => {
	console.log("App loaded")
	
	var text = document.getElementById("prof-pic")
	var angelfire = new Angelfire()
	
	var config = {
		"options": [
		{
			"name": "Add",
			"event": function() {
				alert("Add clicked!")
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
			"name": "Subtract",
			"event": function() {
				alert("Subtract clicked!")
			}
		},
		{
			"name": "Multiply",
			"event": function() {
				alert("Multiply clicked!")
			}
		}
		],
	}
	
	angelfire.addMenu(text, config)
})