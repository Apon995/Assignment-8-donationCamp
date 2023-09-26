import { React, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Pie, PieChart, Tooltip } from 'recharts';
import { getDataFromLs } from '../Utilities/saveData';



function Statistics() {


  const Data = useLoaderData();
  const [donationData, setDonationData] = useState([]);
  const [TotalDonation, setTotalDonation] = useState(0);
  const [yourDonation, setYourDonation] = useState(0);


  useEffect(() => {
    let arr = [];
    let donationpricearray = [];
    const ids = getDataFromLs();
    ids.forEach(id => {
      let donateData = Data.filter((data) => data.id == id);
      arr.push(donateData)
    })

    arr.forEach(item => donationpricearray.push(item[0].price))




    const yourdonate = donationpricearray.reduce((total, i) => total + i, 0.0);
    const totaldonate = Data.reduce((total, item) => total + item.price, 0);

    let yourDonationPercentage = ((yourdonate / totaldonate) * 100)
    let totalDonationPercentage = (100 - yourDonationPercentage)

    const pieData = [
      { name: 'Your Donation', value: yourDonationPercentage, fill: "#00C49F" },
      { name: 'Total Donation', value: totalDonationPercentage, fill: "#FF444A" },
    ];



    setDonationData(pieData);
    setTotalDonation(totalDonationPercentage.toFixed(2))
    setYourDonation(yourDonationPercentage.toFixed(2))
  }, []);
  return (
    <>
      <div className=" w-full flex items-center justify-center flex-col gap-5">
        <div>
          <PieChart width={700} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={donationData}
              cx="50%"
              cy="50%"
              outerRadius={130}
              fill="#8884d8"
              label
            />
            <Tooltip />

          </PieChart>





        </div>
        <div className='flex items-center gap-12 text-black text-xl font-medium'>
          <h1 className='text-[#00C49F]'>Your Donation : {yourDonation}%  </h1>
          <h2 className='text-[#FF444A]' >Total Donaiton : {TotalDonation}%</h2>
        </div>

      </div>

    </>
  )
}

export default Statistics;