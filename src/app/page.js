import About from '@/components/sections/about';
import Hero from '@/components/sections/hero';
import Quality from '@/components/sections/quality';
import Whyus from '@/components/sections/whyus';
import Image from 'next/image';

export default function Home() {
  return (
   <main>
      <Hero/>
      <About/>
      <Quality/>
      <Whyus/>
   </main>
  )
}
