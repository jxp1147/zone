
import { useState ,useEffect } from 'react';
import CodeBlock from '../../../components/codeBlock' //代码块组件
import Markdown from 'react-markdown';
// import remarkGfm from 'remark-gfm'
// import rehypeRaw from 'rehype-raw'
import source from "./index.md"
import HeadingBlock from "../../../components/HeadingBlock";
export default function () {
  const [content, setcontent] = useState('')
  // const readmePath = require("./index.md");
  useEffect(() => {
    fetch(source)
    .then(response => {
      return response.text()
    })
    .then(text => {
      setcontent(text)
    })
    return () => {
    }
  }, [])
  // console.log('conten/t',content)
  return (
    <div >
      <div className="result-pane">
        <Markdown language='javascript'  children={content} components={{
          code: CodeBlock,
          heading: HeadingBlock
        }} />
      </div>
    </div>
  );
}