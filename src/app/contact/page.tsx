import Contact from '@/components/Contact'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Contact Me',
}

export default function ContactPage() {
  return <Contact />
}
