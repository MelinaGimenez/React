import { useState, useEffect } from 'react'

const Filters = (filter, setFilter) => {
  return (
    <div className='filters shadow container'>
        <form>
            <div className='camp'>
                <label>Filtrar Gastos</label>
                <select
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filters