import React, { useState } from "react"
import { animated, useSpring } from "react-spring"
import Link from "next/link"
import { GravitonLogo } from "./gravitonLogo"
import Head from "next/head"

const navLinks = [
  { href: "/", label: "Úvod" },
  { href: "/kontakt", label: "Kontakt" },
]

const BaseLayout = ({ children }) => {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const navSpring = useSpring({ height: navIsOpen ? "100%" : "0%" })

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="px-6 bg-white min-h-screen flex flex-col">
        <nav
          className={`sticky top-0 py-4 flex items-center z-50 ${
            navIsOpen ? "text-white" : ""
          }`}
        >
          <Link href="/">
            <a>
              <GravitonLogo />
            </a>
          </Link>
          <button
            className={`ml-auto p-4 -m-4 ${navIsOpen ? "text-white" : ""}`}
            onClick={() => setNavIsOpen(!navIsOpen)}
          >
            <svg
              viewBox="0 0 20 20"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                className="burger"
                d={
                  navIsOpen ? "M0,0 20,20 M0,20 20,0" : "M0,7 20,7 M0,13 20,13"
                }
              />
            </svg>
          </button>
        </nav>
        <animated.div
          className="border-box fixed top-0 left-0 right-0 px-6 bg-gray-900 text-white text-xl uppercase tracking-wide overflow-hidden z-40"
          style={navSpring}
        >
          <nav className="flex flex-col pt-32 space-y-4">
            {navLinks.map(({ href, label }) => (
              <Link href={href}>
                <a>{label}</a>
              </Link>
            ))}
          </nav>
        </animated.div>

        <main className="mb-12">{children}</main>

        <footer className="mt-auto -mx-6 px-6 pt-16 pb-6 text-sm bg-gray-900 text-white font-light tracking-wide flex flex-wrap">
          <div className="w-1/2">
            GRAVITON, s.r.o.
            <br />
            Široká 4423/2
            <br />
            Poprad 058 01
            <br />
            Slovenská republika
          </div>

          <div className="w-1/2 flex flex-col items-end justify-between">
            <div className="flex flex-col items-end">
              <GravitonLogo />
              <span>Váhy na mieru</span>
            </div>

            <a
              href="mailto:graviton@graviton.sk"
              className="text-graviton-blue underline"
            >
              graviton@graviton.sk
            </a>
          </div>

          <p className="text-gray-400 mt-8 mx-auto">
            © {new Date().getFullYear()} GRAVITON, s.r.o.
          </p>
        </footer>

        <style jsx global>{`
          body {
            ${navIsOpen ? "overflow: hidden;" : ""}
          }
        `}</style>
      </div>
    </>
  )
}

export default BaseLayout
