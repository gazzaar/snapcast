import React from 'react';
import Header from '@/components/Header';

const Page = () => {
  return (
    <main className='wrapper page'>
      {' '}
      <Header title='All videos' subHeader='Public Library' />
      <h1 className='text-2xl font-karla'>Weclome to loom clone</h1>
    </main>
  );
};

export default Page;
