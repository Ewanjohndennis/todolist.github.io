import React from 'react'
import check_circle_unsel from '../assets/check_circle_unsel.png'
import check_circle_sel from '../assets/check_circle_sel.png'
import trash from '../assets/trash.png'
const Todoitems = ({text, id, isComplete, deletetodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={() => {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete? check_circle_sel : check_circle_unsel} />
            <p className={`text-slate-700 ml-4 pb-1.5 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : "" }`}>{text}</p>
        </div>
        <img onClick={()=>{deletetodo(id)}} src={trash} className='h-6 cursor-pointer'/>
    </div>
  )
}

export default Todoitems