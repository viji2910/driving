import Image from 'next/image'
import { DrupalNode } from 'next-drupal'

import { absoluteUrl, formatDate } from 'lib/utils'

interface NodeArticleProps {
  node: DrupalNode
}

export function NodeArticle({ node, ...props }: NodeArticleProps) {
  console.log(node?.field_image)
  return (
    <article {...props}>
      <h1 className="mb-4 text-2xl font-black leading-tight">{node.title}</h1>
      <div className="mb-4 text-gray-600">
        {node.uid?.display_name ? (
          <span>
            Posted by{' '}
            <span className="font-semibold">{node.uid?.display_name}</span>
          </span>
        ) : null}
        <span> - {formatDate(node.created)}</span>
      </div>
      {node.field_image && (
        <figure className="float-left mr-6">
          <img
            src={node?.field_image?.image_style_uri['320x210']}
            alt={node.field_image.resourceIdObjMeta.alt}
          />
          {node.field_image.resourceIdObjMeta.title && (
            <figcaption className="py-2 text-sm text-center text-gray-600">
              {node.field_image.resourceIdObjMeta.title}
            </figcaption>
          )}
        </figure>
      )}
      {node.body?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: node.body?.processed }}
          className="text-xl leading-loose prose"
        />
      )}
    </article>
  )
}
