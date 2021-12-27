/*
props {
    name: fa-cart-plus, fa-cart-arrow-down, fa-search, fa-home 

}
*/
export const Icon = (props) => {

    const icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add(props.name);

    return icon;
}