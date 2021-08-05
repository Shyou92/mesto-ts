import React from 'react';
import Header from '../Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <main className='content'>
        <section className='profile'>
          <img
            src='#'
            className='profile__image'
            name='avatar'
            alt='Аватарка'
          />
          <button className='profile__edit'></button>

          <div className='profile__info'>
            <h2 className='profile__info-name'></h2>
            <button className='profile__info-edit'></button>
            <p className='profile__info-job'></p>
          </div>
          <button className='profile__add-button'></button>
        </section>

        <section className='elements'></section>
      </main>

      <footer className='footer'>
        <p className='footer__copyright'>&copy; 2020 Mesto Russia</p>
      </footer>

      <div className='popup' id='js-edit'>
        <div className='popup__container popup__container_content_text'>
          <button className='popup__close' type='button'></button>
          <h3 className='popup__title'>Редактировать профиль</h3>
          <form className='popup__form'>
            <section className='popup__form-section'>
              <input
                type='text'
                required
                className='popup__input popup__input_name'
                id='edit-name-popup'
                minlength='2'
                maxlength='40'
                name='name'
                placeholder='Имя'
              />
              <span
                className='popup__input_error'
                id='edit-name-popup-error'
              ></span>
            </section>
            <section className='popup__form-section'>
              <input
                type='text'
                required
                className='popup__input popup__input_job'
                id='edit-job-popup'
                minlength='2'
                maxlength='200'
                name='about'
                placeholder='Профессия'
              />
              <span
                className='popup__input_error'
                id='edit-job-popup-error'
              ></span>
            </section>
            <button className='popup__submit' type='submit'>
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className='popup' id='js-create'>
        <div className='popup__container popup__container_content_text'>
          <button className='popup__close' type='button'></button>
          <h3 className='popup__title'>Новое место</h3>
          <form className='popup__form' id='form-create'>
            <section className='popup__form-section'>
              <input
                type='text'
                required
                className='popup__input popup__input_title'
                id='create-title-popup'
                minLength='2'
                maxlength='30'
                name='name'
                placeholder='Название'
              />
              <span
                className='popup__input_error'
                id='create-title-popup-error'
              ></span>
            </section>
            <section className='popup__form-section'>
              <input
                type='url'
                required
                className='popup__input popup__input_link'
                id='create-link-popup'
                name='link'
                placeholder='Ссылка на картинку'
              />
              <span
                className='popup__input_error'
                id='create-link-popup-error'
              ></span>
            </section>
            <button
              className='popup__submit popup__submit_inactive'
              id='js-submit-disabled'
              disabled
              type='submit'
            >
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className='popup' id='js-image'>
        <div className='popup__container popup__container_content_image'>
          <img src='#' alt='' className='popup__image' />
          <h3
            className='popup__title popup__title_content-heading'
            id='js__title'
          ></h3>
          <button className='popup__close' type='button'></button>
        </div>
      </div>

      <div className='popup' id='js-confirm'>
        <form className='popup__container popup__form popup__container_confirm'>
          <h3 className='popup__title'>Вы уверены?</h3>
          <button className='popup__submit popup__submit_confirm' type='submit'>
            Да
          </button>
          <button className='popup__close' type='button'></button>
        </form>
      </div>

      <div className='popup' id='js-update'>
        <div className='popup__container popup__container_content_text popup__container_update'>
          <h3 className='popup__title'>Обновить аватар</h3>
          <form className='popup__form' novalidate>
            <section className='popup__form-section'>
              <input
                type='url'
                required
                className='popup__input popup__input-update'
                id='edit-ava-popup'
                name='update'
                placeholder='Обновимся?'
              />
              <span
                className='popup__input_error'
                id='edit-ava-popup-error'
              ></span>
            </section>
            <button
              className='popup__submit popup__submit_inactive'
              disabled
              type='submit'
            >
              Сохранить
            </button>
          </form>
          <button className='popup__close' type='button'></button>
        </div>
      </div>

      <template className='element-template'>
        <div className='element'>
          <img src='#' alt='' className='element__photo' />
          <button className='element__delete'></button>
          <div className='element__container'>
            <h2 className='element__heading'></h2>
            <div className='element__like-container'>
              <button className='element__like' type='button'></button>
              <span className='element__like-counter'></span>
            </div>
          </div>
        </div>
      </template> */}
    </div>
  );
}

export default App;
