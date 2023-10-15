import Layout from '@/Layouts/Layouts'
import Navbar from '@/Layouts/Navbar'
import Hero from '@/components/home/Hero'
import TopClient from '@/components/home/TopClient'

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          <Hero/>
          <TopClient/>
        </div>
      </Layout>
    </>
  )
}
