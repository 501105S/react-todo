const boardList = [
  {
    no: 1,
    title: '첫번째 게시글입니다.',
    content: '첫번째 게시글 내용입니다.',
    createDate: 'YYYY-MM-DD',
    user: 'asd',
  },
  {
    no: 2,
    title: '두번째 게시글입니다.',
    content: '두번째 게시글 내용입니다.',
    createDate: 'YYYY-MM-DD',
    user: 'asd',
  },
  {
    no: 3,
    title: '세번째 게시글입니다.',
    content: '세번째 게시글 내용입니다.',
    createDate: 'YYYY-MM-DD',
    user: 'asd',
  },
  {
    no: 4,
    title: '네번째 게시글입니다.',
    content: '네번째 게시글 내용입니다.',
    createDate: 'YYYY-MM-DD',
    user: 'asd',
  },
  {
    no: 5,
    title: '다섯번째 게시글입니다.',
    content: '다섯번째 게시글 내용입니다.',
    createDate: 'YYYY-MM-DD',
    user: 'asd',
  },
  {
    no: 6,
    title: '여섯번째 게시글입니다.',
    content: '여섯번째 게시글 내용입니다.',
    createDate: 'YYYY-MM-DD',
    user: 'dsf',
  },
]

const getPostByNo = (no) => {
  const array = boardList.filter((x) => x.no == no)
  if (array.length == 1) {
    return array[0]
  }
  return null
}

export { boardList, getPostByNo }
