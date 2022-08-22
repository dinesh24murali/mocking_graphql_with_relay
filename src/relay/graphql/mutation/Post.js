import graphql from 'babel-plugin-relay/macro';

export const PostMutation = graphql`
  mutation PostMutation($input: String!) {
    post(data: $input) {
      id
      name
    }
  }
`;
