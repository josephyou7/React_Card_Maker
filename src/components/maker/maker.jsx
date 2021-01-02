import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {
  const [cards, setCards]=useState([
      {
        id:'1',
        name: 'joseph',
        company:'Light',
        theme:'dark',
        title:'Software Engineer',
        email:'josephyou7@msn.com',
        message:'go for it',
        fileName:'joseph',
        fileURL: null,
      },
      {
        id:'2',
        name: 'mike',
        company:'GNS',
        theme:'light',
        title:'Production Engineer',
        email:'mike@msn.com',
        message:'let us work',
        fileName:'mike',
        fileURL:null,
      },
      {
        id:'3',
        name: 'Kelly',
        company:'GNS',
        theme:'colorful',
        title:'Human Resource',
        email:'Kelly@gnsauto.com',
        message:'Salary',
        fileName:'Kelly',
        fileURL:null,
      },
  ]);
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
      authService.onAuthChange(user => {
        if (!user) {
          history.push('/');
        }
      });
    });
    return (
      <section className={styles.maker}>
        <Header onLogout={onLogout}/>
        <div className={styles.container} >
         <Editor cards={cards}/>
         <Preview cards={cards}/>
         </div>
        <Footer/>
      </section>



    );

};

export default Maker;