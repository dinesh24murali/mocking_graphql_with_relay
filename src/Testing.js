import React, { useEffect, useState } from 'react';
import { HelloQuery } from './relay/graphql/query/Hello';
import { fetchQuery } from './relay/index';

export default function Testing({ environment }) {

  const [text, setText] = useState('');

  const makeApiCall = () => {
      fetchQuery(HelloQuery, {}, environment).subscribe({
        next: (data) => {
          setText(data.hello);
          console.log(data.hello)
        },
        error: (error) => {
        }
      });
  }

  useEffect(() => {
    makeApiCall();
  }, []);

  return (
    <div className="text-center">
      <div>{text}</div>
    </div>
  );
}
