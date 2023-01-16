import React, { useState } from "react";

function Form({ newData }) {
    const [formData, setFormData] = useState({
        date:"",
        description:"",
        category:"",
        amount:""
      })
    
      function handleSubmit(event) {
        event.preventDefault()
    
        fetch("http://localhost:8001/transactions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
          .then(res => res.json())
          .then(data => newData(data))
      }
    
      function handleChange(event) {
        event.preventDefault()
        const key = event.target.name
        const value = event.target.value
        setFormData({...formData, [key]: value})
      }
 
    return (
        <div className="container">
        <form onSubmit={ handleSubmit }>
            <div className="d-flex justify-content-center py-3">
            <div className="px-2">
                <input onChange={ handleChange } type="date" name="date" />
            </div>
            <div className="px-2">
                <input onChange={ handleChange } type="text" name="description" placeholder="Description" />
            </div>
            <div className="px-2">
                <input onChange={ handleChange } type="text" name="category" placeholder="Category" />
            </div>
            <div className="px-2">
                <input onChange={ handleChange } type="number" name="amount" placeholder="Amount" step="0.01" />
            </div>
            </div>
            <div className="text-center py-2">
            <button type="submit" class="btn btn-outline-primary">Add Transaction</button>
            </div>
        </form>
        </div>
    )
}

export default Form