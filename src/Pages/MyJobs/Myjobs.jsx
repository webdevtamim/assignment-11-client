import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';

const Myjobs = () => {
    const loaderJobs = useLoaderData()
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState(loaderJobs);

    const myJobs = jobs.filter(data => data.email === user.email);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                fetch(`http://localhost:5000/jobs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingJob = jobs.filter(job => job._id !== id);
                            setJobs(remainingJob)
                        }
                    })
            }
        })
    }

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
                                    <button onClick={() => handleDelete(job._id)} className="bg-[#F03737] md:px-5 md:py-2 py-1 px-3 rounded-md text-white hover:bg-transparent hover:text-[#F03737]">Delete</button>
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