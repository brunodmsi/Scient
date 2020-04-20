import React, { useContext } from 'react';
import { Form } from '@rocketseat/unform';

import { Context } from '~/context/AuthContext';

export default function Home(){
  const { handleLogout } = useContext(Context);

  return(
    <>
      <h1>Home</h1>
      <Form onSubmit={handleLogout}>
        <button type="submit">Sair</button>
      </Form>
    </>
  )
}
