import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { useState } from 'react';
import './App.css';
import './ZenType.css';

function ZenType() {
    const [textThings, setTextThings] = useState("");
    return (
        <>
            <textarea style={{ width: "100vw", }} value={textThings} onChange={(e) => { setTextThings(e.currentTarget.value) }}></textarea>
            <div id='sub'>
                <button className='btn btn-primary' style={{ borderRadius: "0px" }} onClick={() => { const url = window.URL.createObjectURL(new Blob([textThings], {type: "text/plain"}),);window.location.href = url }}>Download</button>
                <button className='btn btn-danger' style={{ borderRadius: "0px" }} onClick={()=>{setTextThings("")}}>Fuck all this.</button>

            </div>

        </>
    )
}


export default ZenType 