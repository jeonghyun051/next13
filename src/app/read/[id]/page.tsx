import React, { useEffect } from 'react';

interface PropsType {
  params: {
    id: string;
  };
  searchParams: object;
}

const Read = async (props: PropsType) => {
  const res = await fetch(`http://localhost:3001/topics/${props.params.id}`);
  const topic = await res.json();

  return (
    <>
      <div>{topic.title}</div>
      {topic.body}
    </>
  );
};

export default Read;
