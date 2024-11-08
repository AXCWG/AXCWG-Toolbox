import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function NavBar() {
  return <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
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
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className='display-1 text-center mt-5'>Toolbox</h1>
        <div className='text-center'>Maintained in </div>
      </div>
    </>
  );
}

export default App;
