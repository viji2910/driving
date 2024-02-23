import Head from 'next/head'
import { GetStaticPropsResult } from 'next'
import { DrupalNode } from 'next-drupal'

import { drupal } from 'lib/drupal'
import { Layout } from 'components/layout'
import { NodeArticleTeaser } from 'components/node--article--teaser'
import { WhyChooseUs } from 'components/why-choose-us'
import { HomeHeader } from 'components/home-header'
import { Testimonials } from 'components/testimonials'
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
        <HomeHeader />
        <Testimonials nodes={nodes} />
        <WhyChooseUs />
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
