const Input = ({ filterType, inputValue, setValue, focus }) => {
  const handleChange = (e) => {
    if (filterType === 'location') {
      setValue(e.target.value);
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <div
      className="input-container"
      style={
        focus
          ? { border: '1px solid #333' }
          : { border: '1px solid transparent' }
      }
    >
      <label htmlFor={`nav-input-${filterType}`}>
        {filterType.toUpperCase()}
      </label>
      <input
        className="nav-input"
        id={`nav-input-${filterType}`}
        value={inputValue}
        onChange={handleChange}
        autoFocus={focus}
        onFocus={handleFocus}
        placeholder="Add location"
      />
    </div>
  );
};

export default Input;
