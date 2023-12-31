import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const Update = () => {
    const updateJob = useLoaderData();
    const { _id, banner, photo, job, name, salary, selectedCate, applicants, description } = updateJob;

    const [deadline, setDeadline] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());

    const handleAddJob = event => {
        event.preventDefault();
        const form = event.target;
        const banner = form.banner.value;
        const photo = form.photo.value;
        const job = form.job.value;
        const salary = form.salary.value;
        const description = form.description.value;

        const jobsObj = { banner, photo, job, salary, startDate, deadline, description }
        console.log(jobsObj);

        fetch(`https://job-seeking-server-seven.vercel.app/jobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobsObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="pb-28">
            <div className="max-w-[1400px] mx-auto px-5 md:px-0">
                <div className="pt-28 mb-10 md:max-w-[70%] mx-auto sm:space-x-5 md:space-x-0 lg:space-x-5">
                    <span className="text-[#F03737] md:text-5xl text-4xl font-semibold block sm:inline md:block lg:inline pb-3">JOB GATOR</span>
                    <span className="md:text-5xl text-4xl font-semibold text-[#474747]">Update A Product</span>
                </div>
                <div className="p-10 border rounded-lg md:max-w-[70%] mx-auto shadow-xl">
                    <form onSubmit={handleAddJob}>
                        <label className="text-sm text-[#474747] tracking-widest font-bold" htmlFor="banner">Job Banner URL</label><br />
                        <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-xs py-3 px-4" type="url" name="banner" id="banner" defaultValue={banner} required />
                        <div className="grid md:grid-cols-2 md:gap-x-10 md:gap-y-2">
                            <div>
                                <label className="text-sm text-[#474747] tracking-widest font-bold" htmlFor="photo">Logo URL</label><br />
                                <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-xs py-3 px-4" type="url" name="photo" id="photo" defaultValue={photo} placeholder="Company Logo" required />
                            </div>
                            <div>
                                <label className="text-sm text-[#474747] tracking-widest font-bold" htmlFor="job">Job</label><br />
                                <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-xs py-3 px-4" type="text" name="job" id="job" defaultValue={job} placeholder="Job" required />
                            </div>
                            <div>
                                <label className="text-sm text-[#474747] tracking-widest font-bold">User Name</label><br />
                                <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-xs py-3 px-4" type="name" name="name" defaultValue={name} readOnly />
                            </div>
                            <div>
                                <label className="text-sm text-[#474747] tracking-widest font-bold" htmlFor="salary">Salary Range</label><br />
                                <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-xs py-3 px-4" type="text" name="salary" id="salary" defaultValue={salary} placeholder="Salary Range" required />
                            </div>
                            <div>
                                <label className="text-sm text-[#474747] tracking-widest font-bold">Category</label>
                                <select
                                    className="mt-2 mb-6 bg-white rounded select select-bordered outline-none font-semibold border-[#7A7A7A] text -tracking-widest text-[#474747] text-xs px-4 w-full"
                                    name="brand"
                                    value={selectedCate}
                                    required
                                >
                                    <option>On Site</option>
                                    <option>Remote</option>
                                    <option>Part-Time</option>
                                    <option>Hybrid</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm text-[#474747] tracking-widest font-bold" htmlFor="date">Posting Date</label><br />
                                <DatePicker className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-sm py-3 px-4" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <div>
                                <label className="text-sm text-[#474747] tracking-widest font-bold">Deadline</label><br />
                                <DatePicker className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-sm py-3 px-4" selected={deadline} onChange={(date) => setDeadline(date)} />
                            </div>
                            <div>
                                <label className="text-sm text-[#474747] tracking-widest font-bold" htmlFor="deadline">Applicants Number</label><br />
                                <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-sm py-3 px-4" type="text" name="applicants" value={applicants} readOnly />
                            </div>
                        </div>

                        <label className="text-sm text-[#474747] tracking-widest font-bold" htmlFor="description">Job Description</label><br />
                        <textarea className="mt-2 mb-10 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-xs py-3 px-4" id="description" defaultValue={description} placeholder="Job Description" rows="3" required></textarea>

                        <input className="btn w-full bg-[#F03737] border-[#F03737] font-semibold tracking-widest text-xs mt-4 py-3 text-white rounded-lg hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100 hover:font-extrabold" type="submit" value="UPDATE" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;