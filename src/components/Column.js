/*
Props ={
    className: string
    children: [child1, child2, .... childn]
    style: {}
}
*/

export const Column = ({ className,  children = [], style = {}}) => {
    const column = document.createElement('div');
    column.classList.add('column');

    if (className) {
        column.classList.add(className);
    }

    Object.keys(style).forEach((attributeName)=> {
        column.style[attributeName] = style[attributeName];
    });

    children.forEach( (element) => column.append(element));
    
    return column;
};