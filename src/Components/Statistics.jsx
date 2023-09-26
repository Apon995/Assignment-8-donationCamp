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




    const yourdonate = donationpricearray.reduce((total, i) => total + i, 0.0)
    const totaldonate = Data.reduce((total, item) => total + item.price, 0);

    let yourDonationPercentage = (yourdonate / totaldonate) * 100;
    let totalDonationPercentage = (100 - yourDonationPercentage)
    setTotalDonation(totalDonationPercentage.toFixed(2))
    setYourDonation(yourDonationPercentage.toFixed(2))


  }, []);

  useEffect(() => {
    const pieData = [
      { name: 'Your Donation', value: parseFloat(yourDonation), fill: "#00C49F" },
      { name: 'Total Donation', value: parseFloat(TotalDonation), fill: "#FF444A" },
    ];
    setDonationData(pieData);

  }, [yourDonation])


  return (
    <>
      <div className="h-[80vh] w-full flex items-center justify-center flex-col gap-5">
        <div>

          <PieChart width={320} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={donationData}
              cx="50%"
              cy="50%"
              outerRadius={105}
              fill="#8884d8"
              labelLine={true}
              label


            />

            <Tooltip />

          </PieChart>








        </div>
        <div className='flex items-center md:gap-12 gap-2 text-black md:text-xl text-sm font-medium'>
          <h1 className='text-[#00C49F] text-center'>Your Donation : {yourDonation}%  </h1>
          <h2 className='text-[#FF444A] text-center' >Total Donaiton : {TotalDonation}%</h2>
        </div>

      </div>

    </>
  )
}

export default Statistics;