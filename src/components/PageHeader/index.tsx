import React from "react";
import PageHeaderImg from '../../assets/images/page-landing.png';
import "./styles.css";

interface PageHeaderProps {
  title: string;
  description?: String;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header" >
      <div id="text-header">
        <strong><h1>{props.title}</h1></strong>
        <h1>{props.description}</h1>
      </div>
      <img src={PageHeaderImg} alt="CNPJ" />
    </header >
  );
};

export default PageHeader;
