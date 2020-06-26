import React, { useState, useContext } from "react"
import ReactHtml from "react-html-parser"
import { Link } from "gatsby"

import SEO from "../components/seo"
import LangSwitch from "../components/LangSwitch"

import i18n from "../helpers/i18n"
import Context from "../helpers/context"
import { CASE_PATH } from "../helpers/constants"
// import { getLang } from "../helpers/utils"

const IndexPage = ({ data }) => {
  const { states } = useContext(Context)
  const { sizes, lang } = states
  const { isMobile } = sizes
  const [expands, setExpands] = useState({ techniques: false, tools: false, experience: false })

  const { edges } = data.allMarkdownRemark
  const intros = edges.filter(edge => edge.node.frontmatter.type === "intro")
  const works = edges.filter(edge => edge.node.frontmatter.type !== "intro")

  let colData = {}
  intros.forEach(intro => {
    const { frontmatter, html } = intro.node
    const { slug } = frontmatter
    const zh = html.split("<!-- lang -->")[0]
    const en = html.split("<!-- lang -->")[1]
    const cx = slug === "about" || slug === "experience" ? "indent" : ""

    colData = {
      ...colData,
      [slug]: {
        zh: (
          <div key={slug} className={cx}>
            {ReactHtml(zh)}
          </div>
        ),
        en: (
          <div key={slug} className={cx}>
            {ReactHtml(en)}
          </div>
        ),
      },
    }
  })

  const genCol = key => {
    const expanded = expands[key]
    const isAbout = key === "about"
    return (
      <div className={`col ${key}`} key={key}>
        <div className="heading">
          <h1 className="sectionTitle">{i18n[key][lang]}</h1>
          {!isAbout ? (
            <a className="expand" onClick={() => setExpands({ ...expands, [key]: !expanded })}>
              {"("}
              <span>{i18n[expanded ? "fold" : "expand"][lang]}</span>
              {")"}
            </a>
          ) : null}
          {isAbout && isMobile ? (
            <Link to="/more" className="sidebarTrigger">
              {i18n.more[lang]}
            </Link>
          ) : null}
        </div>
        <div
          lang={lang}
          className={`content ${key === "experience" ? "exp" : ""}`}
          style={isAbout ? {} : { height: expanded ? "auto" : 0, marginBottom: expanded ? 60 : 0 }}
        >
          {colData[key][lang]}
        </div>
      </div>
    )
  }

  const keys = ["about", "techniques", "tools", "experience"]
  const introSections = isMobile ? [keys[0]] : keys
  const cols = introSections.map(key => genCol(key))

  const list = works.map(w => {
    const { frontmatter } = w.node
    const { thumb, titleEn, titleZh } = frontmatter
    const slug = titleEn.toLowerCase().replace(/ /gi, "-").replace(/'/gi, "")
    const title = lang === "zh" ? titleZh : titleEn

    return (
      <Link state={{ fromHome: true }} to={`/work/${slug}`} key={slug}>
        <div className="thumb" key={thumb} style={{ backgroundImage: `url(${CASE_PATH}/${thumb})` }}>
          <span>{title}</span>
        </div>
      </Link>
    )
  })

  return (
    <>
      <SEO title="mafmadmaf" lang={lang} />
      <div className="grid">
        <LangSwitch isHome atTop />
        {cols}
        <div className="listWrap">{list}</div>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            titleEn
            titleZh
            slug
            type
            thumb
            category
          }
        }
      }
    }
  }
`

export default IndexPage
