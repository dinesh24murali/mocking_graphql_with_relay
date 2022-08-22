import React, { useEffect, useState } from 'react';
import { HelloQuery } from 'relay/graphql/query/Hello';
import { fetchQuery } from 'relay/index';

export default function Incrementer({ environment }) {

  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');

  const makeApiCall = () => {
    if (environment)
      fetchQuery(HelloQuery, {}, environment).subscribe({
        next: (data) => {
          setText(data.hello);
        },
        error: (error) => {
        }
      });
  }

  useEffect(() => {
    makeApiCall();
  }, []);

  const increaseCount = () => {
    setNumber(state => {
      return state + 1;
    });
  };

  const decrementCount = () => {
    setNumber(state => {
      return state - 1;
    });
  };

  const makeCall = () => {
    makeApiCall();
  };

  return (
    <div className="text-center">
      <h1>{number}</h1>
      <button data-testid="increment" className="mr-3 text-4xl" onClick={increaseCount}>
        &#8657;
      </button>
      <button data-testid="decrement" className="text-4xl" onClick={decrementCount}>
        &#8659;
      </button>
      <div>{text}</div>
      <button data-testid="makeapicall" className="mt-3 mr-3 text-sm" onClick={makeCall}>
        Make Api Call
      </button>
    </div>
  );
}
