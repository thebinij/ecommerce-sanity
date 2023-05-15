import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <h2 className="text-3xl font-bold text-transparent drop-shadow bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 whitespace-nowrap bg-clip-text">
    <Link href="/">Ecommerce Logo</Link>
  </h2>
  )
}
