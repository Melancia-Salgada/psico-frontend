import React from 'react'

const PagamentoHome = ({tipo, data}) => {

  const isEmpty = !data || (Array.isArray(data) && data.length === 0);

  return (
    <div>
        <div>
          <div>
            <span>{tipo}</span>
          </div>
          
          {isEmpty ? (
            <div className='text-center text-[18px] p-4 text-red-500'>
              Nenhum pagamento registrado
            </div>
          ) : (
            <>
            
            </>
          )}

        </div>

    </div>
  )
}

export default PagamentoHome