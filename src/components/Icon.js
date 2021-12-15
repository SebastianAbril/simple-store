/*
props {
    name: fa-car,

}
*/
export const Icon = (props) => {

    const icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add(props.name);

    return icon;
}