import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_VITAL_SIGNS } from '../graphql/queries';

const ViewVital = ({ userId }) => {
  const { loading, error } = useQuery(GET_VITAL_SIGNS, {
    variables: { userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>View Previous Vital Signs</h2>
      <ul>
      </ul>
    </div>
  );
};

export default ViewVital;
