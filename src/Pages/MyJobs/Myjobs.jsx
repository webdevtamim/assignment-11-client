import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Myjobs = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    const myJobs = jobs.filter(data => data.email === user.email);

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
                            <th className="font-black">Company</th>
                            <th className="font-black">Job Name</th>
                            <th className="font-black">Update</th>
                            <th className="font-black">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myJobs.map(job => <tr key={job._id} className="text-[#222] text-center">
                                <td>
                                    <img className="mx-auto" src={job.photo} alt="" />
                                </td>
                                <td>{job.job}</td>
                                <td>
                                    <Link to={'/update/' + job._id} className="bg-[#F03737] md:px-5 md:py-2 py-1 px-3 rounded-md text-white hover:bg-transparent hover:text-[#F03737]">Update</Link>
                                </td>
                                <td>
                                    <button className="bg-[#F03737] md:px-5 md:py-2 py-1 px-3 rounded-md text-white hover:bg-transparent hover:text-[#F03737]">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myjobs;