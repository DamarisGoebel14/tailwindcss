import Nav from '../components/Nav'
import Layout from '../components/Layout'


export default function IndexPage() {
  return (
      <div className="container">
        <Layout>
        <Nav />
        <div className="py-20">
          <h1 className="text-5xl text-center text-accent-1">
            Next.js + Tailwind CSS
          </h1>
        </div>
    </Layout>
      </div>
  )
}