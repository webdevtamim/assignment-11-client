import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    const appliedJob = jobs.filter(data => data.applierEmail === user.email);

    useEffect(() => {
        fetch('http://localhost:5000/appliedJobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="py-20 px-5">
            <div className="overflow-x-auto max-w-[1200px] mx-auto shadow-2xl border rounded-md lg:p-10 md:px-5 md:py-8 px-3 py-5">
                <table className="table lg:table-lg md:table-md table-sm">
                    <thead>
                        <tr className="text-[#474747] text-center md:text-lg text-base">
                            <th className="font-black">Company</th>
                            <th className="font-black">Job</th>
                            <th className="font-black">Deadline</th>
                            <th className="font-black">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appliedJob.map(job => <tr key={job._id} className="text-[#222] text-center">
                                <td><img className="mx-auto" src={job.photo} alt="" /></td>
                                <td>{job.job}</td>
                                <td>{job.deadline}</td>
                                <td>{job.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;