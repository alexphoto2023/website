import { type Metadata } from 'next'
import { Gallery } from '@/components/Gallery'
export const metadata: Metadata = {
  title: 'My Portfolio',
  description:
    'Explore my world through the lens and the art of visual storytelling. Each image holds a unique story, a captured moment in time.',
}

export default function Portfolio() {
  return (
    <>
      <Gallery />
    </>
  )
}
