import React from 'react'
import Tag from './Tag.js'

function Job ({jobs, index, hTag}) {
    let tags = [];
    tags[0] = jobs[index].role;
    tags = tags.concat(jobs[index].level);
    tags = tags.concat(jobs[index].languages.concat(jobs[index].tools));
    return (
        <div className = {jobs[index].featured ? "job featured" : "job"}>
            <img src={process.env.PUBLIC_URL+jobs[index].logo} alt="Logo" />
            <div className="job-details">
                <div className="top-row">
                    <span className="span-company">{jobs[index].company}</span>
                    <span className="span-new"
                    style={{display: jobs[index].new ? "block" : "none"}}>
                        New!
                    </span>
                    <span className="span-featured"
                    style={{display: jobs[index].featured ? "block" : "none"}}>
                        Featured
                    </span>
                </div>
                <a href="#">{jobs[index].position}</a>

                {/* <div className="bottom-row">
                    <span>{jobs[index].postedAt}</span>
                    <span>{jobs[index].contract}</span>
                    <span>{jobs[index].location}</span>
                </div> */}

                <ul className="bottom-row">
                    <li>{jobs[index].postedAt}</li>
                    <li>{jobs[index].contract}</li>
                    <li>{jobs[index].location}</li>
                </ul>

            </div>
            <hr className="hide" />
            <div className="job-tags" id="job-tags">
                {tags.map((tag) => (
                    <Tag text = {tag} hTag={hTag} />
                ))}
            </div>
        </div>
    )
}

export default Job;