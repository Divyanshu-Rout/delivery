import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const router = useRouter();

  const redirectIt = true;

  useEffect(() => {
    router.push('/auth/login')
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        head
      </h1>
    </div>
  )
}
