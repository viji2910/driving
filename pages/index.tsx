import Head from 'next/head'
import { GetStaticPropsResult } from 'next'
import { DrupalNode } from 'next-drupal'

import { drupal } from 'lib/drupal'
import { Layout } from 'components/layout'
import { NodeArticleTeaser } from 'components/node--article--teaser'
import { Slideshow } from 'components/carousel'
import Link from 'next/link'

interface IndexPageProps {
  nodes: DrupalNode[]
}

export default function IndexPage({ nodes }: IndexPageProps) {
  return (
    <Layout>
      <Head>
        <title>Vijinder Singh Boparai Driving School</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <div>
        <div className="mb-6">
          <h1 className="text-8xl mt-16 mb-16">
            Dynamic Driving Instructor
            <br />
            Forging a New Path Forward
          </h1>
          <p className="text-3xl w-8/12">
            Where every line lesson is curated according to students need and
            every detail of the exam is touched upon.
          </p>
          <div className="my-8">
            <button className="rounded-full text-2xl hover:bg-[#2d3d76] bg-[#eda029] text-white py-6 px-8">
              Get In Touch
            </button>
            <button className="ml-6 rounded-full text-2xl hover:bg-[#2d3d76] hover:text-white bg-gray-100 border text-black border-gray-950 text-white py-6 px-8">
              Browse Prices
            </button>
          </div>
        </div>

        <Slideshow />
        <div className="bg-black py-4">
          <div
            className="mx-auto overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
            style={{
              backgroundImage:
                "url('https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp');",
            }}
          >
            <h2 className="my-8 text-3xl text-center text-white">
              Student Testimonials
            </h2>
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8">
              <ul
                role="list"
                className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16"
              >
                {nodes?.length ? (
                  nodes?.map((node) => (
                    <div key={node.id}>
                      <NodeArticleTeaser node={node} />
                    </div>
                  ))
                ) : (
                  <p className="py-4">No nodes found</p>
                )}
              </ul>
            </div>
            <hr className="my-4" />
            <div className="text-center">
              <Link href="/testimonials">Read All</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(
  context,
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const nodes = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    'node--testimonials',
    context,
    {
      params: {
        'filter[status]': 1,
        'fields[node--testimonials]': 'title,path,field_image,uid,created',
        include: 'field_image,uid',
        sort: '-created',
      },
    },
  )

  return {
    props: {
      nodes,
    },
  }
}
