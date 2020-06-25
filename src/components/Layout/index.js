import React, { useState, useEffect } from "react"
// import { useStaticQuery, graphql } from "gatsby"

import Context from "../../helpers/context"
import Footer from "../Footer"
import "../../styles/global.scss"
import S from "./style.module.scss"

import { getLang, calSizes, resizeThrottler } from "../../helpers/utils"

const Layout = ({ children }) => {
  const [sizes, setSizes] = useState({ isMobile: false })
  const [lang, setLang] = useState("zh")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSizes(calSizes(window.innerWidth, window.innerHeight))
      window.addEventListener("resize", () => resizeThrottler((winW, winH) => setSizes(calSizes(winW, winH))), {
        capture: true,
        passive: true,
      })
      setLang(getLang())
    }
    return () => {
      window.removeEventListener("resize", resizeThrottler)
    }
  }, [])

  const switchLang = () => {
    setLang(lang === "en" ? "zh" : "en")
  }

  return (
    <Context.Provider
      value={{
        states: {
          sizes,
          lang,
        },
        methods: {
          switchLang,
        },
      }}
    >
      <main>
        {children}
        <Footer />
      </main>
    </Context.Provider>
  )
}

export default Layout
