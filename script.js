const sp = document.querySelector('.video-group__box__video__items').children;
const right = document.querySelector('.video-group__box__video__button-right');
const left = document.querySelector('.video-group__box__video__button-left');

const videos = document.querySelector('.video-group__box__video__cards');

let count = 0;
let width = videos.offsetWidth;

function click() {
    videos.style.transform = 'translate(-' + count * (width + 734) + 'px)';
}

let x = 0;
let y = 0;

if (y < 9) {

    right.onclick = function() {

        if (count < 9) {
            count++;
            click();
        }

        if (x >= 1) {
            left.style.cursor = 'pointer';
            left.style.opacity = '1';
        } else {
            left.style.cursor = 'auto';
            left.style.opacity = '0.5';
        }

        if (y >= 9) {
            right.style.cursor = 'auto';
            right.style.opacity = '0.5';

        } else {
            right.style.cursor = 'pointer';
            right.style.opacity = '1';

            y++;

            sp[y].style.background = '#21201f';
            sp[y].style.opacity = '1';
            sp[x].style.background = '#808080';
            sp[x].style.opacity = '0.6';

            x++;

            if (y >= 9) {
                right.style.cursor = 'auto';
                right.style.opacity = '0.5';
    
            }

            if (x >= 1) {
                left.style.cursor = 'pointer';
                left.style.opacity = '1';
            }

        }

    }

} else {

    right.onclick = false;

}

if (x >= 0) {

    left.onclick = function() {

        if (count > 0) {
            count--;
            click();
        }
       
        if (x >= 1) {
            left.style.cursor = 'pointer';
            left.style.opacity = '1';

            x--;

            sp[x].style.background = '#21201f';
            sp[x].style.opacity = '1';
            sp[y].style.background = '#808080';
            sp[y].style.opacity = '0.6';
            
            y--;

            console.log(x);
            console.log(y);

            if (y < 1) {
                left.style.cursor = 'auto';
                left.style.opacity = '0.5';
            }

        } else {
            left.style.cursor = 'auto';
            left.style.opacity = '0.5';
        }

        if (y >= 9) {
            right.style.cursor = 'auto';
            right.style.opacity = '0.5';
        } else {
            right.style.cursor = 'pointer';
            right.style.opacity = '1';
        }

    }

} else {

    left.onclick = false;

}