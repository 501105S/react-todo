import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPostByNo } from '../../Data'

function PostView() {
  const [data, setData] = useState({})
  const { no } = useParams()

  useEffect(() => {
    setData(getPostByNo(no))
  }, [])

  return (
    <div className="post-wrap">
      <h1 className="postTitle">게시물</h1>

      <div className="post-view-wrap">
        {data ? (
          <>
            <div className="view-tbl-box">
              <label className="view-tbl-title">NO</label>
              <div className="view-tbl-content">{data.no}</div>
            </div>
            <div className="view-tbl-box">
              <label className="view-tbl-title">제목</label>
              <div className="view-tbl-content">{data.title}</div>
            </div>
            <div className="view-tbl-box">
              <label className="view-tbl-title">작성자</label>
              <div className="view-tbl-content">{data.user}</div>
            </div>
            <div className="view-tbl-box">
              <label className="view-tbl-title">작성일</label>
              <div className="view-tbl-content">{data.createDate}</div>
            </div>
            <div className="view-tbl-box content">
              <label className="view-tbl-title">내용</label>
              <div className="view-tbl-content">{data.content}</div>
            </div>
          </>
        ) : (
          '해당 게시글을 찾을 수 없습니다'
        )}
        <div className="btn-wrap">
          <Link to="/PostList">
            <button className="post-write-btn edit">수정</button>
            <button className="post-write-btn">목록</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostView
