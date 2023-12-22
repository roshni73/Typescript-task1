import react, { useState } from 'react';
import ComponentVisibility1 from '../ComponentVisibility1';
import ComponentVisibility2 from '../ComponentVisibility2';
import './index.css';

function ToggleVisibility() {
  const [isComponent1Visible, setIsComponent1Visible] = useState(true);

  const toggleVisibility = () => {
    setIsComponent1Visible(!isComponent1Visible);
  };
  return (
    <>
     <div className='task1'>
        <h2>Task: Toggle Visibility</h2>
        <p>Develop a component that has a toggle switch that controls the visibility of two components.</p>
        <label className="switch">
          <input type="checkbox" checked={isComponent1Visible} onChange={toggleVisibility} />
          <span className="slider"></span>
       </label>
      </div>
      {isComponent1Visible ? <ComponentVisibility1 /> : <ComponentVisibility2 />}
     
    </>
   
  );

}

export default ToggleVisibility;