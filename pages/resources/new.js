
import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const DEFAULT_DATA = {
    title: "",
    description: "",
    link: "",
    priority: "2",
    timeToFinish: 60
}

const resourceCreate = () => {

    const router = useRouter();

    const createResource = formData => {
        axios.post("/api/resources", formData)
            .then(_ => router.push("/"))
            .catch(err => alert(err?.response?.data));
    }

    return (
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <ResourceForm
                            onFormSubmit={createResource}
                        />
                    </div>
                </div>
            </div>
        </Layout>

    )


}

export default resourceCreate