var Angelfire = function() {}

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
	}
	
	var allOptions = config["options"]
	var name
	var func
		
	for (var i = 0; i < allOptions.length; i++) {
		name = allOptions[i]["name"]
		func = allOptions[i]['event']

		var li = document.createElement("li")
		li.className = "menu-option"
		li.textContent = name
		li.addEventListener("click", func)
		ul.appendChild(li)
	}
	
	element.addEventListener("contextmenu", (e) => {
		e.preventDefault()
		const origin = {
			left: e.pageX,
			top: e.pageY
		}
		setPosition(origin)
		menuVisible = true
		
		window.addEventListener("click", e => {
			if (menuVisible) {toggleMenu("hide")}
		})
	})
	
	menu.appendChild(ul)
	
	var styles = config["menu-styles"]
	var styleContainer = document.getElementsByTagName('style')[0]
	
	for (key in styles) {
		console.log(key, styles[key])
		styleContainer.innerHTML += `
			.menu {
				${key}: ${styles[key]};
			}
		`	
	}
	
	document.body.appendChild(menu)
}