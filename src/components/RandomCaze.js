import Image from 'next/image'
import React from 'react'

import styles from '../styles/RandomCaze.module.css'

export default function RandomCaze() {
  const n = Math.floor(Math.random() * (6 - 1 + 1) + 1)
  const currentCazePic = `../../images/caze0${n}.jpeg`

  return (
    <div>
      <Image
        width={200}
        height={200}
        alt='casimito'
        src={require(`../../images/caze0${n}.jpeg`)}
      />
    </div>
  )
}
