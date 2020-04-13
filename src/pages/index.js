import React from "react"
import { Helmet } from "react-helmet"

export default () => (
    <div className="container">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Karn Rahal</title>
            <meta name="description" content="Karn Rahal | Software Engineer" />
            <html lang="en" />
        </Helmet>
        <div>
            <div>
                <h1>Hey, I'm Karn.</h1>
                <p>
                    I'm an ambitious software engineer experienced in web and mobile development, machine learning, and DevOps. My passion lies in building solutions to real, human problems.
                </p>
                <p>
                    Currently, I'm studying Computer Engineering at <a href="https://www.ubc.ca/" target="_blank" rel="noopener">UBC</a> and will be graduating this May.
                    I'll begin working full-time this June as a Software Engineer at <a href="https://www.facebook.com/" target="_blank" rel="noopener">Facebook</a>.
                    I've previously interned at <a href="https://www.salesforce.com/" target="_blank" rel="noopener">Salesforce</a> (2019) and <a href="https://www.one45.com/" target="_blank" rel="noopener">one45</a> (2018).
                </p>
            </div>
            <div>
                <a className="button1" href="https://www.linkedin.com/in/karnrahal/" target="_blank" rel="noopener">My LinkedIn</a> &nbsp;&nbsp;&nbsp;
                <a className="button2" href="mailto:rahalkarn@gmail.com?Subject=Hey%20Karn!">Contact Me</a>
            </div>
        </div>
    </div>
)