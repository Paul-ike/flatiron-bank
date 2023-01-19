import React from "react"
import Swal from 'sweetalert2'

function Transaction({ id, date, description, category, amount }) {

    function handleDelete(id) {
        fetch(`http://localhost:8001/transactions/${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type":  "application/json",
                "Accept":  "application/json"
            },
        })
        .then(r=> r.json())
        .then(data => console.log(data))
        // Swal.fire({
        //     position: 'top-end',
        //     icon: 'success',
        //     title: 'Your transaction has been deleted',
        //     showConfirmButton: false,
        //     timer: 3000
        //   })
        document.location.reload();
        

    }

    return (
        <tr>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <td>
            <button onClick={()=>handleDelete(id)} type="button" className="btn btn-outline-danger btn-sm">Delete</button>
            </td>
        </tr>
    )
}

export default Transaction