```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is wrong! It creates a memory leak!
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // This is not enough. The interval will never stop
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
```