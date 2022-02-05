import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

function PostWrite() {
  const [writeContent, setWriteContent] = useState({
    title: '',
  })

  const [viewContent, setViewContent] = useState([])

  const getValue = (e) => {
    const { name, value } = e.target
    setWriteContent({
      ...writeContent,
      [name]: value,
    })
    console.log(writeContent)
  }
  return (
    <div className="post-wrap">
      <div className="post-main">
        <h1 className="postTitle">글쓰기</h1>
        <form className="write-form">
          <div className="form-content-wrap">
            <div className="form-content title">
              <label>제 목</label>
              <input
                name="title"
                type="text"
                onChange={getValue}
                placeholder="제목을 입력하세요"
              />
            </div>
          </div>
          <div className="form-editor">
            <CKEditor
              editor={ClassicEditor}
              data="<p></p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor)
              }}
              onChange={(event, editor) => {
                const data = editor.getData()
                console.log({ event, editor, data })
                setWriteContent({
                  ...writeContent,
                  content: data,
                })
                console.log(writeContent)
              }}
              onBlur={(event, editor) => {
                // console.log('Blur.', editor)
              }}
              onFocus={(event, editor) => {
                // console.log('Focus.', editor)
              }}
            />
          </div>
        </form>

        <div className="btn-wrap">
          <Link to="/PostList">
            <button className="post-write-btn write-cancel">취소</button>
          </Link>
          <button
            className="post-write-btn"
            onClick={() => {
              setViewContent(viewContent.concat({ ...writeContent }))
              console.log(setViewContent)
            }} //입력버튼 클릭 시 빈 배열안에 내용을 추가해준다
          >
            완료
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostWrite
