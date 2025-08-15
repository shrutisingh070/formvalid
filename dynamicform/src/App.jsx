import { useState } from 'react';
import './App.css';

function App() {
  const [InputFields, setInputFields] = useState([{ value: "" }]);

  const handleValueChange = (index, event) => {
    const values = [...InputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([...InputFields, { value: "" }]);
  };

  const handleRemoveFields = (index) => {
    const newInputFields = [...InputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  return (
    <div className='container'>
      <h2>Dynamic Input Fields with Preview</h2>
      {InputFields.map((inputField, index) => (
        <div className='input-container' key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Input Field */}
          <input
            type='text'
            placeholder='Type a question'
            value={inputField.value}
            onChange={(e) => handleValueChange(index, e)}
          />

          {/* Preview */}
          <div className='preview-box' style={{
            border: '1px solid #ccc',
            padding: '5px 10px',
            minWidth: '150px',
            background: '#f9f9f9'
          }}>
            {inputField.value || <em>Preview...</em>}
          </div>

          {/* Delete Button */}
          <button
            className='delete-btn'
            onClick={() => handleRemoveFields(index)}
          >
            <span className="material-symbols-outlined delete-icon">delete</span>
          </button>
        </div>
      ))}

      {/* Add Field Button */}
      <button className='add-btn' onClick={handleAddFields}>
        <span className="material-symbols-outlined add-icon">add field</span>
      </button>
    </div>
  );
}

export default App;
