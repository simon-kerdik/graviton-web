import React from "react"
import BaseLayout from "../components/baseLayout"

const IndexPage = () => {
  return (
    <BaseLayout>
      <div className="space-y-12">
        <h1 className="text-4xl font-bold text-graviton-blue leading-tight uppercase pt-16 pb-6">
          Vývoj a výroba vážiacich systémov
        </h1>
        <div className="-mx-6 py-20 px-6 bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 91.148387"
            width="6em"
            height="6em"
            className="text-blue-200 absolute z-0 -mt-8"
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
          <p className="ml-8 text-3xl font-light relative z-10">
            Graviton je spoločnosť vyrábajúca inovatívne váhy do každého
            prostredia.
          </p>
        </div>
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-light">Váhy na mieru</h2>
            <p>
              Špecializujeme sa na komplexné zadania, pre ktoré váhy zo sériovej
              výroby nestačia.
            </p>
            <p>
              Naše váhy vážia v betonárňach, na výrobných linkách, pri ťažbe
              dreva, štrku, siláži, mletí múky, výrobe syra…
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-light">Spoľahlivosť</h2>
            <p>
              Naše konštrukčné riešenia umožňujú prevádzku v náročných
              podmienkach.
            </p>
            <p>
              Používame kvalitné komponenty s minimálnými nárokmi na údržbu.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h3>Graviton v číslach</h3>
          <div className="bg-blue-900 text-white">
            <div className="border-b border-white p-4">
              <h4>Skúsenosti</h4>
              <div className="mt-4 text-blue-200">Máme</div>
              <span className="text-6xl font-thin leading-tight">30</span>
              <div className="mt-0">rokov znalostí</div>
            </div>
            <div className="border-b border-white p-4">
              <h4>Expertíza</h4>
              <div className="mt-4 text-blue-200">Realizovali sme</div>
              <span className="text-6xl font-thin leading-tight">1500</span>
              <div>projektov</div>
            </div>
            <div className="border-b border-white p-4">
              <h4>Inovácia</h4>
              <div className="mt-4 text-blue-200">Vyvinuli sme</div>
              <span className="text-6xl font-thin leading-tight">17</span>
              <div>jedinečných riešení</div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default IndexPage
