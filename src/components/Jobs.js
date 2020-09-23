import React from 'react'
import Job from './Job.js'

function Jobs ({hTag, jobs, filters}) {
    if (jobs) {
        return (
            <div className="jobs">
                { filters.length === 0
                    ? jobs.map((job) => {
                        return (
                            <Job
                            jobs = {jobs}
                            index = {job.id-1}
                            hTag = {hTag}
                            key = {job.id}
                            />
                        )})
                    : jobs.map((job) => {
                        let filterArr = [
                            job.role,
                            job.level,
                            ...job.languages,
                            ...job.tools
                        ];
                        if (filters.every((f) => filterArr.includes(f))) {
                            return (
                                <Job
                                jobs = {jobs}
                                index = {job.id-1}
                                hTag = {hTag}
                                key = {job.id}
                                />
                            );
                        }
                        return null;
                    })

                    }
            </div>
        )
    }
    else return null;
};

export default Jobs;