import './Counter.scss';

const Counter = ({ title, subtitle, count, setCount }) => {
  const handleClick = (e) => {
    const { name } = e.target;

    if (name === 'increment') {
      setCount(count + 1);
    } else {
      if (count !== 0) {
        setCount(count - 1);
      }
    }
  };

  return (
    <div className="guest-counter">
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <div className="counter">
        <button type="button" name="decrement" onClick={handleClick}>
          -
        </button>
        <div className="count">{count}</div>
        <button type="button" name="increment" onClick={handleClick}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
