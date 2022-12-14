import React from "react";

const CompanyList = ({open}) => {
  return (
    <div className={open? 'active':'inactive'}>
    <ul className="CompanyList-dropdown">
      <li>History</li>
      <li>Our Team</li>
      <li>Blog</li>
    </ul>
    </div>
  );
};

export default CompanyList;
