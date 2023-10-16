'use client'

import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

const numbers = Array.from({ length: 30 }, (_, i) => i + 1)

function getMappedNumber(number: number) {
  number++
  if (number < 1 || number > 100) {
    throw new Error('Number must be between 1 and 100')
  }
  return ((number - 1) % 5) + 1
}

function Gallery() {
  const onBeforeSlide = (detail: any) => {
    const { index, prevIndex } = detail
    console.log(index, prevIndex)
  }
  return (
    <div className="mx-auto mt-16 flex sm:mt-20">
      <div className="mx-auto">
        <LightGallery
          allowMediaOverlap={true}
          toggleThumb={true}
          plugins={[lgThumbnail]}
          elementClassNames="custom-wrapper-class"
          onBeforeSlide={onBeforeSlide}
          addClass="lightgallery"
        >
          {numbers.map((_, index) => (
            <Link href={`image-${getMappedNumber(index)}.jpg`} key={index}>
              <div
                className={clsx(
                  '2sm:w-44 relative aspect-[9/10] w-36 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:rounded-2xl lg:w-72 ',
                  rotations[index % rotations.length],
                )}
              >
                <Image
                  src={`/image-${getMappedNumber(index)}.jpg`}
                  alt="Description of Image"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
              </div>
            </Link>
          ))}
        </LightGallery>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <>
      <Gallery />
    </>
  )
}
