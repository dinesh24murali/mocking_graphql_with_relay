/**
 * @generated SignedSource<<b4d32ef551ad449d9bb9c641b97499b7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "input"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "post",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "82ea13f3b00be6f8ed76eaf4a7594a57",
    "id": null,
    "metadata": {},
    "name": "PostMutation",
    "operationKind": "mutation",
    "text": "mutation PostMutation(\n  $input: String!\n) {\n  post(data: $input) {\n    id\n    name\n  }\n}\n"
  }
};
})();

node.hash = "f98130bad92de27c674c0938bedf5de5";

module.exports = node;
