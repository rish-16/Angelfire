function makeid(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
	   result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

var Angelfire = function() {};

Angelfire.prototype.addMenu = function(element, config) {
	var styleContainer = document.getElementsByTagName('style')[0];
	
	var menu = document.createElement("div");
	menu.className = "menu";
	var menuVisible = false;
	
	var ul = document.createElement("ul");
	ul.className = "menu-options";
	
	const toggleMenu = function(command) {
		menu.style.display = command === "show" ? "block" : "none";
	}
	
	const setPosition = function({ top, left }) {
		menu.style.left = `${left}px`;
		menu.style.top = `${top}px`;
		toggleMenu('show');
	}
	
	var allOptions = config["options"];
	var name;
	var func;
		
	for (var i = 0; i < allOptions.length; i++) {
		name = allOptions[i]["name"];
		func = allOptions[i]['event'];

		var li = document.createElement("li");
		li.className = "menu-option";
		li.textContent = name;
		li.addEventListener("click", func);
		var liID = makeid(5);
		li.id = liID;
		
		if (allOptions[i]['styles'] != undefined) {
			var liStyles = allOptions[i]['styles'];
			for (key in liStyles) {
				styleContainer.innerHTML += `
					.menu .menu-options #${liID} {
						${key}: ${liStyles[key]};
					}
				`;
			}
		}
		
		if (allOptions[i]['onHover'] != undefined) {
			var liHover = allOptions[i]['onHover'];
			var hoverString = "";
			for (key in liHover) {
				hoverString += `${key}: ${liHover[key]};\n`;
			}
			
			styleContainer.innerHTML += `
				#${liID}:hover {
					${hoverString}
				}
			`;
		}
		
		ul.appendChild(li);
	}
	
	element.addEventListener("contextmenu", function(e) {
		e.preventDefault()
		const origin = {
			left: e.pageX,
			top: e.pageY
		};
		setPosition(origin);
		menuVisible = true;
		
		window.addEventListener("click", function(e) {
			if (menuVisible) {toggleMenu("hide")};
		})
	})
	
	menu.appendChild(ul);
	
	var styles = config["menu-styles"];
	
	for (key in styles) {
		styleContainer.innerHTML += `
			.menu {
				${key}: ${styles[key]};
			}
		`;
	}
	
	document.body.appendChild(menu);
}