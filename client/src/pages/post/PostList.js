import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CommonTable from '../../components/table/CommonTable'
import CommonTableRow from '../../components/table/CommonTableRow'
import CommonTableCol from '../../components/table/CommonTableCol'
// import PostWrite from './PostWrite'
import { boardList } from '../../Data'

function PostList() {
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    setDataList(boardList)
  }, [])

  return (
    <div className="post-wrap">
      <div className="post-main">
        <h1 className="postTitle">게시판</h1>

        <>
          <CommonTable headersName={['NO', '제목', '작성자', '등록일']}>
            {dataList
              ? dataList.map((item, index) => {
                  return (
                    <CommonTableRow key={index}>
                      <CommonTableCol>{item.no}</CommonTableCol>
                      <CommonTableCol>
                        <Link to={'/PostView/' + item.no}>{item.title}</Link>
                      </CommonTableCol>
                      <CommonTableCol>{item.user}</CommonTableCol>
                      <CommonTableCol>{item.createDate}</CommonTableCol>
                    </CommonTableRow>
                  )
                })
              : ''}
          </CommonTable>
        </>

        <div className="btn-wrap">
          <Link to="/PostWrite">
            <button className="post-write-btn">글쓰기</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostList
