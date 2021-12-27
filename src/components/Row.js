/*
Props ={
    children: [child1, child2, .... childn]
    style: {
        justifyContent: space-between
        backgroundColor: white
        ...
    }
}
*/
export const Row = ({children = [], style = {}}) => {
    const row = document.createElement('div'); // creo un div y lo guardo en row.
    row.classList.add('row'); // agrego clase 'row

    Object.keys(style).forEach((AttributeName)=> {
        row.style[AttributeName] = style[AttributeName];
    });

    children.forEach( (element) => row.append(element));
    
    return row;
};

 