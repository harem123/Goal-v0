import React from "react"

function Table() {
  return (
<>

    <div className='container'>
      <div className='row'>
        <div className='col'>
        <div className="px-6 py-7 my-7 text-center">
          <h1 class="display-5 fw-bold">Tus Resultados</h1>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
    <table className="table table-striped">
    <thead>
    <tr className="table-primary">
      <th scope="col">Fecha</th>
      <th scope="col">Puntaje</th>
      <th scope="col">Total Fallos</th>
      <th scope="col">Total Aciertos</th>
      <th scope="col">Tiempo Promedio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">01/02/22</th>
      <td>100</td>
      <td>4</td>
      <td>10</td>
      <td>2,4</td>
    </tr>
    <tr>
      <th scope="row">01/03/22</th>
      <td>100</td>
      <td>4</td>
      <td>10</td>
      <td>3,4</td>
    </tr>
    <tr>
      <th scope="row">01/04/22</th>
      <td>100</td>
      <td>4</td>
      <td>10</td>
      <td>4,4</td>
    </tr>
  </tbody>
</table>
    </div>
    </> 
  )
}

export default Table