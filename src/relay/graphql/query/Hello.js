import graphql from 'babel-plugin-relay/macro';

export const HelloQuery = graphql`
  query HelloQuery {
    hello
  }
`;

export const MeQuery = graphql`
query HelloMeQuery {
  me {
    id
    name
  }
}
`
