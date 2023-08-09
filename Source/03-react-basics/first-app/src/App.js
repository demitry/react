import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Product  from './components/Product';

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.57, date: new Date(2023, 2, 28) },
    { id: 'e2', title: 'Paper', amount: 123.12, date: new Date(2023, 3, 27) },
    { id: 'e3', title: 'New Wooden Desk', amount: 21.00, date: new Date(2023, 4, 28) },
    { id: 'e4', title: 'Meal', amount: 65.34, date: new Date(2023, 5, 22) }
  ];

  const products = [
    { title:'Product 1', price: 10, description: 'First product' },
    { title:'Product 2', price: 20, description: 'Second product' }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is also visible, Wow, on the fly!</p>

        <Product title={products[0].title} price={products[0].price} description={products[0].description}></Product>
        <Product title={products[1].title} price={products[1].price} description={products[1].description}></Product>

        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
