const btnNav = document.querySelector(".nav-btn");
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav_items');

let isNavClose = true, isAnimating = false;

// Add An Effect To Each Of The List Item. 
const addClass = (nodes, className) => {
    setTimeout(() => {
        nodes.forEach((node, idx ) => {
            node.style.animationDelay = 0.2 + (idx * 0.1) + 's';
            node.classList.add(className);
        });
    }, 6);
}

// Remove An Effect To Each Of The List Item. 
const removeClass = (nodes, className) => {
    nodes.forEach( node => {
        node.classList.remove(className);
    });
}

const initClawEffect = () => {
    for(let i=0; i<4; i++){
        const effect = document.createElement('div');
        effect.className = 'claw-effect';
        effect.style.top = (i * 1) * 18 + '%';
        effect.style.transitionDelay = i * 0.1 + 's';
        nav.append(effect);
        effect.addEventListener('transitionend', e => e.stopPropagation());
    }
}

const navigationHandler = () => {
    btnNav.classList.toggle('nav-btn-active');
    nav.classList.toggle('nav-open');
    if(isAnimating) return;

    isAnimating = true;

    const nodes = document.querySelectorAll('.claw-effect');
    nodes.forEach( node => {
        node.classList.toggle('claw-effect-open');
    })

    if (isNavClose) {
        removeClass(navItems, 'nav_items_fadeout');
        addClass(navItems, 'nav_items_fadein');
    } else {
        removeClass(navItems, 'nav_items_fadein');
        addClass(navItems, 'nav_items_fadeout');
    }
    isNavClose = !isNavClose;
}

btnNav.addEventListener('click', navigationHandler);
nav.addEventListener('transitionend', () => {
    isAnimating = false;
})

initClawEffect();