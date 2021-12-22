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

    console.log(Object.keys(style));  // me imprime en consola justifyContent y backgroundColor.. osea los atributos.
    Object.keys(style).forEach((AttributeName)=> {
        console.log(style[AttributeName]);
        row.style[AttributeName] = style[AttributeName];
    } )

    children.forEach( (element) => row.append(element));
    
    return row;
};

 