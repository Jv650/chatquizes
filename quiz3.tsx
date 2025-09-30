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


//////////////// correct way 
import React, { useState } from 'react';

// Parent
const ParentComponent: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  return (
    <div>
      <h2>Parent message: {message}</h2>
      <ChildComponent message={message} setMessage={setMessage} />
    </div>
  );
};

export default ParentComponent;

// Child
type ChildProps = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

const ChildComponent: React.FC<ChildProps> = ({ message, setMessage }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default ChildComponent;