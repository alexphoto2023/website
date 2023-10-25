/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { InstagramIcon, BehanceIcon } from '@/components/ui/SocialIcons'
import Carousel from '@/components/Carousel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alex - Photographer',
  description:
    'As a photographer, my goal is to freeze time and create lasting memories. ',
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link
      className="group -m-1 rounded-full border-2  border-zinc-500 p-4 transition
       duration-300 hover:border-teal-500 dark:border-zinc-400 dark:hover:border-teal-400"
      {...props}
    >
      <Icon
        className="group h-4 w-4 fill-zinc-500 transition duration-300
       group-hover:fill-teal-500 dark:fill-zinc-400 dark:group-hover:fill-teal-400"
      />
    </Link>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hey there! I'm Alex
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I have a passion for photography and all things creative. I believe
            in the magic of capturing moments that tell stories and express
            emotions through the lens.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.instagram.com/notradice/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.behance.net/alexseychumakov"
              aria-label="Follow on Behance"
              icon={BehanceIcon}
            />
          </div>
        </div>
      </Container>
      <Carousel />
    </>
  )
}
