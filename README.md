<h1 align="center">Angelfire 👼🏻🔥</h1>
<p align="center">Add custom context menus to any webpage element with minimal coding!</p>

---

### What is it?

> `Angelfire` lets you quickly build right-click-enabled context menus and drop-down menus for any element on your webpage. 

***Note**: This is my submission for NUSHackers OpenHack 2020.*

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
	
	<!-- Your other code -->
	<script src="app.js"></script>
</head>

</body>
	...
</body>
```

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

### Customisability

`Angelfire` allows you to create fully-customisable context menus using. In your `config` object, you can specify the key `menu-styles`:

```javascript

var config = {
	"options": [], // menu options
	"menu-styles": {
		"backgroundColor": "red",
		"textColor": "white",
		"header": "Options:" // displays this on-top of menu
	}
}

```

**Here's a list of all `menu-style` key-value pairs:**

> **ADD LIST**

### License

[MIT](https://github.com/rish-16/Angelfire/blob/master/LICENSE)