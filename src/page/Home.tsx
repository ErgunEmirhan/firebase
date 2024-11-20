import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    const openPage = (page: string)=>{
        navigate(page);
    }
  return (
   <div className="container">
    <div className="row mt-5">
        <div className="col-3">

        </div>
        <div className="col-6 border p-3">
            <div className="mb-3 d-grid">
                <input type="button" onClick={()=>openPage('/login')} value="Login Page" className='btn btn-outline-success' /> 
            </div>
            <div className="mb-3 d-grid">
                <input type="button" onClick={()=>openPage('/yarisma')} value="Yarisma" className='btn btn-outline-success' />
            </div>
            <div className="mb-3 d-grid">
                <input type="button"  onClick={()=>openPage('/defPage')} value="DefPage" className='btn btn-outline-success' />
            </div>
            <div className="mb-3 d-grid">
                <input type="button"  onClick={()=>openPage('/')} value="Home" className='btn btn-outline-success' />
            </div>
        </div>
        <div className="col-9">

        </div>
    </div>
   </div>
  )
}

export default Home