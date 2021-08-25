import React , {useState}from 'react'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'


const TopFormComponent = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [queryString, setqueryString] = useState()

    function searchInputChanged (queryString){
       let savedQueryString = queryString
        setqueryString((prevState) => {
            console.log('this is state from TopFormComponent', state)
             console.log('this is the queryString', queryString)
             
        })    
    }


    return (
       
                    
                <Form className="top-form">

        
        <Form.Control size="lg" type="text" placeholder="Name" className="top-form-name" onChange={ ChangeEvent => searchInputChanged(ChangeEvent.target.value) }/>
            <Form.Select aria-label="Default select example" className="top-form-company">
                <option>Company Name</option>
                <option value="1">Trendyol</option>
                <option value="2">Getir</option>
                <option value="3">Hepsi Burada</option>
            </Form.Select>
            
           
             <Button variant="outline-primary" className="top-button">
                 Filter
            </Button>{' '}
        
            
       
        </Form>
       
    )
}

export default TopFormComponent
