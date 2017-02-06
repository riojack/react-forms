# Forms with React

This app demonstrates a simple way to collect user input and save it to the server when the user clicks the Save button.

### Running this app

1. Run `npm install`
2. Run `npm run build`
3. Run 'npm run example', which starts a server on port `3700`.
4. Open your browser to `localhost:3700`.

In the text box, type some text then click the Save button.

Upon clicking Save, the data typed in the text field will be sent to the server in an HTTP POST request.  The server will `console.log` the JSON it receives.
