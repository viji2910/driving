import Head from "next/head";
import { GetStaticPropsResult } from "next";
import { DrupalNode } from "next-drupal";
import { drupal } from "lib/drupal";
import { Layout } from "components/layout";
import { NodeArticleTeaser } from "components/node--article--teaser";

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
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8">
          <div
            role="list"
            className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16"
          >
            {nodes?.length ? (
              nodes?.map((node) => (
                <NodeArticleTeaser key={node.id} node={node} />
              ))
            ) : (
              <p className="py-4">No nodes found</p>
            )}
          </div>
        </div>
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
