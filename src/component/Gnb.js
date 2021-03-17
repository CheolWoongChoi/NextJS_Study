import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'semantic-ui-react';

export default function Gnb() {
  const router = useRouter();
  let activeItem;

  if (router.pathname === '/') {
    activeItem = 'home';
  } else if (router.pathname === '/about') {
    activeItem = 'about';
  }

  const goLink = useCallback((e, data) => {
    if (data.name === 'home') {
      router.push('/');
    } else if (data.name === 'about') {
      router.push('/about');
    } else if (data.name === '') {
      
    }
  }, []);

  return (
    <Menu inverted>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={goLink}
      />
      <Menu.Item
        name='about'
        active={activeItem === 'about'}
        onClick={goLink}
      />
      <Menu.Item
        name='friends'
        active={activeItem === 'friends'}
        onClick={goLink}
      />
    </Menu>
  );
}
