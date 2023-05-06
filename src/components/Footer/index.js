import React from "react"

import S from "./style.module.scss"

export default function Footer() {
  return (
    <div className={S.footer}>
      <div className={S.col}>
        <a href="mailto:fredmamono@gmail.com">fredmamono@gmail.com</a>
      </div>
      <div className={S.col}>© 1987-2023 maf-works.com All rights reserved.</div>
    </div>
  )
}
