
import Layout from "components/Layout";
import Link from "next/link";
import axios from "axios";

const ResourceDetail = ({resource}) => {
const ActiveResource = ()=> {
 axios.patch("/api/resources" , {...resource,status:"active"})
    .then(_ => location.reload())
    .catch(_=> alert("cannot activate the resource"))
}

    return (
            <Layout>
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <div className="content is-medium">
                            <h2 className="subtitle is-4">{resource.createdAt}</h2>
                            <h1 className="title">{resource.title}</h1>
                            <p>{resource.description}</p>
                            <p>Time to finish resource: {resource.timeToFinish} min</p>
                            <Link href= {`/resources/${resource.id}/edit`}>
                            <a className="button is-warning ">Update</a>
                            </Link>
                            <button className="button is-success ml-2" onClick={ActiveResource}>
                                Activate
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
            )
}


export async function getServerSideProps({params}) {
    const dataRes = await fetch(`http://localhost:3001/api/resources/${params.id}`);
    const data = await dataRes.json();
  
    return {
      props: {
        resource: data
      }
    }
  }
  

export default ResourceDetail;