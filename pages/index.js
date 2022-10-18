import Layout from "components/Layout";
import Newsletter from "components/Newsletter";
import ResourceHighlights from "components/ResourceHighlight";
import ResourseList from "components/ResoureList";
import Footer from "components/Footer";
import { useEffect } from "react";




function Home({resources}) {

  return (
    <Layout>
      <ResourceHighlights
        resources={resources.slice(0,2)}
      />
      <Newsletter />
      <ResourseList
        resources={resources.slice(2)}
      />

      <Footer />
    </Layout>

  )
}
// is called everytime you visit the page. function is executed on the server
// data is always gonna be fresh
export async function getServerSideProps() {

  const resData = await fetch("http://localhost:3001/api/resources");
  const data = await resData.json();

  return {
    props:{
     resources: data
    }
  }
}

// gets called only at the build time, and its called only once.

// export async function getStaticProps() {
//   const resData = await fetch("http://localhost:3000/api/resources");
//   const data = await resData.json();

//   return {
//     props:{
//      resources: data
//     }
//   }
// }

export default Home
