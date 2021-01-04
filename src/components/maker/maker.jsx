import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {
  const [cards, setCards]=useState({
  1: {
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
  2: {
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
  3: {
    id:'3',
    name: 'Kelly',
    company:'GNS',
    theme:'colorful',
    title:'Human Resource',
    email:'Kelly@gnsauto.com',
    message:'Salary',
    fileName:'Kelly',
    fileURL:null,
  }
  
  });


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

   
    const createOrUpdateCard = card => {
      setCards(cards=>{
        const updated= {...cards};
        updated[card.id]=card;
        return updated;
      });  
    };

    const deleteCard = card => {
      setCards(cards=>{
        const updated= {...cards};
        delete updated[card.id];
        return updated;
    });  
  };
    return (
      <section className={styles.maker}>
        <Header onLogout={onLogout}/>
        <div className={styles.container} >
         <Editor cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}/>
         <Preview cards={cards}/>
         </div>
        <Footer/>
      </section>



    );

};

export default Maker;