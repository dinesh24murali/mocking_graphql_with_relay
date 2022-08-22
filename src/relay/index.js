import React from 'react';
import { Environment, Network, RecordSource, Store, fetchQuery as fQ } from 'relay-runtime';
import { commitMutation, QueryRenderer as QR } from 'react-relay';

const AUTH_TOKEN = 'authToken';
const BASE_URL = 'http://localhost:8000';

function network(operation, variables) {
  const authToken = window.localStorage.getItem(AUTH_TOKEN);
  let headers = { 'Content-Type': 'application/json' };
  if (authToken) {
    headers['Authorization'] = 'JWT ' + authToken;
  }
  return fetch(`${BASE_URL}/graphql`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then((response) => {
    return response.json();
  });
}

export function makeApiCall({ method, url, data, isFromData = false }) {
  const authToken = window.localStorage.getItem(AUTH_TOKEN);

  let headers = {};
  if (!isFromData) headers['Content-Type'] = 'application/json';

  if (authToken) {
    headers['Authorization'] = 'JWT ' + authToken;
  }
  return fetch(`${BASE_URL}${url}`, {
    method: method,
    headers: headers,
    body: isFromData ? data : JSON.stringify(data)
  }).then((response) => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(network),
  store: new Store(new RecordSource())
});

function mutateBase({ mutation, variables, onSuccess, onErrors, loader }, isTestEnvironment) {
  const onCompleted = (response, errors) => {
    if (errors && errors.length > 0) {
      var messages = [];
      errors.forEach((error) => {
        messages.push(error.message);
      });
      messages = messages.join('; ');
      // ErrorAlert(messages);
      return onErrors(errors);
    }
    return onSuccess(response);
  };
  const onError = (err) => {
    return onErrors(err);
  };
  return commitMutation(isTestEnvironment ? isTestEnvironment : environment, {
    mutation,
    variables,
    onCompleted,
    onError
  });
}

function mutate({ mutation, input, onSuccess, onErrors = () => {}, loader = true }, isTestEnvironment) {
  const variables = { input };
  return mutateBase({ mutation, variables, onSuccess, onErrors, loader }, isTestEnvironment);
}

function QueryRenderer(props) {
  const onSuccess = props.onSuccess;
  // const loaderSize = props.loaderSize ? props.loaderSize : 'md';
  return (
    <QR
      environment={environment}
      render={({ error, props }) => {
        if (error) {
          return <div> {error.message} </div>;
        }
        if (props && Object.keys(props).length > 0) {
          return onSuccess(props);
        }
        // return <Loader size={loaderSize} />;
      }}
      {...props}
    />
  );
}

function fetchQuery(query, variables = {}, isTestEnvironment) {
  return fQ(isTestEnvironment ? isTestEnvironment : environment, query, variables);
}

export { QueryRenderer, mutate, fetchQuery, environment, mutateBase };
