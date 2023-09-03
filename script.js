const cards = document.querySelector('.items-group__box__cards');
const rightbtn = document.querySelector('.items-group__button__button-right');
const leftbtn = document.querySelector('.items-group__button__button-left');

let widthItem;
let counItem = 0;

function clickItem() {
    widthItem = cards.offsetWidth;
    cards.style.transitionDuration = '0.8s';
    cards.style.transform = 'translate(-' + counItem * (widthItem + 34) + 'px)';
}

let a = 0;

if (a < 2) {

rightbtn.onclick = function() {

        if (counItem < 2) {
            counItem++;
            a++;
            clickItem();
        }

        if (a >= 1) {
            leftbtn.style.cursor = 'pointer';
            leftbtn.style.opacity = '1';
        } else {
            leftbtn.style.cursor = 'auto';
            leftbtn.style.opacity = '0.5';
        }

        if (a >= 2) {
            rightbtn.style.cursor = 'auto';
            rightbtn.style.opacity = '0.5';

        } else {
            rightbtn.style.cursor = 'pointer';
            rightbtn.style.opacity = '1';
        }

    }

} else {

    rightbtn.onclick = false;

}

if (a >= 0) {

    leftbtn.onclick = function() {

        if (counItem > 0) {
            counItem--;
            a--;
            clickItem();
        }
       
        if (a >= 1) {
            leftbtn.style.cursor = 'pointer';
            leftbtn.style.opacity = '1';

            if (a < 1) {
                leftbtn.style.cursor = 'auto';
                leftbtn.style.opacity = '0.5';
            }

        } else {
            leftbtn.style.cursor = 'auto';
            leftbtn.style.opacity = '0.5';
        }

        if (a >= 2) {
            rightbtn.style.cursor = 'auto';
            rightbtn.style.opacity = '0.5';
        } else {
            rightbtn.style.cursor = 'pointer';
            rightbtn.style.opacity = '1';
        }

    }

} else {
    leftbtn.onclick = false;

}

const sp = document.querySelector('.video-group__box__video__items').children;
const right = document.querySelector('.video-group__box__video__button-right');
const left = document.querySelector('.video-group__box__video__button-left');

const videos = document.querySelector('.video-group__box__video__cards');

let width;
let count = 0;

function click() {
    width = videos.offsetWidth;
    videos.style.transitionDuration = '0.8s';
    videos.style.transform = 'translate(-' + count * (width + 34) + 'px)';
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