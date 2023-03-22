import React from 'react';
import { useParams } from 'react-router-dom';
import { Feed } from '../../Components/Feed/Feed';
import { Head } from '../../Components/Helper/Head';

export const UserProfile = () => {
  const { user } = useParams();
  return (
    <section className="container mainSection">
      <Head title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};
