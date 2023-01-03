import reactLogo from './assets/react.svg'
import './App.css'


function Landing() {
  

  return (

    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div class="px-6 py-7 my-7 text-center"></div>
          <h1 class="display-5 fw-bold">Goalab Training</h1>
          <div class="col-lg-8 mx-auto">
            <p class="lead mb-4">Mejora tu tecnica 10 veces mas rapido</p>
            <div class="g-grip gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4">Ingresa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Landing