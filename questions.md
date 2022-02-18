### Questions and Answers

1. What is the difference between Component and PureComponent? give an
   example where it might break my app.\
   Answer: A component rerenders when its props or state changes whereas a pure component does a shallow comparison between both its previous state and props and current state and props then decides if to rerender or not. in turn this gives the component a performance boost by avoiding unnecessary rerenders.
   A Pure component if your component already implements shouldComponentUpdate as this is what PureComponent tries to implement for you. If done your component could potentially skip updates.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?\
   Answer: All created context have providers and consumers, Anytime the value of a context provider changes all consumer components rerender i.e components which use either consumerType for Class components and useConsumer hook for function components. This re-render bypasses even ShouldComponentUpdate which means that even if A Parent Components implement ShouldComponentUpdate or (PureComponents, memo) and skips update. A child component which consumes a context will still re-render regardless of the parent skipping update.

3. Describe 3 ways to pass information from a component to its PARENT?.\
   Answer: React has one way data binding. which means that data should ideally be passed from parent to child, however state changes can be used to trigger update to data which a parent component might be able to access using the following ways

   - Using callbacks by creating asynchronous handlers that are passed to child component which propagate information back to the parent component.
   - using a global state management solution e.g context api, redux or mobX.
   - using hooks to update a shared state between parent and child component.
   - lifting state up so its accessible for update by both child and parent. In this method The child component will be passed handlers that trigger update to lifted state there by making the information available to its parent component.

4. Give 2 ways to prevent components from re-rendering.\
   Answer:

- Extending PureComponents for Class based components, and Making use of Memo HigherOrder function for functional components.
- Avoid Passing Object Literals as props to components, if done make it a side effect.
- Using Keys to avoid re-render.
- using useMemo to optimize expensive function calls
- Using useCallBack to optimize recreation of functions.

5. What is a fragment and why do we need it? Give an example where it might break my app.\
   Answer: by default react component can only return one root element. Fragment is used to return multiple react elements without adding unnecessarily markup. The fragment itself is not returned when jsx is rendered to the DOM.
   Fragment might break an application especially layout when child element are not accounted for properly when using specific css properties that have parent -child relationships like `display:grid` and `display:flex`.

6. How many arguments does setState take and why is it async.\
   Answer: setState takes in two arguments the first argument is a either an object of the state to update or a callback function that return the updated state, the second parameter is a function you want to execute after the state has been updated.
   It is asynchronous because the state is not updates immediately because it is an expensive action so updates are made in batches.

7. List the steps needed to migrate a Class to Function Component.\
   Answer:
   - Class declarations should be changed to functions
   - component state should be changes to useState hook.
   - this.props should be changed to props instead.
   - All lifecycle method should be converted to functions to be called inside useEFfect hook.
   - render method should be removed and jsx should be return directly.
8. List a few ways styles can be used with components.\
   Answer:

   - by using imported style sheets.
   - by writing inline styles and passing it to the styles props.
   - by using Css modules to write statically scopes styles(i.e styles scopes to a component.)
   - by using a CSS-in-js solution e.g styled components styled-jsx, fela etc

9. How to render an HTML string coming from the server.\
   Answer: Html string coming from the server can be rendered by using the jsx property dangerouslySetInnerHTML.

run `npm start` or `yarn start` to get the project running

open browser and navigate to `http://localhost:3000/`
