import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    const { id } = useParams();

    console.log('id:', id);

  return (
    <div>
      singleproduct
    </div>
  )
}

export default SingleProduct
