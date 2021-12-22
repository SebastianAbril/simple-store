/*props = {
   text: string
}
*/
export const Label = ({ text }) => {
    const label = document.createElement('label');
    label.textContent = text;

    return label;
};