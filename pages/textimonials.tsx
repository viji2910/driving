import Head from "next/head";
import { GetStaticPropsResult } from "next";
import { DrupalNode } from "next-drupal";
import { drupal } from "lib/drupal";
import { Layout } from "components/layout";
import { Testimonials } from "components/testimonials";

interface TestimonialsPageProps {
  nodes: DrupalNode[];
}

export default function TestimonialsPage({ nodes }: TestimonialsPageProps) {
  return (
    <Layout>
      <Head>
        <title>Vijinder Singh Boparai Driving School | Testimonials</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <div>
        <Testimonials nodes={nodes} />
      </div>
    </Layout>
  );
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<TestimonialsPageProps>> {
  const nodes = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--testimonials",
    context,
    {
      params: {
        "filter[status]": 1,
        "fields[node--testimonials]": "title,path,field_image,uid,created",
        include: "field_image,uid",
        sort: "-created",
      },
    }
  );

  return {
    props: {
      nodes,
    },
  };
}
