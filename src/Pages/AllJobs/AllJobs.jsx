import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllJobs = () => {
    const [Jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="py-20 px-5">
            <div className="overflow-x-auto max-w-[1200px] mx-auto shadow-2xl border rounded-md lg:p-10 md:px-5 md:py-8 px-3 py-5">
                <table className="table lg:table-lg md:table-md table-sm">
                    <thead>
                        <tr className="text-[#474747] text-center md:text-lg text-base">
                            <th className="font-black">Post By</th>
                            <th className="font-black">Job Name</th>
                            <th className="font-black">Post Date</th>
                            <th className="font-black">Deadline</th>
                            <th className="font-black">Salary</th>
                            <th className="font-black">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Jobs.map(job => <tr key={job._id} className="text-[#222] text-center">
                                <td>{job.name}</td>
                                <td>{job.job}</td>
                                <td>{job.startDate.slice(0,10)}</td>
                                <td>{job.deadline.slice(0,10)}</td>
                                <td>{job.salary}</td>
                                <td>
                                    <Link to={'/details/'+job._id} className="bg-[#F03737] md:px-5 md:py-2 py-1 px-3 rounded-md text-white hover:bg-transparent hover:text-[#F03737]">view</Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobs;