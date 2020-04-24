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
      const { data: response } = await api.post('/sessions', data);

      localStorage.setItem('@Scient:USER_INFO', JSON.stringify(response.user));
      localStorage.setItem('@Scient:AUTH_TOKEN', JSON.stringify(response.token));
      api.defaults.headers.Authorization = `Bearer ${response.token}`;
      setAuthenticated(true);
      history.push('/');
    } catch (error) {
      toast.error(error.response.data.message || 'Erro interno', {
        position: toast.POSITION.TOP_LEFT
      });
    }
  }

  function loggedInUserInfo() {
    const user = localStorage.getItem('@Scient:USER_INFO')
    return JSON.parse(user);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('@Scient:AUTH_TOKEN');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }

  return { authenticated, loading, handleLogin, handleLogout, loggedInUserInfo };
}
