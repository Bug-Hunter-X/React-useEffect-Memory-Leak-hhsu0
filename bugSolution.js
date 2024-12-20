```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); // Correct cleanup
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
```