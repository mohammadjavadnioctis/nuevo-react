import React , {useState}from 'react'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchResults } from '../TopForm/search-action'







const SideForm = () => {
    const state = useSelector((state) => state)
    const [jobOption, setjobOption] = useState('Please Select')
    const [queryString, setqueryString] = useState({string: '', selected: false })
    const dispatch = useDispatch()



    function searchInputChanged (queryStringTarget){
        setqueryString(prevState => ({string: queryStringTarget , selected: false}))
         console.log('string', queryString)
           
     }

    async function handleSubmit (e) {
        e.preventDefault()
        console.log('Sidebar handle submit called E.target.value',e.target)
        dispatch(fetchSearchResults({string: queryString.string , type: "job"}))
        console.log('SideBAR : state after Dispatch', state.employeesReducer )
      
    } 
     
    
    function optionSelected (e) {
            
        if(jobOption == e.target.value){
            console.log('value is the same')
        }else{
             setjobOption(e.target.value)
            console.log('new value E:', e.target )
            // setqueryString(prevState => ({string: e.target.value , selected: true}))
    
    
               setqueryString({string: e.target.value , selected: true})
    
    
                console.log('queryString after Selection', queryString)
                                
             
            console.log('queryString after Selection', queryString)
            dispatch(fetchSearchResults({string: e.target.value , type: "area"}))
            
        }
    
    
    }
    
    
    





    return (
        <div className="sidebar-form">


        <Form value={queryString.string} onSubmit={handleSubmit}>

            
            <Form.Control size="lg" type="text" placeholder="Job Title" onChange={ ChangeEvent => searchInputChanged(ChangeEvent.target.value)} />
                <Form.Select aria-label="Default select example" onClick={optionSelected}>
                    {/* <option>Area</option>
                    <option value="1">Istanbul</option>
                    <option value="2">Antaliya</option>
                    <option value="3">Izmir</option> */}
  <option value="Please Select"> Alan </option>
{
                    state.employeesReducer.items.map((item) => <option key={item.id} value={item.area} >{item.area}</option>)
                }



                </Form.Select>
               
                <div className="d-grid gap-2">
                <Button type="submit" variant="outline-primary" size="lg">
                    Filter
                </Button>
               
                
                </div>
        </Form>

        </div>
    )
}

export default SideForm
