/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/ui/Container'
import {
  BehanceIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/ui/SocialIcons'
import portraitImage from '@/images/cv.jpg'
import { type Metadata } from 'next'
export const metadata: Metadata = {
  title: 'About Me',
  description:
    'As a photographer, my goal is to freeze time and create lasting memories.',
}
function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hey there! I'm Alex
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hey there! I'm Alex, and I have a passion for photography and all
              things creative. I believe in the magic of capturing moments that
              tell stories and express emotions through the lens.
            </p>
            <p>
              As a photographer, my goal is to freeze time and create lasting
              memories. Whether it's a portrait, a landscape, or any special
              moment, I strive to capture the beauty and authenticity in every
              shot.
            </p>
            <p>
              Apart from my love for photography, I'm also enthusiastic about
              graphic animations and design. It's not just a profession for me;
              it's a hobby I like. The world of visuals fascinates me, and I
              enjoy exploring its endless possibilities.
            </p>

            <p>Let's create beautiful memories together!</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.instagram.com/notradice"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://www.behance.net/alexseychumakov"
              icon={BehanceIcon}
              className="mt-4"
            >
              Follow on Behance
            </SocialLink>
            <SocialLink
              href="mailto:alexseychumakovphoto@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              alexseychumakovphoto@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
