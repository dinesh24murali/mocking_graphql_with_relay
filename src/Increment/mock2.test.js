import { screen, fireEvent, waitFor } from '@testing-library/react';
const {
  createMockEnvironment,
  MockPayloadGenerator,
} = require('relay-test-utils');
import ReactTestRenderer from 'react-test-renderer';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { customRender, SetTestingEnv } from 'testUtils/test-utils';
import IncrementerContainer from 'containers/IncrementerContainer';

const server = setupServer(
  rest.get('http://localhost:6318/data.json', (req, res, ctx) => {
    return res(ctx.json({ data: { number: 99 } }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders learn react link', async () => {
  const environment = createMockEnvironment();

  /**
   * SET 1:
   * This will add the initial query to the queue
   */
  // environment.mock.queueOperationResolver((operation) =>
  //   MockPayloadGenerator.generate(operation, {
  //     String() {
  //       return "What is that?";
  //     },
  //     ID() {
  //       return '12'
  //     }
  //   }),
  // );

  const { debug } = customRender(
      <SetTestingEnv environment={environment}>
        <IncrementerContainer />
      </SetTestingEnv>
  );

  /**
   * SET 2:
   * This also worked
   */
  const operations = environment.mock.getAllOperations();
  ReactTestRenderer.act(() => {
    operations.forEach(operation => {
      environment.mock.resolve(
        operation,
        MockPayloadGenerator.generate(operation, {
          String() {
            return "What is this?";
          },
          ID() {
            return '12'
          }
        })
      );
    });
  });
  /**
   * SET 1:
   * I made 5 API calls and only if I add these two here were they working
   */
  // ReactTestRenderer.act(() => {
  //   environment.mock.resolveMostRecentOperation(operation =>
  //     MockPayloadGenerator.generate(operation, {
  //       String() {
  //         return "What is this?";
  //       },
  //       ID() {
  //         return '12'
  //       }
  //     }),
  //   );
  //   environment.mock.resolveMostRecentOperation(operation =>
  //     MockPayloadGenerator.generate(operation, {
  //       String() {
  //         return "What is this?";
  //       },
  //       ID() {
  //         return '12'
  //       }
  //     }),
  //   );
  // });

  const button = screen.getByTestId('decrement');
  fireEvent.click(button);
  // screen.getAllByText("");
  const linkElement = await waitFor(() => screen.getByText('What is this?'), { timeout: 2000 })

});
