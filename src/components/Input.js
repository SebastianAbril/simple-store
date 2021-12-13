/* 
props = {
    lineStyle: full o Empty
    placeholder: string para el placeholder
}
*/
export function Input(props) {
    const inputWrapper = createInputWrapper(props);
    const input = createInput(props);

    inputWrapper.append(input); // para meter el input dentro del div. 

    return inputWrapper;
};

const createInputWrapper = (props) => {
    const inputWrapper = document.createElement('div'); // crear elemento tipo div

    if (props.lineStyle === 'full') {
        inputWrapper.classList.add('div-input-field-1'); // agregarle la clase a el div.
    } else {
        inputWrapper.classList.add('div-input-field-2'); // agregarle la clase a el div.
    }

    return inputWrapper;
};

const createInput = (props) => {
    const input = document.createElement('input'); // crear elemento tipo input
    input.placeholder = props.placeholder;
    
    if (props.lineStyle === 'full') {
        input.classList.add('input-field-1');
    } else {
        input.classList.add('input-field-2')
    }
   
    return input;
};