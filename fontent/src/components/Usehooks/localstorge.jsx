const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('donation-applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}


const saveJobApplication = id =>{
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('donation-applications', JSON.stringify(storedJobApplications))
    }
}

export { getStoredJobApplication, saveJobApplication}