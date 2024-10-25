import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [dummyData, setDummyData] = useState([]);
  const [dummyData1, setDummyData1] = useState([]);
  const [dummyData2, setDummyData2] = useState([]);
  const [dummyData3, setDummyData3] = useState([]);

  const loremIpsumUrl = 'https://loripsum.net/api';

  useEffect(() => {
    const fetchData = async () => {
      try {
        for (let i = 0; i < 4; i++) {
          const response = await axios.get(loremIpsumUrl);
          switch (i) {
            case 0:
              setDummyData(response.data);
              break;
            case 1:
              setDummyData1(response.data);
              break;
            case 2:
              setDummyData2(response.data);
              break;
            case 3:
              setDummyData3(response.data);
              break;
            default:
              break;
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-slate-900 flex w-full justify-around">
        {[1, 2, 3, 4].map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer flex-grow p-2 rounded transition duration-300 p-8 ${
              activeTab === tab ? 'bg-blue-950' : 'hover:bg-slate-700'
            }`}
            onClick={() => setActiveTab(tab)}
            role="tab"
            aria-selected={activeTab === tab}
          >
            <h1 className="text-white text-center">Tab {tab}</h1>
          </div>
        ))}
      </div>
      <div className="p-4 mt-20">
        <h1>Hello</h1>
        {activeTab === 1 && (
          <div>{dummyData.length > 0 ? <div>{dummyData}</div> : <h2>Loading...</h2>}</div>
        )}
        {activeTab === 2 && (
          <div>{dummyData1.length > 0 ? <div>{dummyData1}</div> : <h2>Loading...</h2>}</div>
        )}
        {activeTab === 3 && (
          <div>{dummyData2.length > 0 ? <div>{dummyData2}</div> : <h2>Loading...</h2>}</div>
        )}
        {activeTab === 4 && (
          <div>{dummyData3.length > 0 ? <div>{dummyData3}</div> : <h2>Loading...</h2>}</div>
        )}
      </div>
    </>
  );
};

export default Tabs;
