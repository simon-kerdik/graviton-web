import React, { useState } from "react"
import { animated, useSpring } from "react-spring"
import Link from "next/link"
import { GravitonLogo } from "./gravitonLogo"
import Head from "next/head"

const navLinks = [{ href: "/kontakt", label: "Kontakt" }]

const BaseLayout = ({ children, title, navColor = "black" }) => {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const navSpring = useSpring({ height: navIsOpen ? "100%" : "0%" })

  if (navIsOpen) {
    navColor = "black"
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>{title ? `${title} | Graviton` : "Graviton"}</title>
      </Head>
      <div className="bg-white min-h-screen flex flex-col">
        <nav
          className={`fixed top-0 left-0 right-0 py-4 px-6 lg:py-6 lg:px-8 flex items-center z-50 text-${navColor} ${
            navColor === "black" && !navIsOpen ? "bg-white" : ""
          } bg-opacity-75`}
        >
          <Link href="/">
            <a className="lg:text-lg">
              <GravitonLogo />
            </a>
          </Link>
          <nav
            className={`ml-auto space-x-6 uppercase text-lg hidden md:block hover:text-${navColor} hover:text-opacity-50`}
          >
            {navLinks.map(({ href, label }) => (
              <Link href={href} key={href}>
                <a className={`hover:text-${navColor}`}>{label}</a>
              </Link>
            ))}
          </nav>
          <button
            className={`ml-auto p-4 -m-4 md:hidden text-${navColor}`}
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
                d={
                  navIsOpen ? "M0,0 20,20 M0,20 20,0" : "M0,7 20,7 M0,13 20,13"
                }
              />
            </svg>
          </button>
        </nav>
        <animated.div
          className={`border-box fixed top-0 left-0 right-0 px-6 bg-white text-xl uppercase tracking-wide overflow-hidden z-40`}
          style={navSpring}
        >
          <nav className="flex flex-col pt-32 space-y-4">
            {navLinks.map(({ href, label }) => (
              <Link href={href} key={`collapse-nav-${href}`}>
                <a>{label}</a>
              </Link>
            ))}
          </nav>
        </animated.div>

        <main className="mb-12">{children}</main>

        <footer className="mt-auto px-6 pt-16 pb-6 text-sm lg:text-base bg-gray-900 text-white font-light tracking-wide">
          <div className="container mx-auto flex flex-wrap lg:flex-no-wrap lg:space-x-16">
            <div className="w-1/2 lg:w-auto flex-shrink-0">
              GRAVITON, s.r.o.
              <br />
              Široká 4423/2
              <br />
              Poprad 058 01
              <br />
              Slovenská republika
            </div>

            <div className="w-1/2 lg:w-full flex flex-col lg:flex-row-reverse items-end lg:items-start justify-between">
              <div className="flex flex-col items-end">
                <GravitonLogo />
                <span>Váhy na mieru</span>
              </div>

              <a
                href="mailto:graviton@graviton.sk"
                className="textext-graviton-blue underline lg:mr-12"
              >
                graviton@graviton.sk
              </a>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
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
