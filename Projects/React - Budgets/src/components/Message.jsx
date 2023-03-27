import React from 'react'

//children = mensaje (NewBudget) & tipo = estilo a usar index (NewBudget)

const Message = ({children, tipe}) => {
  return (
    <div className={`alert ${tipe}`}>{children}</div>
  )
}

export default Message