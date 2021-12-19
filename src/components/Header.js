import {Icon} from '../components/Icon.js';


export const Header = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const topBar = TopBar();
    const menu = Menu();

    header.append(topBar);
    header.append(menu);

    return header;
};

const TopBar = () => {

    const topBar = document.createElement('div');
    topBar.classList.add('topBar')

    const label1 =  document.createElement('label');
    const iconCity = Icon({name: 'fa-home'});
    label1.append(iconCity);
    
    const label2 =  document.createElement('label');
    label2.textContent = 'CASSIOPEIA';

    const divLabel3And4 = document.createElement('div');
    divLabel3And4.classList.add('divLabel3And4');

    const label3 =  document.createElement('label');
    const iconSearch = Icon({name: 'fa-search'});
    label3.append(iconSearch);

    const label4 = document.createElement('label');
    const iconCart = Icon({name: 'fa-cart-arrow-down'});
    label4.append(iconCart);

    divLabel3And4.append(label3);
    divLabel3And4.append(label4);

    topBar.append(label1);
    topBar.append(label2);
    topBar.append(divLabel3And4);

    return topBar;
};

const Menu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu')

    const label1 =  document.createElement('label');
    label1.textContent = 'Item1';
    label1.classList.add('label-menu');

    const label2 =  document.createElement('label');
    label2.textContent = 'Item2';
    label2.classList.add('label-menu');

    const label3 =  document.createElement('label');
    label3.textContent = 'Item3';
    label3.classList.add('label-menu');
    
    const label4 =  document.createElement('label');
    label4.textContent = 'Item4';
    label4.classList.add('label-menu');

    const label5 =  document.createElement('label');
    label5.textContent = 'Item5';
    label5.classList.add('label-menu');

    menu.append(label1);
    menu.append(label2);
    menu.append(label3);
    menu.append(label4);
    menu.append(label5);

    return menu;
};