import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PATIENT_INFO } from '../graphql/queries';

const PatientPage = () => {
  const { loading, error, data } = useQuery(GET_PATIENT_INFO, {
    variables: { userId: 'patient_user_id' }, 
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Patient Page</h1>
      <h2>Daily Information</h2>
      <ul>
        {data.patientInfo.map(info => (
          <li key={info.id}>
            <p>Pulse Rate: {info.pulseRate}</p>
            <p>Blood Pressure: {info.bloodPressure}</p>
            <p>Weight: {info.weight}</p>
            <p>Temperature: {info.temperature}</p>
            <p>Respiratory Rate: {info.respiratoryRate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientPage;
