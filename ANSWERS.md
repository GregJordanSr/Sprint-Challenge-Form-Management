# Answers

- [ ] Why are forms used so often in web applications and software?

    Forms are used to collect user data and we are constantly using that data to target our users directly.

- [ ] What advantages are there by using a forms library like Formik?
    1. The special validation Schema with Yup
    2. It's approach to rendering props.
    3. The ability to write less code that you would if you were using React alone.


- [ ] What is stateful logic?

    Stateful logic refers to the logic that is built into a component that interacts with the state of that component it's built into.


- [ ] What is a custom hook, and what does it mean to compose hooks together?

    A custom hook is one that is built on the useState pattern in which stateful logic is built into it and it can imported and reused         anywhere in an application. The hooks can be composed together to combine stateful logic of multiple custom hooks, therefore giving   that combined hook advanced stateful logic.

- [ ] Describe the process of retriving a token from a server and using that token in subsequent API calls.

Basically, a request is sent to a server with specific information (cookie) used to identify or remind the server about the client, then the server issues a JWT with encrypted text that is stored on the client using it's storage.  These token's are read and understood by the server, which determines what permissions the user has, but only if the credentials which consist of a payload (username and password), are known by the server.  Afterwards the application takes over with adding authorization which in turn allows the user access to protected information.
