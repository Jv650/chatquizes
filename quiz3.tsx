import react, {useState} from 'react';

const ParentComponent = () => {
const [isMessage, setIsMessage] = useState('');

// const newMessage = text.input.value('');
return(
    <div>{isMessage}</div>
)
}
export default ParentComponent;


const ChildComponent = ({isMessage, setIsMessage}) => {
return (
    <div>
        <input placeholder='type here'>{setIsMessage}</input>
    </div>
)
}
export default ChildComponent;