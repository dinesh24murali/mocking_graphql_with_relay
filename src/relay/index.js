import { Environment, Network, RecordSource, Store, fetchQuery as fQ } from 'relay-runtime';

const BASE_URL = "http://localhost:8000";

function network(operation, variables) {
    let headers = { 'Content-Type': 'application/json' };
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

const environment = new Environment({
    network: Network.create(network),
    store: new Store(new RecordSource())
});


export function fetchQuery(query, variables = {}, isTestEnvironment) {
    return fQ(isTestEnvironment ? isTestEnvironment : environment, query, variables);
}


