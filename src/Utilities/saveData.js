const getDataFromLs = ()=>{
    let data = localStorage.getItem('donation-id');
    if(data){
        return JSON.parse(data);
    }
    return [];
}
const SavetoLs = (donationIds)=>{
    let string = JSON.stringify(donationIds);
    localStorage.setItem('donation-id', string);
}
const SaveData=(id)=>{
    let data = getDataFromLs();

    data.push(id);

    SavetoLs(data);
}

export {SaveData,getDataFromLs};