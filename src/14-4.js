(function () {})();

(() => {})();

(async () => {})();

(() => console.log('Suleng'))();

((a, b) => {
  console.log(a + b);
})('helo', 2);

// BEFORE
function App() {
  useEffect(() => {
    async function fetchData() {
      // fetching data
    }
    fetchData();
  }, []);
  return null;
}

// AFTER
function App() {
  useEffect(() => {
    (async () => {
      // fetch data
    })();
  }, []);
  return null;
}
