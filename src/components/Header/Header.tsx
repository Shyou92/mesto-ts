import Logo from '../../images/Vector.svg';

const Header: React.FC = () => {
  return (
    <header className='header header__line'>
      <img src={Logo} className='header__logo' alt="Логотип сайта 'Место'." />
      {/* <Route path='/sign-up'>
      <Link className='header__link' to='sign-in'>
        Войти
      </Link>
    </Route>
    <Route path='/sign-in'>
      <Link className='header__link' to='sign-up'>
        Регистрация
      </Link>
    </Route>
    <Route exact path='/'>
      <div className='header__container'>
        <p className='header__container-text'>{userData}</p>
        <Link to='/sign-in'>
          <button className='header__link' onClick={handleSignOut}>
            Выход
          </button>
        </Link>
      </div>
    </Route> */}
    </header>
  );
};

export default Header;
