import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/ui/Container'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/ui/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

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

export const metadata: Metadata = {
  title: 'About',
  description: 'I’m John Doe.',
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
            I’m John Doe. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
              odio sed ipsum malesuada vestibulum. Nulla finibus turpis est, non
              sagittis tellus interdum quis. Donec tincidunt est leo. Etiam
              scelerisque purus eu odio malesuada, sed tristique quam maximus.
            </p>
            <p>
              Donec eros odio, condimentum non pulvinar at, congue id nibh.
              Proin facilisis, risus ut lobortis laoreet, tellus velit fringilla
              odio, at commodo erat nisl quis nulla. Nulla sed placerat tellus.
              Donec mollis laoreet nulla vitae elementum. Sed eu lectus lectus.
              Phasellus pretium, ante eget scelerisque hendrerit, purus ex
              porttitor leo, a fringilla quam odio ut quam.
            </p>
            <p>
              Cras in leo congue, volutpat neque eget, vehicula sem. Curabitur
              sit amet massa suscipit, iaculis dolor tristique, rhoncus nisi.
              Nullam ultricies augue mauris, vitae aliquet augue pretium nec.
              Suspendisse potenti. Quisque imperdiet finibus ullamcorper.
              Quisque a ultricies nisl. Sed imperdiet nisl sit amet fermentum
              bibendum. Donec libero turpis, vestibulum quis sodales sit amet,
              condimentum in sem. Proin eget felis quis nibh aliquam convallis.
              Proin dapibus arcu libero, sit amet rhoncus sem mollis ut. In vel
              porta arcu.
            </p>
            <p>
              Mauris vitae vestibulum diam. Donec imperdiet dolor libero, in
              ornare dui ullamcorper sed. Duis et leo vulputate, mattis elit
              vitae, dapibus neque. Fusce viverra libero in feugiat vestibulum.
              Morbi sapien diam, dictum id dignissim vel, posuere elementum
              ligula. Nam aliquam lectus at suscipit ornare.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={FacebookIcon} className="mt-4">
              Follow on Facebook
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:hey@hey.hey"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              johndoe@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
