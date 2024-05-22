
import { useEffect, useState } from 'react';

interface Expense{
    id:string
    title:string
    amount:number
}

interface ExpenseListProps{
    expenses:Expense[]
}

export const ExpenseList:React.FC<ExpenseListProps>=({expenses})=>{

  const [searchTerm,setSearchTerm]=useState('')
  const [filteredExpense,setFilteredExpense]=useState<Expense[]>(expenses)

  useEffect(()=>{

    if(searchTerm === '')
      setFilteredExpense(expenses)
   else{
  const filtered=expenses.filter(expense=>
    expense.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  setFilteredExpense(filtered)
}
  },[searchTerm,expenses])

  const handleSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearchTerm(e.target.value)
  }


   return(
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg overflow-y-auto max-h-96 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Expense List</h2>
      <div className=" mb-4">
      <input 
      type="text"
      placeholder="Search Expenses"
      value={searchTerm}
      onChange={handleSearch}
      className="flex-grow bg-gray-100 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
    
      />
      </div>
      <ul className="space-y-4">
        {filteredExpense.length>0 ? filteredExpense.map(expense => (
          <li key={expense.id} className="bg-gray-200 p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800">{expense.title}</h3>
            <p className="text-gray-700">₹{expense.amount}</p>
          </li> 
        )) : <p>No expense Found</p>
      }
      </ul>
    </div>
   )
}