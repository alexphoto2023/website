/* eslint-disable react/no-unescaped-entities */
'use client'
import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'

const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

const numbers = Array.from({ length: 23 }, (_, i) => i + 1)

export function Gallery() {
  const onBeforeSlide = (detail: any) => {
    const { index, prevIndex } = detail
    console.log(index, prevIndex)
  }
  return (
    <div>
      <Container className="mt-9 flex">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Welcome to My Portfolio
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Explore my world through the lens and the art of visual
            storytelling. Each image holds a unique story, a captured moment in
            time. Join me on this journey and let's embark on a visual adventure
            together. Discover the beauty of photography and the creativity of
            graphic animations and design. Enjoy the moments, the colors, and
            the emotions. This is my creative canvas, and I'm excited to share
            it with you.
          </p>
        </div>
      </Container>
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
            {numbers.map((number, index) => (
              <Link href={`${number}.png`} key={index}>
                <div
                  className={clsx(
                    'relative aspect-[9/10] w-36 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 2sm:w-44 sm:rounded-2xl lg:w-72 ',
                    rotations[index % rotations.length],
                  )}
                >
                  <Image
                    src={`/${number}.png`}
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
    </div>
  )
}
