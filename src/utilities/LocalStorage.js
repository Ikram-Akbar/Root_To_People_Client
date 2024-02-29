

const getStoredDonate = () => {
    const storedDonate = localStorage.getItem("Donate");
    if (storedDonate) {
        return JSON.parse(storedDonate);
    }
    return [];
}


const saveDonateDetails = (id) => {
    const storedDonateApplications = getStoredDonate();
    const exists = storedDonateApplications.find(jobId => jobId === id);
    if (!exists) {
        storedDonateApplications.push(id);
        localStorage.setItem("Donate", JSON.stringify(storedDonateApplications));
    }
};
export {
    saveDonateDetails,
    getStoredDonate
}


// const jobApplicationsKey = "job-applications";

// const getStoredJobsApplication = () => {
//     // Retrieve stored job applications from localStorage
//     const storedJobApplications = localStorage.getItem(jobApplicationsKey);
//     // Parse JSON only once and store the parsed result
//     return storedJobApplications ? new Set(JSON.parse(storedJobApplications)) : new Set();
// }

// const saveJobApplication = (id) => {
//     // Retrieve currently stored job applications
//     const storedJobApplications = getStoredJobsApplication();
//     // Add the new ID to the set
//     storedJobApplications.add(id);
//     // Update localStorage with the updated set
//     localStorage.setItem(jobApplicationsKey, JSON.stringify([...storedJobApplications]));
// };

// export { saveJobApplication,getStoredJobsApplication };
