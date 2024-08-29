# Shoes Store

1. Create Folder Structure
    1. Create root folder as Amazona
    2. Add fronend and backend folder
    3. Create src folder in frontend
    4. Create index.html with heading Amazona in src
    5. Run npm init in frontend folder
    6. Npm install live-server
    7. Add start command as live-server src --verbose
    8. Run npm start

2. Design Website
    1. Create style.css
    2. Link style.css to index.html
    3. Create div.grid-container
    4. Create header, main, footer
    5. Style html, body
    6. Style, header, main and footer

3. Create Static Home Screen
    1. Create ul.products
    2. Create li
    3. Create div.product
    4. Add .product-image, .product-name, .product-brand, .product-price
    5. Style ul.products and internal divs
    6. Duplicate 2 times to show 3 products

4. Render Dynamic Home Screen
    1. Create data.js
    2. Export an array of 6 products
    3. Create screens/Home Screen.js
    4. export HomeScreen as an object with render() method
    5. implement render()
    6. import data.js
    7. Return products mapped to lis inside an ul
    8. Create app.js
    9. Link it to index.html as module
    10. Set main id to main_container
    11. Create router() function
    12. Set main_container innerHTML to HomeScreen.render()
    13. Set load event of window to router() function

5. Build URL Router
    1. Create routers as route:screen object for home screen
    2. Create utils.js
    3. Export parseRequestURL()
    4. Set URL as hash address split by slash
    5. Return resource, id and verb of url
    6. Update router()
    7. Set request as parseRequestURL()
    8. Build parsedURL and compare with routes
    9. If route exists render it, else render Error404
    10. Create screens/Error404.js and render error message

6. Create Node.JS Server
    1. Run npm init in root folder
    2. npm install express
    3. create server.js
    4. Add start command as node backend/server.js
    5. Require express
    6. Move data.js from frontend to backend
    7. Create route for /api/products
    8. Return products in data.js
    9. Run npm start

7. Load Products From Backend
    1. Edit HomeScreen.js
    2. Make render async
    3. Fetch products from '/api/products' in render()
    4. make router() async and call await HomeScreen.render()
    5. Use cors on backend

8. Add Webpack
    1. cd fronted
    2. $ npm i webpack@4.43.0 webpack-cli@3.3.12 webpack-dev-server@3.11.0 
    3. npm uninstall live-server
    4. "start": "webpack-dev-server --mode development --watch-content-base --open"
    5. Move index.html, style.css and images to frontend folder
    6. Rename app.js to index.js
    7. Update index.html
    8. Add <script src="main.js"></script> before </body>
    9. npm start
    10. npm i axios
    11. Change fetch to axios in HomeScreen

9. Install Babel For ES6 Syntax
    1. npm install -D babel core, cli, node, preset-env
    2. Create .babelrc and set presets to @babel/preset-env
    3. npm i -D nodemon
    4. set start: nodemon --watch backend -exec babel-node backend/server.js
    5. convert require to import in server.js
    6. npm start

10. Enable Code Linting
    1. npm install -D eslint
    2. Install VSCode eslint extension
    3. Create .eslintrc and set module.exports for env to node
    4. Set VSCode setting for editor.codeActionsOnSave source.fixAll.eslint to true
    5. Check result for linting error
    6. npm install eslint-config-airbnb-base and eslint-plugin-import
    7. Set extends to airbnb-base
    8. Set parseOptions to ecmaVersion 11 and sourceType to module
    9. Set rules for no-console to 0 to ignore linting error

11. Install VSCode Extensions
    1. JavaScript (ES6) code snippets
    2. ES7 React/Redux/GraphQL/React-Native snippets
    3. Prettier - Code formatter
    4. HTML$LESS grammar injections
    5. CSS Peek
    
12. Create Rating Component
    1. Create components/Rating.js
    2. Create  div.rating
    3. Link to fontawesome.css in index.html
    4. Define Rating object with render()
    5. If !props.value return empty div
    6. Else use fa fa-star, fa-star-half-o and fa-star-o
    7. Last span for props.text || ''
    8. Style div.rating, span and last span
    9. Edit HomeScreen
    10. Add div.product-rating and use Rating component

13. Product Screen
    1. Get product ID from request
    2. Implement /api/product/:id API
    3. Send Ajax request to product API
    4. Create back to result link
    5. Create div.details with 3 columns
    6. Column 1 for product image
    7. Column 2 for product information
    8. Column 3 for product action
    9. Style .details and all colums
    10. Create add to cart button with add-button ID
    11. after_render() to add event to the button
    12. Redirect user to cart/:product_id

14. Add to Cart Action
    1. Create CartScreen.js
    2. parseRequestUrl
    3. 