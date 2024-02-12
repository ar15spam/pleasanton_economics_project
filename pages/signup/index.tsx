import React from 'react'
import Link from 'next/link'

type Props = {}

export default function index({}: Props) {

  return (
    <div className = "w-screen h-screen bg-black flex flex-col items-center text-3xl">
        <h1 className = "font-black text-white">Are you a business or user?</h1>
        <Link href="/signup/user">
            <button className = "font-black text-orange-500">User</button>
        </Link>
        <Link href="/signup/business">
          <button className = "font-black text-orange-500">Business</button>
        </Link>
    </div>
  )
}