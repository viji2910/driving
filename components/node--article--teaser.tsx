import Image from 'next/image'
import Link from 'next/link'
import { DrupalNode } from 'next-drupal'

import { absoluteUrl, formatDate } from 'lib/utils'

interface NodeArticleTeaserProps {
  node: DrupalNode
}

export function NodeArticleTeaser({ node, ...props }: NodeArticleTeaserProps) {
  return (
    <div
      className="hover:border-2 rounded-lg text-center bg-[#1F2937] hover:border-[#eda029] p-4"
      {...props}
    >
      <div className="items-center gap-x-6">
        <Link href={node?.path?.alias}>
          {node.field_image && (
            <figure className="my-4 text-center">
              <Image
                src={absoluteUrl(node.field_image.uri.url)}
                width={400}
                alt={node.field_image.resourceIdObjMeta.alt}
                height={400}
                className="rounded-full w-64 h-64 mx-auto"
              />
            </figure>
          )}
        </Link>
        <div>
          <Link href={node?.path?.alias}>
            <h3 className="text-2xl text-white font-semibold leading-7 tracking-tight text-gray-900">
              {node.title}
            </h3>
          </Link>
          <Link
            href={node?.path?.alias}
            className="inline-flex items-center p-4 mt-4 rounded-full bg-[#eda029] text-white p-4 hover:bg-[#2d3d76]"
          >
            Read Testimonial
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 ml-2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

/*
<article {...props}>
      <Link
        href={node?.path?.alias}
        className="no-underline hover:text-blue-600"
      >
        <h2 className="mb-4 text-4xl font-bold">{node.title}</h2>
      </Link>
      <div className="mb-4 text-gray-600">
        {node.uid?.display_name ? (
          <span>
            Posted by{' '}
            <span className="font-semibold">{node.uid?.display_name}</span>
          </span>
        ) : null}
        <span> - {formatDate(node.created)}</span>
      </div>


    </article>*/
