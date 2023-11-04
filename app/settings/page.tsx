"use client"

import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import React from 'react'


export default function Settings() {

    const { setTheme } = useTheme()
  return (
    <div>
      <Button onClick={() => setTheme("dark")}>dark</Button>
      <Button onClick={() => setTheme("light")}>light</Button>
    </div>
  )
}
