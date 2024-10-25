import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1); // State to manage the active tab

  const tabs = [
    {
      id: 1,
      tabTitle: 'Tab 1',
      title: 'Title 1',
      content: 'In sint do non adipisicing incididunt excepteur sit. Voluptate esse aliqua pariatur dolor ex occaecat sunt eu. Pariatur ullamco id dolore sint proident sint nostrud nisi sit id est. Duis et excepteur cupidatat sint nisi dolore qui irure qui in id excepteur irure laboris. Pariatur mollit duis cupidatat nisi Lorem non et in dolor aliquip ea sint aute. Dolore aute duis laboris exercitation occaecat sunt. Enim veniam Lorem do ipsum aliqua qui eu ipsum consectetur ex dolore ea ipsum.',
    },
    {
      id: 2,
      tabTitle: 'Tab 2',
      title: 'Title 2',
      content: 'Non aliquip fugiat velit ad officia Lorem tempor cillum incididunt elit proident mollit. Reprehenderit qui nisi ut occaecat minim velit deserunt occaecat quis magna mollit. Veniam proident consectetur sunt mollit est magna Lorem voluptate enim cupidatat consequat. Et pariatur aliquip commodo nisi deserunt exercitation enim officia voluptate in nisi. Eu ea esse qui est ea pariatur nostrud non elit irure. Ad exercitation Lorem exercitation ipsum eiusmod ea duis ad mollit veniam aliquip veniam. Lorem pariatur elit ea duis.',
    },
    {
      id: 3,
      tabTitle: 'Tab 3',
      title: 'Title 3',
      content: 'Deserunt et elit elit ad dolor magna. Nisi amet consectetur Lorem eiusmod dolore adipisicing do reprehenderit. Voluptate consequat magna nostrud in officia labore. Minim excepteur consectetur quis nostrud nisi magna duis sunt sint qui. Fugiat ea reprehenderit eiusmod proident officia. Consequat labore qui velit Lorem consectetur incididunt ut nisi.',
    },
    {
      id: 4,
      tabTitle: 'Tab 4',
      title: 'Title 4',
      content: 'Minim in dolor do fugiat laborum duis labore consectetur. Amet ut sint ipsum dolor ad nostrud commodo sunt veniam enim aliquip nulla sint ullamco. Do cupidatat et quis laborum esse est commodo. Commodo sunt consectetur do consequat minim occaecat id magna ullamco consequat irure.',
    },
  ];

  return (
    <>
      <div className="bg-slate-900 flex w-full justify-around">
        {tabs.map((tab) => ( // Map through the tabs array
          <div
            key={tab.id}
            className={`cursor-pointer flex-grow p-2 rounded transition duration-300 p-8 ${
              activeTab === tab.id ? 'bg-blue-950' : 'hover:bg-slate-700'
            }`}
            onClick={() => setActiveTab(tab.id)} // Set active tab on click
            role="tab"
            aria-selected={activeTab === tab.id} // Accessibility attribute
          >
            <h1 className="text-white text-center">{tab.tabTitle}</h1> {/* Display tab title */}
          </div>
        ))}
      </div>
      <div className="p-8 mt-20 shadow-md shadow-black/25">
       
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id}>
              <h2 className='text-xl font-bold mb-5' >{tab.title}</h2> {/* Display tab content title */}
              <p>{tab.content}</p> {/* Display tab content */}
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default Tabs;
