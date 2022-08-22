import { screen, waitFor } from '@testing-library/react';
import {
  createMockEnvironment,
  MockPayloadGenerator,
} from 'relay-test-utils';
import ReactTestRenderer from 'react-test-renderer';

import { customRender } from 'testUtils/test-utils';
import Incrementer from 'Increment/index';

test('Mocking GraphQL queries', async () => {

  const environment = createMockEnvironment();

  customRender(
    <Incrementer environment={environment} />
  );

  const operations = environment.mock.getAllOperations();
  ReactTestRenderer.act(() => {
    operations.forEach(operation => {
      environment.mock.resolve(
        operation,
        MockPayloadGenerator.generate(operation, {
          String() {
            return "Testing";
          },
          ID() {
            return '12'
          }
        })
      );
    });
  });
  await waitFor(() => screen.getByText('Testing'), { timeout: 2000 })

});
