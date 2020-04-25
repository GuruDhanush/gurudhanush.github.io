import React from "react"
import { Link } from "gatsby"
import useDarkMode from 'use-dark-mode';
import RSS from '../../static/feed-icon.png';


import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  const darkMode = useDarkMode(false);

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.2),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <div style={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `baseline`
      }} >
        <header>{header}</header>
        <div>
          <button type="button" style={{
            border: `none`,
            background: `transparent`,
            outline: `none`
          }} onClick={darkMode.toggle}>
            {
              darkMode.value ? ("☀") : ("☾")
            }
          </button>
        </div>
      </div>

      <main>{children}</main>
      <footer  style={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`
      }} >
        <div>© {new Date().getFullYear()} </div>
        <a  href="/rss.xml" style={{boxShadow: `none`, height:`14px`}} target="_blank">
          <img height="14" width="14" src={RSS} alt="rss-feed"></img>
        </a>

      </footer>
    </div>
  )
}

export default Layout
