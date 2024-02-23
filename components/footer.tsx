export const Footer = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-16 py-16">
      <div>
        <h2 className="text-3xl my-8 text-[#eda029] font-bold">
          Behind The Wheels
        </h2>
        <p className="text-white text-gray-300">
          Behind the wheels is a driving school based in Surrey, BC, focused on
          providing students with exam ready experience.
        </p>
      </div>
      <div></div>
      <div>
        <h3>Contact Us</h3>
        <div className="flex">
          <img
            src="https://assets-global.website-files.com/64ccbd740d06c19db055b7e7/659634882d32d0e5e8dd39e4_icons8-telephone-64.png"
            loading="lazy"
            alt=""
            className="contacts-icon w-8 mr-2"
          />
          <a
            href="tel:+1604-728-3816"
            className="link-block-5 w-inline-block text-gray-300"
          >
            <div className="contact-link">+1 604-728-3816</div>
          </a>
        </div>
        <div className="flex my-6">
          <img
            src="https://assets-global.website-files.com/64ccbd740d06c19db055b7e7/65963488d2fecaaf25e88536_icons8-email-30%20(1).png"
            loading="lazy"
            alt=""
            className="contacts-icon w-6 mr-4"
          />
          <a href="#" className="link-block-5 w-inline-block text-gray-300">
            <div className="contact-link">vijinder_s@yahoo.in</div>
          </a>
        </div>
      </div>
    </div>
  )
}
