import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('@Scient:AUTH_TOKEN');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, [])

  async function handleLogin(data) {
    try {
      const { data: { token } } = await api.post('/sessions', data);

      localStorage.setItem('@Scient:AUTH_TOKEN', JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      history.push('/');
    } catch ({ response }) {
      toast.error(response.data.message, {
        position: toast.POSITION.TOP_LEFT
      });
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('@Scient:AUTH_TOKEN');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
