import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactionData, searchName }) {
  
  let renderedtransactionList

  if(transactionData){
    const filteredTransactionData = transactionData.filter(transaction => {
      return transaction.description.toLowerCase().includes(searchName.toLowerCase())
    })
     renderedtransactionList = filteredTransactionData.map((transaction) => (
    <Transaction
      key={transaction.id}
      id={transaction.id}
      date={transaction.date}
      description={transaction.description}
      category={transaction.category}
      amount={transaction.amount}
    />
  ))
}

    return (
        <div className="py-2">
            <table className="table container">
                <thead>
                    <tr>
                    <th scope="col"><h3>Date</h3></th>
                    <th scope="col"><h3>Description</h3></th>
                    <th scope="col"><h3>Category</h3></th>
                    <th scope="col"><h3>Amount</h3></th>
                    <th scope="col"><h3>Delete</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {renderedtransactionList}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionsList