import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const jobs = useLoaderData();
    const { id } = useParams();

    const detailsJob = jobs.filter(data => data._id === id);

    return (
        <div className="max-w-[800px] mx-auto px-5 pt-20 pb-40">
            {
                detailsJob.map(job => <div className="card">
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
                            <button className='px-10 py-4 text-white text-lg rounded-md font-medium bg-[#F03737]'>Apply</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Details;