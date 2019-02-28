import Header from './Header'

const contentStyle = {
    width: '100%',
    height: '100%',
    maxWidth: '1024px',
    margin: '0px auto',
}



 const Layout = (props ) => (
    <div >
      <Header/>
      <div style={contentStyle}>

      {props.children}
      </div>
    </div>
)

 const withLayout = (Component) => (props) => <Layout><Component {...props} /></Layout>

export default Layout;
export {
  withLayout,
}
