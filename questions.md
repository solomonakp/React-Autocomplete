# Part 2

Please answer the following questions to the best of your knowledge, in clear
English. Elaborate and try to demonstrate the React knowledge you have. Feel free
to give examples and use cases.

### Questions and Answers

1. What is the difference between Component and PureComponent? give an
   example where it might break my app.\
   Answer: A component rerenders when its props or state changes whereas a pure component does a shallow comparison between both its previous state and props and current state and props then decides if to rerender or not. it turn this gives the component a performance boost by avoiding unnecessary rerenders. Pure Components should be used when state is immutable and might skip updates if all its descendant components are not pure also.

2. Describe 3 ways to pass information from a component to its PARENT.\
   Answer: React has one way data binding. which means that data can only be passed from parent to child, however state changes can be used to trigger update to data which a parent component might have by some of the following ways

   - lifting state up so its accessible for update by both child and parent component via asynchronous calls.
   - using a global state management solution e.g context api, redux or mobX.
   - using hooks to update a shared state between parent and child component.

3. Give 2 ways to prevent components from re-rendering.\
   Answer:

- for Class Component Pure Components can be used
- for functional components memo can be used.

4. What is a fragment and why do we need it? Give an example where it might break my app.\
   Answer: by default react component can only return one root element. Fragment is used to return multiple react elements without making adding unnecessarily markup

run `npm start` or `yarn start` to get the project running

open browser and navigate to `http://localhost:3000/`
