import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// 设置高亮样式
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
// 设置高亮的语言
import { jsx, javascript} from "react-syntax-highlighter/dist/esm/languages/prism";
import 'highlight.js/styles/androidstudio.css'  //代码块样式
class CodeBlock extends PureComponent {
  constructor(props){
    super()
    // console.log('xxxxxx',props)
  }
  static propTypes = {
    children: PropTypes.array,
    language: PropTypes.string
  };

  static defaultProps = {
    language: 'javascript',
    children:[]
  };

  componentWillMount() {
    // 注册要高亮的语法，
    // 注意：如果不设置打包后供第三方使用是不起作用的
    SyntaxHighlighter.registerLanguage("jsx", jsx);
    SyntaxHighlighter.registerLanguage("javascript", javascript);
    // SyntaxHighlighter.registerLanguage("html", html);
  }

  render() {
    const { children, language } = this.props;
    return (
      <figure className="highlight">
        <SyntaxHighlighter language={language} style={coy}>
          {children}
        </SyntaxHighlighter>
      </figure>
    );
  }
}

export default CodeBlock;