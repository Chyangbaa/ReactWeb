import React from 'react';

const Dashboard = () => {
  const date = new Date().toLocaleDateString('ne-NP', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  return (
    <>
      <div className="title"> Dashboard</div>
      <div className="HomePageContainer">
        <span className="date">{date}</span>
      </div>
    </>
  );
};

export default Dashboard;
