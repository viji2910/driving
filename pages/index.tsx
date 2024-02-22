import Head from 'next/head'
import { GetStaticPropsResult } from 'next'
import { DrupalNode } from 'next-drupal'

import { drupal } from 'lib/drupal'
import { Layout } from 'components/layout'
import { NodeArticleTeaser } from 'components/node--article--teaser'
import { Slideshow } from 'components/carousel'

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
        <Slideshow />
        <h1 className="my-8 text-3xl text-center font-black">
          Student Testimonials
        </h1>
        <hr />
        <div className="py-4">
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
