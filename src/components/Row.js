/*
Props ={
    children: [child1, child2, .... childn]
    style: {
        justifyContent: space-between
        ...
    }
}
*/
export const Row = ({children = [], style = {}}) => {
    const row = document.createElement('div');
    row.classList.add('row');

    row.style.justifyContent = style.justifyContent;
    row.style.backgroundColor = style.backgroundColor;

    Object.keys()

    children.forEach( (element) => row.append(element));
    
    return row;
};