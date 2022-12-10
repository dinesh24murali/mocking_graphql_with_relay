import { screen, waitFor } from '@testing-library/react';
import {
  createMockEnvironment,
  MockPayloadGenerator,
} from 'relay-test-utils';
import ReactTestRenderer from 'react-test-renderer';

import { customRender } from './testUtils/test-utils';
import Testing from './Testing';

test('Mocking GraphQL queries', async () => {

  const environment = createMockEnvironment();

  customRender(
    <Testing environment={environment} />
  );

  const operations = environment.mock.getAllOperations();
  ReactTestRenderer.act(() => {
    operations.forEach(operation => {
      environment.mock.resolve(
        operation,
        MockPayloadGenerator.generate(operation, {
          String() {
            return "Sample";
          },
          ID() {
            return '12'
          },
        //   User() {
        //     return {
        //         id: '121',
        //         name: 'Ember'
        //     }
        //   }
        })
      );
    });
  });
  await waitFor(() => screen.getByText('Sample'), { timeout: 2000 })

});
