import react, {useState} from 'react';

const ToggleText = () => {
const [helloText, setHelloText] = useState('Hello World!');

const initialToggleValue = setHelloText('Hello World!')
const switchToggle = setHelloText('Goodbye World!')

const toggleText = () => {
    if (initialToggleValue) {
        return;
    } else if (switchToggle) {
        return;
    }
}
return (
    <div>{toggleText}</div>
);
}
export default ToggleText;