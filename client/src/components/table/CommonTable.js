import React from 'react'
import { Link, Route } from 'react-router-dom'
import '../../styles/CommonTbl.css'

function CommonTable(props) {
  const { headersName, children } = props
  return (
    <table className="common-table">
      <thead>
        <tr>
          {headersName.map((item, index) => {
            return (
              <td className="common-tbl-header-col" key={index}>
                {item}
              </td>
            )
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

export default CommonTable
