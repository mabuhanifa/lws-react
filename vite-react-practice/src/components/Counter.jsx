export default function Counter({ count, setCount }) {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">Counter</h1>
        <h2 className="text-2xl">Count: {count}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={() => {
            setCount((prevCount) => prevCount + 1);
            setCount((prevCount) => prevCount + 1);
            setCount((prevCount) => prevCount + 1);
          }}
        >
          Multiple Increment
        </button>
      </div>
    </div>
  );
}
