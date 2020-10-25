import BaseLayout from "../components/baseLayout"
import React from "react"

const title = "Kontakt"

const KontaktPage = () => {
  return (
    <BaseLayout title={title}>
      <div className="container mx-auto px-6 space-y-6 md:space-y-8 mt-24 lg:mt-32">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-graviton-blue">
          Kontakt
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.2900278123147!2d20.28382211591105!3d49.062121494293685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e3ac64b0d889f%3A0x6c9761e321169ffd!2sGraviton%2C%20Ltd.!5e0!3m2!1sen!2ssk!4v1603218371237!5m2!1sen!2ssk"
          frameBorder="0"
          aria-hidden="false"
          tabIndex="0"
          className="w-full min-h-1/2-screen sm:hidden"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="space-y-2">
            <h2 className="font-light text-lg">Sídlo spoločnosti</h2>
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
          <div className="space-y-2">
            <h2 className="font-light text-lg">Vedenie spoločnosti</h2>
            <div>
              Jozef Kerdík
              <br />
              Jakub Koščák
            </div>
          </div>
          <div className="space-y-2">
            <table className="table-fixed">
              <tbody>
                <tr>
                  <td className="font-light pr-4">E-mail</td>
                  <td>
                    <a
                      href="mailto:graviton@graviton.sk"
                      className="text-graviton-blue underline"
                    >
                      graviton@graviton.sk
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-light">Tel.</td>
                  <td>
                    <a
                      href="tel:0527723883"
                      className="text-graviton-blue underline"
                    >
                      052 7723 883
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-2">
            <table className="table-fixed">
              <tbody>
                <tr>
                  <td className="font-light">IČO</td>
                  <td>31733123</td>
                </tr>
                <tr>
                  <td className="font-light">DIČ</td>
                  <td>2020515310</td>
                </tr>
                <tr>
                  <td className="font-light pr-4">IČ DPH</td>
                  <td>SK2020515310 podľa § 4</td>
                </tr>
              </tbody>
            </table>
            <p>
              Spoločnosť je zapísaná v obchodnom registri, vedenom Okresným
              súdom v Prešove, oddiel Sro, vložka č. 3264/P.
            </p>
          </div>
        </div>
        <p>
          GRAVITON je registrovaným členom{" "}
          <a
            className="text-graviton-blue underline"
            href="https://uniavaharov.sk/"
          >
            Únie váharov Slovenskej Republiky
          </a>
          .
        </p>
        <p className="max-w-lg">
          Spoločnosť má certifikát spôsobilosti č. 4579/19 v oblasti metrológie
          podľa § 29 zákona č. 157/2018 Z. z. o metrológii a o zmene a doplnení
          niektorých zákonov v znení neskorších predpisov.
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.2900278123147!2d20.28382211591105!3d49.062121494293685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e3ac64b0d889f%3A0x6c9761e321169ffd!2sGraviton%2C%20Ltd.!5e0!3m2!1sen!2ssk!4v1603218371237!5m2!1sen!2ssk"
        frameBorder="0"
        aria-hidden="false"
        tabIndex="0"
        className="w-screen min-h-1/2-screen mt-8 lg:mt-16 -mb-12 hidden sm:block"
      />
    </BaseLayout>
  )
}

export default KontaktPage
