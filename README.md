# Mocking graphQL calls in unit test cases

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This simple application that demonstrates how to mock graphql api calls that happned when we are running unit test cases. This setup prevents the need for running the backend server to handle the API calls made when running test cases. This setup is only for react applications that uses [relay](https://relay.dev/docs/guides/compiler/).

### Required packages:
The following are the additional packages that are needed
 - @testing-library/react
 - relay-test-utils
 - react-test-renderer
 - relay-runtime
 - react-relay
 - @reduxjs/toolkit
 - babel-plugin-relay