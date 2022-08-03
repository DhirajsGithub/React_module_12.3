## useHistory Hook from react-router-dom 
when there is form submission  <br>
helps to navigate the history of pages by push(can go back to inital page) or replace(replace the inital page with new one) method, both the methods will rerender the page <br>

## Prompt component :
This is a component which we can render. And then this component will automatically watch if we navigate away. And if then a certain condition is met, it will show a warning before it allows us to leave.
### accept two props <em>when</em>(when to show Prompt component)  and <em>message</em> (what to show in that component, have location as an argument)

## Query Parameters :
Query parameters are a defined set of parameters attached to the end of a url. They are extensions of the URL that are used to help define specific content or actions based on the data being passed.

## useLcation() hook :
useLocation gives us access to a location object which has information about the currently loaded page, about the currently loaded URL.

### The URLSearchParams interface defines utility methods to work with the query string of a URL

## Writing more flexible routing code:
## useRouteMatch() hook:
kind of similar to useLocation() hook but Not just about the URL but about some internally managed data React Router is aware of.

## added a lazy loading to optimize production ready app
with React.lazy and suspense component whichi is wrap around all component in App.js and having a fallback function 

## deployin app to firebase 
`npm run build` <br>
A React Single Page Application is a "static website" only HTML CSS and JS
<br>
a static site host is needed <br>

`npm install -g firebase-tools` <br>
`firebase login` <br>
`firebase init` <br>
with sapce selecte the hosting option and press enter > use an existing project > use build name as public directory > configure as SPA y > setup automatic deploy with github <br>

`firebase deploy`