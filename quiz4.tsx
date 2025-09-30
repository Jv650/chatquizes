import React, {useState} from 'react';

const [buttonClick, setButtonClick] = useState<boolean>(false);

const buttonFunction = () => {
    if (buttonClick === true) {
        return 'Bye';
    } else {
        return 'Hello';
    }

}

const ToggleComponent = () => {
return (
    <button onClick={buttonFunction}>Click me!</button>
)
}
export default ToggleComponent;

//////////// correct way
import React, { useState } from 'react';

const ToggleComponent: React.FC = () => {
  const [buttonClick, setButtonClick] = useState<boolean>(false);

  const buttonFunction = () => {
    setButtonClick(!buttonClick); // toggles between true/false
  };

  return (
    <div>
      <h2>{buttonClick ? 'Goodbye' : 'Hello'}</h2>
      <button onClick={buttonFunction}>Click me!</button>
    </div>
  );
};

export default ToggleComponent;
