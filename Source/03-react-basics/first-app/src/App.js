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

        <ExpenseItem expense={expenses[0]}></ExpenseItem>
        <ExpenseItem expense={expenses[1]}></ExpenseItem>
        <ExpenseItem expense={expenses[2]}></ExpenseItem>
        <ExpenseItem expense={expenses[3]}></ExpenseItem>

        <Product title={products[0].title} price={products[0].price} description={products[0].description}></Product>
        <Product title={products[1].title} price={products[1].price} description={products[1].description}></Product>

      </header>
    </div>
  );
}

export default App;
