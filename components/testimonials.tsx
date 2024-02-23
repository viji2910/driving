import Link from 'next/link'
import { NodeArticleTeaser } from './node--article--teaser'

export const Testimonials = ({ nodes }) => {
  return (
    <div className="bg-black">
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
        <p className="text-center">
          We’re a dynamic group of individuals who are passionate about what we
          do.
        </p>
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
        <div className="text-center py-16">
          <Link
            href="/testimonials"
            className="ml-6 rounded-full text-2xl hover:bg-[#2d3d76] hover:text-white bg-gray-100 border text-black border-gray-950 hover:text-white py-5 px-8"
          >
            Read All
          </Link>
        </div>
      </div>
    </div>
  )
}
