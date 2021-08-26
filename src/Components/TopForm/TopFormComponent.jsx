import React , {useState}from 'react'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchResults } from './search-action'


const TopFormComponent = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [queryString, setqueryString] = useState()
    

    function searchInputChanged (queryStringTarget){
       setqueryString(queryStringTarget)
        
          
    }

    function handleSubmit (e) {
        e.preventDefault()
        console.log('State Before the dispatch', state )
        dispatch(fetchSearchResults(queryString))
        console.log('state after Dispatch', state )
      
    } 


    return (
       
                    
                <Form className="top-form" onSubmit={handleSubmit}>

        
        <Form.Control size="lg" type="text" placeholder="Search For Anything..." className="top-form-name" onChange={ ChangeEvent => searchInputChanged(ChangeEvent.target.value) }/>
            <Form.Select aria-label="Default select example" className="top-form-company">
                <option>Company Name</option>
                <option value="1">Trendyol</option>
                <option value="2">Getir</option>
                <option value="3">Hepsi Burada</option>
            </Form.Select>
            
           
             <Button type="submit"variant="outline-primary" className="top-button">
                 Filter
            </Button>{' '}
        
            
       
        </Form>
       
    )
}

export default TopFormComponent
