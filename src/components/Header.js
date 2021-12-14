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
    label2.textContent = 'SimpleStore';

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

    const label2 =  document.createElement('label');
    label2.textContent = 'Item2';

    const label3 =  document.createElement('label');
    label3.textContent = 'Item3';

    menu.append(label1);
    menu.append(label2);
    menu.append(label3);

    return menu;
};