/**
 * @generated SignedSource<<b49272e1b93b282a2b905b6bf11f868a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "me",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HelloMeQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HelloMeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "44dca942fde36c666e194671229f028f",
    "id": null,
    "metadata": {},
    "name": "HelloMeQuery",
    "operationKind": "query",
    "text": "query HelloMeQuery {\n  me {\n    id\n    name\n  }\n}\n"
  }
};
})();

node.hash = "63ea669bf406a1d952e49c8f084d8156";

module.exports = node;
