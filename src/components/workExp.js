import { Component } from "react";

class WorkExp extends Component{
    render(){
        return(
            <section id="timeline" className='py-3 scroll-offset off-bg'>
                <h2 className='text-center pt-2 mb-4 main-text'>Work & Education</h2>
                <ul>
                    <li className="show">
                        <div>
                            <h4>Aug 2024 - Aug 2025  : Teaching Assistant at Indiana Wesley University</h4>
                            <p>Performed TA duties for courses "Generative AI" and "Algorithms & Data Structures" under Prof. Merle Heckman</p>
                        </div>
                    </li>
                    <li className="show">
                        <div>
                            <h4>2020 - 2023 : Senior Engineer</h4>
                            <p>Worked as a full stack developer utilizing Java Spring and ReactJS for building robust web applications for <span style={{fontWeight:"bold"}}>Kotak Mahindra.</span></p>
                        </div>
                    </li>
                    <li className="show">
                        <div>
                            <h4>2019 - 2020 :Software Engineer </h4>
                            <p>Worked as a Key contributor on the core platform team,responisble for enchancing application performance and reliability <span style={{fontWeight:"bold"}}>Navi.</span></p>
                        </div>
                    </li>
                    <li className="show">
                        <div>
                            <h4>2015 - 2019 : Bachelor's in Computer Science at JNTUH College of Engineering</h4>
                            <p>Studied and obtained a degree that includes Bachelor's in Computer Science</p>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}

export default WorkExp;
