import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobCategory = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center pt-24">
                <h3 className='text-4xl font-bold'>Most Applied Jobs</h3>
            </div>
            <div className="grid md:grid-cols-3 max-w-[400px] md:max-w-[1000px] gap-5 lg:gap-8 mx-auto px-5 pb-40">
                {
                    jobs.slice(0, 3).map(job => <Link
                        to={'/job/' + job._id}
                        className="card rounded-lg border hover:border-[#EB0029] shadow-lg bg-white text-[#010F1C]"
                    >
                        <figure className="pt-10"><img src={job.banner} alt="" /></figure>
                        <div className="card-body space-y-1">
                            <h2 className="card-title">{job.job}</h2>
                            <div className="grid">
                                <span>{job.name}</span>
                                <span>Salary : {job.salary}</span>
                                <span>Applicants : {job.applicants}</span>
                                <span>Post : {job.startDate.slice(0, 10)}</span>
                                <span>Deadline {job.deadline.slice(0, 10)}</span>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default JobCategory;