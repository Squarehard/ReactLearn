
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
    <style jsx>{`
     a {
       text-decoration: none;
       color: blue;
       font-family: "Arial";
     }

     a:hover {
       opacity: 0.6;
     }
   `}</style>
  </p>
)



function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}


const Index = () => (
  <div>
    <h1> Index page </h1>
    <Link href="/about">
     <button  >About Page</button>
    </Link>

    <QueryPostPageLink title="Learn Next.js is awesome"/>
    <PathPostPageLink id="routerLesson" title="Next router lesson"/>

    {getPosts().map(
      (post) => {
        return(<PathPostPageLink id={post.id} title={post.title}/>);
      })
    }


    <p>Hello Next.js 2</p>


    <style jsx>{`
      h1, a {
        font-family: "Arial";
        color:green;
      }



    `}</style>
  </div>
)

export default withLayout(Index)
