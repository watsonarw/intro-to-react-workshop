# intro-to-react-workshop

## Instructions

---

### Setting up

1. Install NodeJS from https://nodejs.org
2. Install VSCode from https://code.visualstudio.com

    _Note: You can use another editor if you'd prefer, but VSCode works well_

    Recommended VSCode plugins:
    - ESLint: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
3. Windows users: Restart your machine (sorry)

---

### Creating a React app

1. Open VSCode, and open the folder you want to work in

    _(we recommend creating a new folder, something like `~/src/intro-to-react`)_

2. Open a new terminal inside vscode

    Keyboard shortcut: ``Ctrl + ` ``

3. In the terminal run the command `npx create-react-app myapp`

    This will download half the internet and setup a "hello world" react app

4.  `cd myapp`
5.  `npm start`

Congratulations, you've created your first react app!
(Let's have a quick look at what was generated)

---

### Let's talk about Components

- Components are the primary building blocks of a react app. You define components, and you compose them into an app.
- Think of components as classes, they should be lowly coupled, and highly cohesive — this includes DOM structure (HTML), styling (CSS) and view logic (Javascript).
- Two types of components, functions, and classes. For this workshop, we're going to focus on classes
- You can think of the functional component as being _like_ the `render` function of a class (it's not quite, but it helps to think of it that way)

1. Open `App.js`
2. Change the `App` component from a function to a class
3. What is JSX? (it's kind of like html)
4. Let's change the JSX.
5. The styling is defined in `App.css` let's have a look, and change things
6. React is testable see `App.test.js`. We're going to skip tests today, but normally we'd use TDD when building our app.

---

### Writing a new component

We're building a chatroom, let's start with sending messages

1. We're building a `ChatRoom`, let's make a new component in `src/ChatRoom.js`
2. All components need to have 1 "root element", and can have other elements inside. Let's create a `div` for the root.
3. Add a heading for the chatroom e.g. `My Chat room`
4. Add a `section` for the new message, `label`, `textarea` and `button`
5. Export the `ChatRoom` component and import it into `App`.
6. It looks terrible, let's add some style to it.

    _Note: normally we wouldn't add styles this way, because it gets difficult to manage as the app grows. There are libraries like `styled-components` which help with this, we'll have some links at the end if you want to learn more_

---

### Component re-use and passing props

One of the big benefits of react, is that we can reuse components.

1. Add a second ChatRoom component in `App.js`
2. Change the `ChatRoom` component to accept a `name` prop, that it renders in the heading
3. See that the component has rendered twice with a different heading.
4. Remove the second `ChatRoom` it looks strange, but if we get far enough, we'll re-use this knowledge later.

---

### State, and using data from forms

React gives us a way to manage app state, so that we can use the data we enter in our forms.
1. Add some state to the `ChatRoom` component, we'll add a `sentCount` with a default value of `0`.
2. To use this, let's add a little note below the send button.
3. We want to update this, so lets add an `onClick` handler to the button.

    A few things to watch out for:
    - For `sendHandler` use an arrow function to automatically `bind(this)` to the function.
    - Don't mutate the existing value for `sentCount` directly, but use setState to set a new value. This is an optimisation in react, if it can assume values are immutable, it can know when to update components, and when not to.


---

### Better state, and API calls

This state goes away when we refresh the page, so it's not very useful. What we _really_ want to do is save things to an API, and get them back later.

1. Add the `message` to state, and an `onChange` handler to the `textarea` to update it.

    We want to `POST` the data to an endpoint (and luckily we've created one for you)

    `POST https://chatapi.site/messages`
    expects the following JSON payload (and will fail if it doesn't get it):
    ```json
    {
      "message": "This message should come from the textarea",
      "user": "We passed this in via props"
    }
    ```

2. Use `fetch` to send the message:

    Use an `async function`, this will be cleanest easiest.
    The `options` argument you'll have to pass to `fetch` will look something like:
    ```js
    sendMessage = async () => {
      let data = { user: this.props.name, message: this.state.message };
      await fetch('https://chatapi.site/messages',
      {
        method: 'POST',
        body: JSON.stringify(data),
      });
    }
    ```
    You can use `result.ok` to check if the response was successful, and `await response.json()` to read the response body (for debugging).

    _Your browser's developer tools can show you what was sent, and what was received_

You can now write a react app, with styling, and send data to an API.

---

### Reading data from the API

The next step is reading data (which is easier than sending it). If we don't get here, you can do this in your own time.

1. Create a new `Message` component in `src/Message.js`
2. Our `Message` component will be a `div`, it will have a `p` for the message, a `h5` for the author. We'll pass in `message` and `author` from props.

3. Create another `section` in the `ChatRoom` for showing the existing messages. This is going to show a list of messages, rendered as components
4. In our `ChatRoom` component, we want to render a `Message` component for each message. We can use `messages.map` for this (passing the correct props). It should look something like:


```jsx
<section>
  <h3>Messages:</h3>
  { this.state.messages.map((message) =>
    (<Message message={message} />)
  )}
</section>
```

5. We need to fetch the messages from the API! In our `ChatRoom` component, add a `componentDidMount` method that will fetch the messages from `https://chatapi.site/messages` and set the `messages` from the response in state.

    Use fetch again, it should look something like

    ```js
    getMessages = async () => {
      const response = await fetch('https://chatapi.site/messages');
      const responseJson = await response.json();

      if (response.ok) {
        return responseJson.messages
      } else {
        throw new Error(`Failed to fetch messages: ${responseJson}`);
      }
    }

    componentDidMount = async () => {
      const messages = await this.getMessages();
      this.setState({ messages: messages });
    }
    ```

    _Don't forget to add `messages: []` to the initial state._


---

### Extracting components

Our codebase is looking like a bit of a mess. It might make sense to clean it up a bit
Recommended components to extract:

  `NewMessageSection`

  The fields for creating a new message. The new message section can also take the `sendMessage` function and handlers with it, and the styling for the new message section should live with the component (e.g. in `NewMessageSection.css`)

  `MessageList`

  The list of new messages. Can also include the logic for getting messages from the API. We didn't style this section yet either, so we can do that too

---

## Useful links

### React

- React docs: https://reactjs.org/
- Official react tutorial: https://reactjs.org/tutorial/tutorial.html
- Video tutorials about react: https://egghead.io/browse/frameworks/react
- Some more project ideas: https://daveceddia.com/your-own-react-project-ideas/
- React developer tools for your browser: https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html

### Styling
- Styled-components: https://www.styled-components.com/
- Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

### Modern Javascript
- MDN Javascript, Html, CSS docs: https://developer.mozilla.org/
