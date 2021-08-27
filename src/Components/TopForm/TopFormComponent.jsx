import React , {useState}from 'react'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchResults } from './search-action'


const TopFormComponent = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [queryString, setqueryString] = useState({string: '', selected: false })
    const [companyOption, setCompanyOption] = useState('Please Select')
    // console.log('items inside the employeeReducer', state.employeesReducer.items)

    function searchInputChanged (queryStringTarget){
        setqueryString(prevState => ({string: queryStringTarget , selected: false}))
          console.log('string', queryString)
          
    }

    function handleSubmit (e) {
        e.preventDefault()
        // console.log('ToP State Before the dispatch e.targe', e.target )
        dispatch(fetchSearchResults({string:queryString.string , type: "search"}))
        // console.log('state after Dispatch', state.employeesReducer )
      
    } 

    async function optionSelected (e) {
        
        if(companyOption == e.target.value){
            console.log('value is the same')
        }else{
             setCompanyOption(e.target.value)
            // console.log('new value E:', e.target.value )
            // setqueryString(prevState => ({string: e.target.value , selected: true}))


               setqueryString({string: e.target.value , selected: true})


                // console.log('queryString after Selection', queryString)
                                
             
            // console.log('queryString after Selection', queryString)
            dispatch(fetchSearchResults({string: e.target.value , type: "company"}))
            
        }


    }


    return (
       
                    
                <Form className="top-form" value={queryString.string} onSubmit={handleSubmit}>

        
        <Form.Control size="lg" type="text" placeholder="Search For Anything..." className="top-form-name" value={queryString.string} onChange={ ChangeEvent => searchInputChanged(ChangeEvent.target.value) }/>
            <Form.Select aria-label="Default select example" className="top-form-company" placeholder="here" onClick={optionSelected}>
                <option value="Please Select"> Company Seçiniz </option>
                {
                    state.employeesReducer.items.map((item) => <option key={item.id} value={item.company} >{item.company}</option>)
                }
            </Form.Select>
            
           
             <Button type="submit" variant="outline-primary" className="top-button">
                 Filter
            </Button>{' '}
        
            
       
        </Form>
       
    )
}

export default TopFormComponent
