import React, { useEffect, useState } from 'react';
import { HelloQuery } from 'relay/graphql/query/Hello';
import { fetchQuery } from 'relay/index';

export default function Incrementer({ environment }) {

  const [text, setText] = useState('');

  const makeApiCall = () => {
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

  const makeCall = () => {
    makeApiCall();
  };

  return (
    <div className="text-center">
      <div>{text}</div>
      <button data-testid="makeapicall" className="mt-3 mr-3 text-sm" onClick={makeCall}>
        Make Api Call
      </button>
    </div>
  );
}
