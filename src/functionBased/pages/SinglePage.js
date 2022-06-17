import React from "react"
import { useParams } from "react-router-dom"

const SinglePage = () => {
    console.log(useParams())
    
    const aboutData = [
        {
            slug: "about-app",
            title: "About the app",
            description:
                "In this app, you can add, delete, submit, and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopen it, you still have access to your to-dos items"
            

        },
        {
            slug: "about-author",
            title: "About the Author",
            description:
                "This app was developed by Erik Robbins, an intern learning JavaScript at Flexwind. He is still learning, so give him some time to prepare for any big projects that may happen in the future."
        }
    ]

    const { slug } = useParams()
    const aboutContent = aboutData.find(item => item.slug === slug)
    const { title, description } = aboutContent


    return (
        <div className="main__content">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
export default SinglePage