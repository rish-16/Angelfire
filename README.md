<h1 align="center">Angelfire 👼🏻🔥</h1>
<p align="center">Add custom context menus to any webpage element with minimal coding!</p>
<p align="center"><i>Submission for <a href="https://openhack.nushackers.org/">NUSHackers OpenHack 2020</a>.</i></p>

---

### What is it?

> `Angelfire` lets you quickly build right-click-enabled context menus and drop-down menus for any element on your webpage. 

**What are context menus?**

Context Menus are what show up when you right-click something on a webpage. It usually contains actions that can be performed on the selected element.

<img src="assets/context-menu.png" alt="c-menu" width="300px">

`Angelfire` lets you *hijack* this context menu and add in your own options instead.

---

### Using Angelfire

To use `Angelfire`, download the `angelfire.js` and `angel-styles.css` files from the `src` directory and place them in the `head` tag in your markup:

```html
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Page Title</title>
	
	<!-- Place the Angelfire assets here -->
	<link rel="stylesheet" href="angel-styles.css">
	<script src="angelfire.js"></script>
	
	<!-- Your other imports -->
	<script src="app.js"></script>
</head>
```

---

### Using Angelfire

To use the library, you need to create a new `Angelfire` instance in your JavaScript code. You'll also need a `config` object containing menu options and associated on-click events:

```javascript
var profPic = document.getElementById("prof-pic") // target element 
var angelfire = new Angelfire()

var config = {
	"options": [
		{
			"name": "Profile",
			"event": function() {...}
		},
		{
			"name": "New Post",
			"event": function() {...}
		},
		{
			"name": "Settings",
			"event": function() {...}
		}
	]
}

angelfire.addMenu(profPic, config) // generate context menu for target element
```

It looks something like this:

<img src="assets/demo-pic.jpeg" width="450px" alt="demo-pic">

---

### Customisability

`Angelfire` allows you to create fully-customisable context menus using. In your `config` object, you can specify the key `menu-styles`:

```javascript

var config = {
	"options": [...], // menu options
	"menu-styles": {
		"backgroundColor": "red",
		"textColor": "white",
		"header": "Section 1: " // displays this on top of menu options
	}
}

```

**Here's a list of all valid `menu-styles` properties you can control:**

> **ADD LIST**

You can also control styles for individual options by adding a `styles` property to the `config` object:

```javascript

var config = {
	"options": [
		{
			"name": "Profile",
			"event": function() {...},
			"styles": { // CSS props
				"color": "royalblue",
				"background-color": "lightgray"
			}
		},
		{
			"name": "Settings",
			"event": function() {...},
			"styles": { 
				"color": "rebeccapurple",
				"font-size": "15px",
				"font-weight": 600
			}
		}
	],
	"menu-styles": {...}
}

```

**Here's a list of all valid `styles` properties you can control:**

> **ADD LIST**

---

### TO-DOs

There's still a lot to do with the library. Here are some future plans I have with it:

1. Add sub-menu support
2. Improve customisability (for `menu-styles`)
3. Add styling to individual options
4. Adding icon/image support to options
5. Adding sections in menu
6. Minifiy and deploy to CDN

---

### License

[MIT](https://github.com/rish-16/Angelfire/blob/master/LICENSE)