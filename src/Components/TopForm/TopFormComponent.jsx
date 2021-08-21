import React from 'react'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'

const TopFormComponent = () => {
    return (
       
                    
                <Form className="top-form">

        
        <Form.Control size="lg" type="text" placeholder="Name" className="top-form-name"/>
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
