import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const loaderJobs = useLoaderData();
    const [jobs, setJobs] = useState(loaderJobs);

    const handleSearch = (event) => {
        const search = event.target.value;
        const filterJobs = loaderJobs.filter(data => data.selectedCate === search);
        setJobs(filterJobs);
        console.log(filterJobs);
        console.log(search);
    };

    const appliedJob = jobs.filter(data => data.applierEmail === user.email);

    return (
        <div className="py-20 px-5">
            <div className="mb-10 max-w-[1200px] mx-auto sm:flex justify-between items-center">
                <div className="sm:space-x-5 md:space-x-0 lg:space-x-5">
                    <span className="text-[#F03737] md:text-5xl text-4xl font-semibold block sm:inline md:block lg:inline pb-3">JOB GATOR</span>
                    <span className="md:text-5xl text-4xl font-semibold text-[#474747]">Applied Jobs</span>
                </div>
                <div>
                    <select
                        className="select select-bordered border-[#474747] bg-transparent text-[#222] w-full max-w-xs"
                        defaultValue={'Sort by'}
                        onChange={handleSearch}
                    >
                        <option value="Site Manager">Site Manager</option>
                        <option value="On Site">On Site</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>
            </div >
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