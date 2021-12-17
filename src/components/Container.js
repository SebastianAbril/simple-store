/*
Props ={
    children: [child1, child2, .... childn]
}
*/

export const Container = (props) => {
    const container = document.createElement('div');
    container.classList.add('container');

    props.children.forEach( (element) => container.append(element));
    
    return container;
};