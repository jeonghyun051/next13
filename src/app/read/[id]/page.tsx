'use client';
import React, { useEffect } from 'react';

interface PropsType {
  params: {
    id: string;
  };
  searchParams: object;
}

const Read = (props: PropsType) => {
  useEffect(() => {
    console.log('props : ', props);
  }, []);

  return (
    <>
      <div>Read!</div>
      {props.params.id}
    </>
  );
};

export default Read;
