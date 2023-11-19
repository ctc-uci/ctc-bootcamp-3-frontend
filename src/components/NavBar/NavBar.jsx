import React from 'react';
import styles from './NavBar.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HangmanGame from '../HangmanGame/HangmanGame';
import HangmanView from '../../views/HangmanView/HangmanView';

const NavBar = () => {
  return (
    <nav>
        <div className='nav-div'>
            <ul className='nav-list'>
                <li className='nav-list-element'><a href="/">Home</a></li>
                <li className='nav-list-element'><a href="/hangman">Hangman</a></li>
                <li className='nav-list-element'><a href='/rps'>Rock Paper Scissors</a></li>
                <li className='nav-list-element'><a href='/truthslies'>Two Truths and a Lie</a></li>
            </ul>
        </div>
    </nav>
  );
}

export default NavBar;
