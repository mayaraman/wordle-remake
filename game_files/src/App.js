import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

var current_guess = 1;
var current_col = 0;
var current_guess_word = "";
var correct_word = "HEDGE";


function App() {

  document.addEventListener('DOMContentLoaded', function() {
    var all_keys = document.getElementsByClassName('key');
 //  console.log(all_keys);
    for (let i = 0; i < all_keys.length; i++) {
      let curr_key = all_keys[i];
      curr_key.addEventListener('click', () => type_letter(curr_key))
    }

    function type_letter(letter) {
      var letter_value = letter.innerHTML;
      var grid_items = document.getElementsByClassName("guess_" + current_guess);

      if (letter_value == "ENTER") {
        submit_guess(grid_items, letter);
      }
      else if (letter_value == "BACK") {
        delete_letter_from_guess(grid_items);
      }
      else {

        if (current_guess_word.length < 5) {
          var curr_space = grid_items[current_col];
          curr_space.innerHTML = letter_value;
          current_guess_word = current_guess_word + letter_value + ""
          console.log(current_guess_word);
          current_col = current_col + 1;

        }
      }
      


      
     // var g = document.getElementsByClassName('guess_1');
      //console.log(g)


    }

    function submit_guess(grid_items, curr_key) {
      if (current_guess_word.length == 5) {
        current_col = 0;
        current_guess = current_guess + 1;
  
        for (let i = 0; i < 5; i++) {
          var guess_tile = grid_items[i];
          var tile_letter = guess_tile.innerHTML;
          var keyboard_tile = (document.getElementsByClassName(tile_letter))[0];
          console.log(keyboard_tile);
          
          if (tile_letter == correct_word[i]) {
            guess_tile.style.backgroundColor = 'green';
          }
          else if (correct_word.includes(tile_letter)) {
            guess_tile.style.backgroundColor = '#ffae42';
          }
          else {
            guess_tile.style.backgroundColor = 'grey';
            keyboard_tile.style.backgroundColor = 'rgb(53, 52, 52)';
            
          }
        }

      }

      current_guess_word = "";

      
    }

    function delete_letter_from_guess(grid_items) {
      if (current_col != 0) {
        current_guess_word = current_guess_word.substring(0, current_guess_word.length - 1);
        current_col = current_col - 1;
        let current_tile = grid_items[current_col];
        current_tile.innerHTML = " "

      }
      
    }



  });

  


  return (
    <div className="App">
      <h1>W O R D L E</h1>
    <div className = "flex-grid"> 
      <div className="grid-container">


    <div className="grid-item guess_1"></div>
    <div className="grid-item guess_1"></div>
    <div className="grid-item guess_1"></div>
    <div className="grid-item guess_1"></div>
    <div className="grid-item guess_1"></div>



    <div className="grid-item guess_2"></div>
    <div className="grid-item guess_2"></div>
    <div className="grid-item guess_2"></div>
    <div className="grid-item guess_2"></div>
    <div className="grid-item guess_2"></div>



    <div className="grid-item guess_3"></div>
    <div className="grid-item guess_3"></div>
    <div className="grid-item guess_3"></div>
    <div className="grid-item guess_3"></div>
    <div className="grid-item guess_3"></div>


    <div className="grid-item guess_4"></div>
    <div className="grid-item guess_4"></div>
    <div className="grid-item guess_4"></div>
    <div className="grid-item guess_4"></div>
    <div className="grid-item guess_4"></div>



    <div className="grid-item guess_5"></div>
    <div className="grid-item guess_5"></div>
    <div className="grid-item guess_5"></div>
    <div className="grid-item guess_5"></div>
    <div className="grid-item guess_5"></div>

    <div className="grid-item guess_6"></div>
    <div className="grid-item guess_6"></div>
    <div className="grid-item guess_6"></div>
    <div className="grid-item guess_6"></div>
    <div className="grid-item guess_6"></div>

  </div>
  </div>

  <div className="flex-keyboard">

  <div className="keyboard">
    <div className="row1">
    <div className="key Q">Q</div>
    <div className="key W">W</div>
    <div className="key E">E</div>
    <div className="key R">R</div>
    <div className="key T">T</div>
    <div className="key Y">Y</div>
    <div className="key U">U</div>
    <div className="key I">I</div>
    <div className="key O">O</div>
    <div className="key P">P</div>
    </div>

    <div className="row2">
    <div className="key A">A</div>
    <div className="key S">S</div>
    <div className="key D">D</div>
    <div className="key F">F</div>
    <div className="key G">G</div>
    <div className="key H">H</div>
    <div className="key J">J</div>
    <div className="key K">K</div>
    <div className="key L">L</div>
    </div>

    

    <div className="row3">
    <div className="key">ENTER</div>
    <div className="key Z">Z</div>
    <div className="key X">X</div>
    <div className="key C">C</div>
    <div className="key V">V</div>
    <div className="key B">B</div>
    <div className="key N">N</div>
    <div className="key M">M</div>
    <div className="key">BACK</div>
    
    </div>
    </div>

    


  </div>


    </div>
  );
}

export default App;
