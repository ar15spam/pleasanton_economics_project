import React, { useEffect } from 'react'
import { useRouter } from 'next/router';


type Props = {}

export default function index({}: Props) {
  const router = useRouter(); 

  useEffect(() => {
    router.push('/signup'); 
  }, []); 

  return(
    <div>
      ...Redirecting
    </div>
  )
}