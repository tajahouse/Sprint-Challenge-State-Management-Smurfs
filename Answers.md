1. What problem does the context API help solve?
- Prop drilling is no longer an issue

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are events that send data from the application triggered by user interactions, API calls, form submissions, and etc to the store 
The reducer is a pure function that takes the previous state and an action, and returns the next state.
Everything that changes within your application is represented by a single JS object known as the `store`. It is the only "source of truth". The `store` is created with a function called `reducer`.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the "global" state that all components in the component tree can access, through cursors. 
Component local state is state that is local to a single component and cannot be seen outside of this component. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is a middleware that looks at every action that passes through the system, and if it's a function, it calls that function. That's all it does.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
I very much like Redux. Although it is a lot of boiler plate, for me it is more clear what is happening and I feel more in control.
