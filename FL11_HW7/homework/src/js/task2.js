let play, total = 0, i = 0, range = 8, num, prize = [100, 50, 25], attempt, gues, win = false, second = true;
play = confirm('Do you want to play a game?');
if (!play) {
    alert('You did not become a billionaire, but can.');
} else {
    while (second) {
        win = false;
        range = 8;
        total = 0;
        prize = [100, 50, 25];
        outer : for (i = 0; play; i++) {
            num = Math.floor(Math.random() * range + 1);
            for (attempt = 0; attempt < 3 && !win; attempt++) {
                gues = prompt('Choose a roullete pocket number from 0 to ' + range +
                    '\nAttempts left: ' + (3 - attempt) +
                    '\nTotal prize: ' + total +
                    '\nPossible prize on current attempt: ' + prize[attempt]);
                if (gues === '' || isNaN(+gues) || gues === null) {
                    alert('Wrong input. Enter a number within range.');
                    attempt--;
                    continue
                }
                gues = +gues;
                if (gues === num) {
                    total += prize[attempt];
                    win = true;
                }
            }
            if (!win) {
                break outer;
            } else {
                alert('Congratulation, you won!   Your prize is: ' + prize[attempt-1] + '$.');
            }
            play = confirm('Do you want to continue?');
            range += 4;
            prize.forEach((item, i, arr) => {
                arr[i] *= 2
            });
            win = false;
        }
        alert('Thank you for your participation. Your prize is: ' + total + '$.');
        second = confirm('Play again?');
    }
}