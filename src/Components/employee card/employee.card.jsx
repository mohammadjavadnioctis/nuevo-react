import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCardsInfo } from './employee-action'


const EmployeeCard = () => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state)

    useEffect(() => {
    dispatch(fetchCardsInfo())  
          
        
    }, [])

const renderCards = () =>{
    if(state.loading){
        return <h1>Loading</h1>
    }

    return state.items.map(el => {
        return (<h2> Hi {el.name} </h2>)
    })

}

    return (
      <div>
          {renderCards()}
      </div>
          
      
    )

            }
        
export default EmployeeCard;