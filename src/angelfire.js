function Angelfire() {}

Angelfire.prototype.addMenu = (element, config) => {
	var menu = document.createElement("div")
	menu.className = "menu"
	var menuVisible = false
	
	var ul = document.createElement("ul")
	ul.className = "menu-options"
	
	const toggleMenu = command => {
		menu.style.display = command === "show" ? "block" : "none"
	}
	
	const setPosition = ({ top, left }) => {
		menu.style.left = `${left}px`
		menu.style.top = `${top}px`
		toggleMenu('show')
	};
	
	element.addEventListener("contextmenu", (e) => {
		e.preventDefault()
		console.log(e.pageX, e.pageY)
		const origin = {
			left: e.pageX,
			top: e.pageY
		}
		setPosition(origin)
		menuVisible = true
		  
		var allOptions = config["options"]
		
		for (var i = 0; i < allOptions.length; i++) {
		
			var record = allOptions[i]
			console.log(record)

			var li = document.createElement("li")
			li.className = "menu-option"
			li.textContent = record["name"]
			li.id = `option-${i}`
			
			li.onclick = () => {
				record["onTrigger"]()
			}
			
			ul.appendChild(li)
		}
	})
	
	window.addEventListener("click", e => {
		if (menuVisible) {toggleMenu("hide")}
		ul.innerHTML = ""
	})
	
	menu.appendChild(ul)
	document.body.appendChild(menu)
}