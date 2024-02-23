import { Navigation } from 'components/navigation'
import { PreviewAlert } from 'components/preview-alert'
import { Footer } from 'components/footer'

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div className="mx-auto">
        <header className="sticky top-0 z-40 bg-[#F2F1EE]">
          <div className="container flex items-center justify-between py-6 mx-auto">
            <Navigation />
            <button className="rounded-full ... bg-[#eda029] text-white p-4 w-40">
              Get In Touch
            </button>
          </div>
        </header>
        <main className="bg-[#f2f1ee] pt-16">
          <div className="container mx-auto ">{children}</div>
        </main>
        <footer className="bg-black">
          <div className="container mx-auto">
            <Footer />
          </div>
        </footer>
      </div>
    </>
  )
}
