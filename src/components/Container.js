/*
Props ={
    children: [child1, child2, .... childn]
    style: 
}
*/

export const Container = (props) => {
    const container = document.createElement('div');
    container.classList.add('container');

    
    props.children.forEach( (element) => container.append(element));
    
    return container;
};