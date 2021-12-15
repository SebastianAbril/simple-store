export const Header = () => {
    const header = document.createElement('header');

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
    label1.textContent = 'Location';

    const label2 =  document.createElement('label');
    label2.textContent = 'CASSIOPEIA';

    const label3 =  document.createElement('label');
    label3.textContent = 'Search/Cart';

    topBar.append(label1);
    topBar.append(label2);
    topBar.append(label3);

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