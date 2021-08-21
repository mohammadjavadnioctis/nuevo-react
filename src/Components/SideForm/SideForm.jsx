import React from 'react'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'


const SideForm = () => {
    return (
        <div className="sidebar-form">


        <Form>

            <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Job Title" />
                <Form.Select aria-label="Default select example">
                    <option>Area</option>
                    <option value="1">Istanbul</option>
                    <option value="2">Antaliya</option>
                    <option value="3">Izmir</option>
                </Form.Select>
                </Form.Group>
                <div className="d-grid gap-2">
                <Button variant="outline-primary" size="lg">
                    Filter
                </Button>
               
                
</div>
        </Form>

        </div>
    )
}

export default SideForm
