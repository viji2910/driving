import { Navigation } from 'components/navigation'

import { PreviewAlert } from 'components/preview-alert'

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div className="mx-auto bg-[#f2f1ee]">
        <header className="sticky top-0 z-40 bg-[#f2f1ee]">
          <div className="container flex items-center justify-between py-6 mx-auto">
            <Navigation />
            <button className="rounded-full ... bg-[#eda029] text-white p-4 w-40">
              Get In Touch
            </button>
          </div>
        </header>
        <main className="container mx-auto">{children}</main>
      </div>
    </>
  )
}
