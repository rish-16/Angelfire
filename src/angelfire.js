function Angelfire() {}

Angelfire.prototype.addMenu = (element, config) => {
	var menu = document.createElement("div")
	menu.className = "menu"
	var menuVisible = false
	
	menu.style.width = "150px"
	menu.style.boxShadow = "1px 1px 5px rgba(0, 0, 0, 0.2)"
	menu.style.borderRadius = "7px"
	menu.style.position = "relative"
	menu.style.display = "none"
	
	var ul = document.createElement("ul")
	ul.className = "menu-options"
	
	ul.style.listStyle = "none"
	ul.style.padding = "10px 0"
	
	const toggleMenu = command => {
		menu.style.display = command === "show" ? "block" : "none";
	}
	
	const setPosition = ({ top, left }) => {
		menu.style.left = `${left}px`;
		menu.style.top = `${top}px`;
		toggleMenu('show');
	};
	
	menu.innerHTML = ""
	ul.innerHTML = ""
	element.addEventListener("contextmenu", (e) => {
		e.preventDefault();
		const origin = {
			left: e.pageX,
			top: e.pageY
		};
		setPosition(origin);
		menuVisible = true
		  
		var allOptions = config["options"]
		
		for (var i = 0; i < allOptions.length; i++) {
		
			var record = allOptions[i]
			console.log(record)

			var li = document.createElement("li")
			li.className = "menu-option"
			li.textContent = record["name"]
			
			li.style.fontWeight = "500"
			li.style.fontSize = "14px"
			li.style.padding = "10px 40px 10px 20px"
			li.style.cursor = "pointer"
			
			li.addEventListener("mouseover", () => {
				li.style.background = "rgba(0, 0, 0, 0.1)"
			})
			
			ul.appendChild(li)
			
			li.addEventListener(record['trigger'], () => {
				var func = record["onTrigger"]
				func()
			})
		}
	})
	
	window.addEventListener("click", e => {
		if(menuVisible)toggleMenu("hide");
	});
	
	menu.appendChild(ul)
	document.body.appendChild(menu)
}