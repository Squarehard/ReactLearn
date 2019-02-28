
// This is the Link API
import Link from 'next/link'
import {withLayout} from '../components/Layout'


const QueryPostPageLink = (props) => (
  <p>
    <Link href={`/post?title=cenas${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </p>
)

const PathPostPageLink = (props) => (
  <p>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </p>
)




const Index = () => (
  <div>
    <Link href="/about">
     <button  >About Page</button>
    </Link>

    <QueryPostPageLink title="Learn Next.js is awesome"/>
    <PathPostPageLink id="routerLesson" title="Next router lesson"/>

    <p>Hello Next.js 2</p>
  </div>
)

export default withLayout(Index)
