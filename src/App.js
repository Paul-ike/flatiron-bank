import React, {useState, useEffect} from "react";
import Header from './components/Header.js'
import Search from './components/SearchBar.js'
import Form from './components/Form.js'
import TransactionsList from './components/TransactionsList.js'

function App() {
  const [transactions, setTransaction] = useState([])
  const[search, setSearch] = useState("")
  useEffect(()=> {
    fetch("http://localhost:8001/transactions")
    .then(res => res.json())
    .then((data) => setTransaction(data))
  }, [])

  function newTransactions(addedTransactions) {
    const newTransactionsArray = [...transactions, addedTransactions]
    setTransaction(newTransactionsArray)
  }

  return (
    <>
      <Header />
      <Search searchName={search} setSearch={setSearch} />
      <Form newData={newTransactions} />
      <TransactionsList transactionData={transactions} searchName={search} />
    </>
  );
}

export default App;
