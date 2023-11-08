import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Details = () => {
    const { user } = useContext(AuthContext);
    const jobs = useLoaderData();
    const { id } = useParams();

    const detailsJob = jobs.filter(data => data._id === id);

    const handleAply = ( id, photo, job, email, deadline ) => {
        const applierEmail = user.email;
        const appliedObj = { id, photo, job, email, deadline, applierEmail };
        console.log(appliedObj);
        if (email === user.email) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "This job has been added by you"
            });
        }
        else {
            fetch('https://job-seeking-server-seven.vercel.app/appliedJobs', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(appliedObj)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Apply Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        }
    }

    return (
        <div className="max-w-[800px] mx-auto px-5 pt-20 pb-40">
            {
                detailsJob.map(job => <div key={job._id} className="card">
                    <img className='px-5' src={job.banner} alt="" />
                    <div className="card-body space-y-2">
                        <div className='flex justify-between items-center'>
                            <h2 className="sm:text-5xl text-4xl text-[#474747]">{job.job}</h2>
                            <img className='sm:w-14 w-10' src={job.photo} alt="" />
                        </div>
                        <p className="text-2xl text-[#474747]">Salary Range: {job.salary}</p>
                        <p className="text-lg font-semibold text-[#474747]">Price: ${job.applicants}</p>
                        <p className='text-[#222]'>{job.description}</p>
                        <div className="card-actions justify-between">
                            <button onClick={() => handleAply(job._id, job.photo, job.job, job.email, job.deadline)} className='px-10 py-4 text-white text-lg rounded-md font-medium bg-[#F03737]'>Apply</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Details;