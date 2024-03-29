import React from 'react';
import Sidebar from '../Services/Sidebar/Sidebar';

const BpoKpo = () => {
    return (
        <div className="services" style={{ maxWidth:"1300px", padding:" 40px 60px", margin:"0 auto"}}>
        <div className="row w-100 m-0">
          <div className="col-lg-4 col-md-5">
            <Sidebar></Sidebar>
          </div>

          <div className="col-lg-8 col-md-7">
            <div className="service-details" style={{ flex: 1, padding: "0px" }}>
            <div>
                <h4 className="title" > <strong> BPO/KPO </strong> </h4>
                <p> <em> <b> Optimizing your processes </b> </em></p>
                <img className="img-fluid" src={require(`../../../Image/services/1.6.jpg`).default} alt=""/> <br/> <br/> 
                <p>At Answar iT, it is our aim to help our clients achieve excellence in their core competencies by supporting them with robust end-to-end solutions for repeatable processes. With a reliable outsourcing partner, your resources can focus wholly on realizing core business objectives, thereby achieving consistent results and positioning your enterprise as a vertical leader. <br/><br/> It is all about optimizing your business processes while simplifying them and addressing operational issues like accuracy, efficiency, repeatability, or governance. A dependable and reliable partner can get you there – a partner who has embraced the industry best-in-class processes required to deliver such secure outsourcing services. </p>

            
                <h5 className="p-1"> BPO/KPO Solutions Offered by Answar iT </h5>

                <p>  Upholding global quality standards, we deliver timely outsourcing solutions that are aimed at handling challenges in the following core operations: </p>

                <ul>
                    <li> Data Input and Processing </li>
                    <li> Production System Support </li>
                    <li> Structure for Marketing Support and Search Engine Optimization</li>
                    <li> Customer Relationship Management </li>
                </ul>



                <p>  We also specialize in delivering time and cost effective solutions in areas of financial research and analysis, performance management and reporting as well as reconciliation. Our solutions are aimed at assisting you to reduce costs, improve efficiency, enhance productivity, while creating a positive, quantifiable impact on the bottom-line. </p>
            </div>
              
            </div>
          </div>

        </div>
        
      </div>
    
        
    );
};

export default BpoKpo;