import React from "react"
import BaseLayout from "../components/baseLayout"
import { useInView } from "react-intersection-observer"

const IndexPage = () => {
  const [coverRef, coverIsInView] = useInView()

  const navColor = coverIsInView ? "white" : "black"

  const description =
    "Graviton je spoločnosť, ktorá navrhuje a vyrába elektronicko-strojné " +
    "konštrukcie pre váženie a meranie ďaľších fyzikálnych veličín."

  return (
    <BaseLayout navColor={navColor} description={description}>
      <div
        className="flex flex-wrap-reverse lg:flex-no-wrap lg:h-screen"
        ref={coverRef}
      >
        <div className="relative w-full lg:w-1/2">
          <picture>
            <source srcSet="/snimac_sily.webp" type="image/webp" />
            <source srcSet="/snimac_sily.jpg" type="image/jpeg" />
            <img
              src="/snimac_sily.jpg"
              alt="Snímač sily"
              className="w-full h-full object-cover object-bottom"
            />
          </picture>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-700 via-blue-400 to-pink-700 opacity-75">
            {" "}
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-gray-900 flex items-center lg:justify-center">
          <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl leading-tight font-light uppercase px-8 pt-40 pb-16 lg:p-20 pb-6 z-10">
            Vývoj a výroba
            <br />
            vážiacich
            <br />
            systémov
          </h1>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="md:w-8/12 xl:w-5/12 mx-auto py-20 lg:py-64 text-3xl sm:text-4xl lg:text-5xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 91.148387"
            width="3em"
            height="3em"
            className="text-blue-100 absolute z-0 -mt-6 ml-4 lg:ml-0 lg:-mt-10"
          >
            <g transform="matrix(1.3333,0,0,-1.3333,-151.17355,423.51875)">
              <g clipPath="M 0,566.93 H 566.93 V 0 H 0 Z">
                <g transform="translate(150.78,270.75)">
                  <path
                    d="m 0,0 c -1.398,-0.943 -3.125,-1.42 -5.188,-1.42 -3.277,0 -5.708,1.152 -7.312,3.441 -1.609,2.309 -2.408,5.346 -2.408,9.118 v 0.736 c 0,4.296 0.814,7.814 2.434,10.544 1.627,2.744 4.078,4.111 7.354,4.111 1.995,0 3.7,-0.463 5.12,-1.404 1.41,-0.945 2.559,-2.208 3.438,-3.805 V 3.98 C 2.534,2.261 1.388,0.932 0,0 m -5.247,42.828 c -17.761,0 -32.15,-14.398 -32.15,-32.157 0,-13.589 8.442,-25.215 20.377,-29.92 h 0.009 c 0.019,-0.009 0.041,-0.009 0.054,-0.021 3.22,-1.251 6.684,-2.007 10.316,-2.172 h 0.045 c 0.057,0 0.112,0 0.17,-0.004 0.141,0 0.29,-0.008 0.437,-0.008 0.223,-0.012 0.448,-0.012 0.665,-0.012 h 0.077 c 0.989,0 1.976,0.044 2.95,0.135 v 0.065 c 3.548,0.466 6.389,1.8 8.522,3.997 2.713,2.788 4.073,6.621 4.073,11.5 V 23.205 C 8.621,25.28 6.538,27.021 4.162,28.283 4.092,28.323 3.943,28.294 3.938,28.125 3.922,27.657 3.909,27.196 3.906,26.73 l -0.01,-0.053 c -1.213,1.762 -2.705,3.1 -4.496,4.033 -1.782,0.934 -3.863,1.394 -6.228,1.394 -4.671,0 -8.321,-1.861 -10.959,-5.574 -2.65,-3.707 -3.972,-8.594 -3.972,-14.655 v -0.736 c 0,-5.395 1.322,-9.77 3.972,-13.115 2.638,-3.339 6.267,-5.017 10.888,-5.017 2.225,0 4.199,0.415 5.917,1.224 1.722,0.818 3.195,2.009 4.42,3.585 v -3.585 c 0,-3.181 -0.708,-5.625 -2.132,-7.343 -1.435,-1.721 -3.679,-2.54 -6.743,-2.58 -1.82,-0.015 -3.948,0.215 -6.037,0.704 -0.046,0.009 -0.082,0.021 -0.114,0.03 -0.117,0.032 -0.233,0.061 -0.338,0.084 -11.353,2.961 -19.735,13.281 -19.735,25.545 0,14.599 11.822,26.418 26.414,26.418 14.577,0 26.399,-11.819 26.399,-26.418 0,-5.398 -1.624,-10.43 -4.421,-14.606 v -1.834 c 0,-2.754 -0.34,-5.294 -1.025,-7.615 -0.051,-0.145 0.058,-0.258 0.16,-0.174 6.759,5.891 11.027,14.562 11.027,24.229 0,17.759 -14.39,32.157 -32.14,32.157"
                    fill="currentColor"
                  />
                </g>
              </g>
            </g>
          </svg>
          <h2 className="ml-12 font-light relative z-10">
            Graviton je spoločnosť, ktorá navrhuje a vyrába elektronicko-strojné
            konštrukcie pre váženie a meranie ďaľších fyzikálnych veličín.
          </h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 font-light text-xl lg:text-2xl bg-gray-100">
        <picture>
          <source
            srcSet="/vahy_768.webp"
            type="image/webp"
            media="(min-width: 768px)"
          />
          <source
            srcSet="/vahy_768.jpg"
            type="image/jpeg"
            media="(min-width: 768px)"
          />
          <source srcSet="/vahy.webp" type="image/webp" />
          <source srcSet="/vahy.jpeg" type="image/jpeg" />
          <img src="/vahy.jpg" alt="Váhy" className="w-full" loading="lazy" />
        </picture>
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-lg p-12">
            <h3 className="text-3xl lg:text-4xl font-light mb-2">
              Váhy na mieru
            </h3>
            <p>
              Špecializujeme sa na komplexné zadania, pre ktoré váhy zo sériovej
              výroby nestačia.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center order-2 md:order-none">
          <div className="max-w-lg p-12">
            <h3 className="text-3xl lg:text-4xl font-light mb-2">
              Spoľahlivosť
            </h3>
            <p>
              Naše konštrukčné riešenia umožňujú prevádzku v náročných
              podmienkach s minimálnými nárokmi na údržbu.
            </p>
          </div>
        </div>
        <picture>
          <source
            srcSet="/farbenie_betonu_768.webp"
            type="image/webp"
            media="(min-width: 768px)"
          />
          <source
            srcSet="/farbenie_betonu_768.jpg"
            type="image/jpeg"
            media="(min-width: 768px)"
          />
          <source srcSet="/farbenie_betonu.webp" type="image/webp" />
          <source srcSet="/farbenie_betonu.jpeg" type="image/jpeg" />
          <img
            src="/farbenie_betonu.jpg"
            alt="Váženie farieb do betónu"
            className="w-full order-1"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="space-y-12 mt-12 container mx-auto">
        <div className="space-y-2 px-6">
          <h3 className="ml-6 md:ml-12 lg:ml-16">Graviton v číslach</h3>
          <div className="bg-graviton-blue text-white flex flex-col md:flex-row">
            <div className="border-b border-r border-white p-6 md:p-8 md:pl-12 lg:pl-16 md:w-1/3">
              <h4>Znalosti</h4>
              <div className="mt-4 text-blue-200">Máme</div>
              <span className="text-6xl font-thin leading-tight">30</span>
              <div className="mt-0">rokov skúseností</div>
            </div>
            <div className="border-b border-r border-white p-6 md:p-8 md:pl-12 lg:pl-16 md:w-1/3">
              <h4>Expertíza</h4>
              <div className="mt-4 text-blue-200">Realizovali sme viac než</div>
              <span className="text-6xl font-thin leading-tight">1500</span>
              <div>projektov</div>
            </div>
            <div className="border-b border-white p-6 md:p-8 md:pl-12 lg:pl-16 md:w-1/3">
              <h4>Inovácia</h4>
              <div className="mt-4 text-blue-200">Vyvinuli sme</div>
              <span className="text-6xl font-thin leading-tight">17</span>
              <div>jedinečných riešení</div>
            </div>
          </div>
        </div>
      </div>
      <picture>
        <source srcSet="/skica.webp" type="image/webp" />
        <source srcSet="/skica.jpg" type="image/jpeg" />
        <img
          src="/skica.jpg"
          alt="Skica"
          className="w-full container mx-auto mt-12"
          loading="lazy"
        />
      </picture>
    </BaseLayout>
  )
}

export default IndexPage
