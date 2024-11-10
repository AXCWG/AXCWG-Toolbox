import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { useState } from 'react';
import './App.css';


function NavBar() {
  return <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="https://axcwg.github.io/">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">IWTCMS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

function App() {
  const [heightColorBlock, setHeightColorBlock] = useState("200px");
  return (
    <>
      <NavBar />
      <div className='container'>

        <h1 className='display-1 text-center mt-5'>AX</h1>
        <div className='text-center'>Maintained in <a href='https://github.com/AXCWG/AXCWG-Toolbox'>this repo.</a></div>
        <div className='row mt-5'>
          <div className='col-3 block' style={{ backgroundColor: "rgb(255,0,0)", height: heightColorBlock }}>

          </div>
          <div className='col-3 block' style={{ backgroundColor: "rgb(0,255,0)", height: heightColorBlock }}>

          </div>
          <div className='col-3 block' style={{ backgroundColor: "rgb(0,0,255)", height: heightColorBlock }}>

          </div>
          <div className='col-3 block' style={{ backgroundColor: "rgb(128,128,128)", height: heightColorBlock }} >

          </div>
        </div>
        <div className='row'>
          <div className='col-3 block' style={{ backgroundColor: "rgb(0,255,255)", height: heightColorBlock }}>

          </div>
          <div className='col-3 block' style={{ backgroundColor: "rgb(255,0,255)", height: heightColorBlock }}>

          </div>
          <div className='col-3 block' style={{ backgroundColor: "rgb(255,255,0)", height: heightColorBlock }}>

          </div>
          <div className='col-3 block' style={{ backgroundColor: "black", height: heightColorBlock }} >

          </div>
        </div>
        <button onClick={() => { setHeightColorBlock("100px") }} style={{ width: "50%" }} className='btn btn-primary text-center'>Up</button>
        <button onClick={() => { setHeightColorBlock("200px") }} style={{ width: "50%" }} className='btn btn-primary text-center'>Down</button>
        <div className='row mt-5'>
          <div className='col-md-4 mt-3'>
            <div className="card" onClick={()=>{window.location.href = "/iwtcms"}}>
              <div class="card-body" ><h1>IWTCMS</h1><div>Control your Minecraft server remotely and securely. A tool meant to use cooperate with the mod with the same name. </div></div>
            </div>
          </div>
          <div className='col-md-4 mt-3'>
            <div className="card" onClick={()=>{window.location.href = "/zen"}}>
              <div class="card-body"><h1>Zen Type</h1><div>Can be determined as the shitpost of the site. </div></div>
            </div>
          </div>
          <div className='col-md-4 mt-3'>
            <div className="card">
              <div class="card-body">Content</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
