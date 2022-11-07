# mma-rps
HTML/Javascript mini RPS game with some multiplayer function.

Personal project for a virtual engagement game where there is two fighters with randomised RPS attacks behind the 3 buttons.
Not rigged and extremely based on luck for extra fun factor.

Some customisation to add fighter's name to replace the default and capability to store score persistently until 'Clear All' is clicked.

New Round - re-randomise RPS values for both players
Clear All - clear everything

Still lacking some proper failsafe to prevent fighter 2 from going first or blanking out buttons when an attack had been clicked. Some logic errors behind where if fighter 2 were to click first, the score logic gets launched, by fault of my limited experience with js.
