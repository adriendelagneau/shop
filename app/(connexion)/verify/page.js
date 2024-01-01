import React from 'react'
import { verifyWitnCredentials } from '@/app/_authActions' 

const VerifyPage = async ({searchParams: {token}}) => {
    const res = await verifyWitnCredentials(token)

  return (
      <div>{res?.msg}</div>
  )
}

export default VerifyPage