document.addEventListener("DOMContentLoaded", () => {
	console.log("App loaded")
	
	var text = document.getElementById("text")
	var angelfire = new Angelfire()
	
	var config = {
		"options": [
		{
			"name": "Add",
			"onTrigger": function() {
				alert("Add clicked!")
			}
		},
		{
			"name": "Delete",
			"onTrigger": function() {
				alert("Delete clicked!")
			}
		},
		{
			"name": "Subtract",
			"onTrigger": function() {
				alert("Subtract clicked!")
			}
		}
		]
	}
	
	angelfire.addMenu(text, config)
})