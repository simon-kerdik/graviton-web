import BaseLayout from "../components/baseLayout"
import React from "react"

const KontaktPage = () => {
  return (
    <BaseLayout>
      <div className="mt-4 -mb-12 space-y-8">
        <h1 className="text-3xl text-graviton-blue">Kontakt</h1>
        <div className="flex">
          <div className="w-1/2 space-y-2">
            <div>
              <div>
                GRAVITON, s.r.o.
                <br />
                Široká 4423/2
                <br />
                Poprad 058 01
                <br />
                Slovenská republika
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <a
              href="mailto:graviton@graviton.sk"
              className="text-graviton-blue underline"
            >
              graviton@graviton.sk
            </a>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.2900278123147!2d20.28382211591105!3d49.062121494293685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e3ac64b0d889f%3A0x6c9761e321169ffd!2sGraviton%2C%20Ltd.!5e0!3m2!1sen!2ssk!4v1603218371237!5m2!1sen!2ssk"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          className="w-screen -mx-6 h-64"
        />
      </div>
    </BaseLayout>
  )
}

export default KontaktPage
