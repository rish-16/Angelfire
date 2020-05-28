document.addEventListener("DOMContentLoaded", () => {
	console.log("App loaded")
	
	var text = document.getElementById("text")
	var angelfire = new Angelfire()
	
	var config = {
		"options": [
		{
			"name": "Add",
			"trigger": "click",
			"onTrigger": function() {
				alert("Add clicked!")
			}
		},
		{
			"name": "Delete",
			"trigger": "click",
			"onTrigger": function() {
				alert("Delete clicked!")
			}
		},
		{
			"name": "Subtract",
			"trigger": "click",
			"onTrigger": function() {
				alert("Subtract clicked!")
			}
		}
		]
	}
	
	angelfire.addMenu(text, config)
})