import './index.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { navList } from "./index.meta"
import { Link } from 'react-router-dom'
import 'highlight.js/styles/androidstudio.css'  //代码块样式 
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
function BasicLayout (props) {
  return (
    <div style={{minHeight:'100vh'}}>
      <Layout  >
        <Sider width={200}>
          <Menu
            mode="inline"
            multiple={false}
            defaultSelectedKeys={['nav-0']}
            defaultOpenKeys={['nav-0']}
            style={{ height: '100%' }}
          >
            {
              navList.map((it, i) => {
                if (!it.includes) {
                  return (
                    <Menu.Item key={'nav-' + i} >
                      <Link exact={1} to={it.rooter} key={i} > {it.title}</Link>
                    </Menu.Item>
                  )
                } else {
                  return (
                    <SubMenu key={'nav-' + i} title={it.title} >
                      {
                        it.includes.map((item, index) => (
                          <Menu.Item key={`subNav-${i}-${index}`}>
                            <Link exact={1} to={item.rooter} >{item.title}</Link>
                          </Menu.Item>
                        ))
                      }
                    </SubMenu>
                  )
                }
              })}
          </Menu>
        </Sider>
        <Content > {props.children}</Content>
      </Layout>
    </div>
  );
}
export default BasicLayout;
