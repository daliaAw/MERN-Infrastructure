import React from 'react'
import { checkToken } from '../../utilities/users-service'

function OrderHistoryPage() {
  async function handelCheckToken(){
    const expDate = await checkToken()
    console.log(expDate)
  }
  return (
    <>
    <h1>OrderHistoryPage</h1>
    <button onClick={handelCheckToken}> Check When My Login Expires</button>
    </>
  )
}

export default OrderHistoryPage