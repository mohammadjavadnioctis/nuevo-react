import React, { useEffect, useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCardsInfo } from './employee-action'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import SkeletonCard from '../SkeletonCard/SkeletonCard';




const EmployeeCard = () => {
    const [hasMore, setHadMore] = useState(true) 
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [start, setStart] = useState(0)
    const [finish, setFinish] = useState(5)
    const observer = useRef

    //intersection obsever
    const lastEmployee = useCallback(node => {
        console.log(node)
        if(state.loading) return; 
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {

            if(entries[0].isIntersecting){
                console.log('element is visible')
                setTimeout( () => {
                    setFinish(prevFinish => prevFinish +5)
                } ,500)
                
            }

        })
        if(node) observer.current.observe(node)

    }, [hasMore, state.loading] )
        
   

    useEffect(() => {
   
        setTimeout(()=>{ dispatch(fetchCardsInfo())},3000)
         
          
        
    }, [])

const renderCards = () =>{
    console.log('this is state',state)

    if(state.loading){
        return(
        <div>
           <SkeletonCard />
           <SkeletonCard />
           <SkeletonCard />
        </div>
        )
        
       
    }
   
    
    const firstFive = state.items.slice(start, finish)
    


    return firstFive.map((el, index) => {
        if(firstFive.length === index + 1){
            return (
                <div ref={lastEmployee} className='employee-card'>
                    <div className="employee-pic">
                        <img src={"https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"} alt="" />
                    </div>
                    <div className="employee-info">
                        <h4>{el.name}</h4>
                        <p>{el.company}</p>
                        <p>{el.job}</p>
        
                    </div>
                    </div>
                    )
        }else{
            return (
                <div className='employee-card'>
                    <div className="employee-pic">
                        <img src={"https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"} alt="" />
                    </div>
                    <div className="employee-info">
                        <h4>{el.name}</h4>
                        <p>{el.company}</p>
                        <p>{el.job}</p>
        
                    </div>
                    </div>
                    )
        }
                
      
                
           
    


      
    })






    // return state.items.map((el, index) => {
        
                
    //     return (
    //                     <div className='employee-card'>
    //                         <div className="employee-pic">
    //                             <img src={"https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"} alt="" />
    //                         </div>
    //                         <div className="employee-info">
    //                             <h4>{el.name}</h4>
    //                             <p>{el.company}</p>
    //                             <p>{el.job}</p>
                
    //                         </div>
    //                 </div>
    //                 )
                
           
    


      
    // })

}

    return (
      <div className="cards-container">
          {renderCards()}
      </div>
          
      
    )

            }
        
export default EmployeeCard;