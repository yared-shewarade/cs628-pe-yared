import REact from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className='resume-container'>
            
            <section>
            <h2>Yared Shewarade</h2>
            <p>12440 28th Ave S., Burien WA, 98168 | 5129021047 | </p>
                    <p>shewaradeyared@cityuniversity.edu</p>
            </section>

            <section>
            <h2>Education</h2>
            <p>Master of Science in Computer Science</p>
            <p>City University of Seattle, Seattle WA, 98121 | January 2024</p>
            <p>GPA: 3.97/4.0</p>
            </section>
            <section>
            <p>Master of Science in Human Nutrition</p>
            <p>Hebrew University of Jerusalem, Rehovot Israel| October 2018</p>
            <p>GPA: 3.97/4.0</p>
            </section>
            <section>
            <p>Bachelor of Science in Pharmacy</p>
            <p>Jimma University, Jimma Ethiopia| July 2016</p>
            <p>GPA: 3.97/4.0</p>
            </section>
            <section>
            <h2>Skills</h2>
            <ul>
            <li>Programming Language: Python, React, React Native, C#, SQL</li>
            <li>Database: SQL Server, MySQL, MongoDB</li>
            <li>CI/CD: Docker, Jenkins, Kubernets</li>
            <li>Version Control: Git, GitHub, Visual Studio</li>
            <li>Operating System: Window, Mac</li>
            </ul>
            </section>

            <section>
            <h2>Work Experience</h2>
            <p>Teaching Assistance</p>
            <p>School of Technology and Computing | October 2021 - Present</p>
            <p>Preparation of Hands-On Skills</p>
            <p>Assist students with assignments and question</p>
            </section>
            <section>
            <p>Data Engineering</p>
            <p>BluCross Blue Sheild | August 2018 - October 2020</p>
            <li>Data Cleaning</li>
            <li>Data Management</li>
            <li>Data Integration</li>
            <li>Extract, Transform and Load</li>
            </section>

            <section>
            <h2>Projects</h2>
            <p>House Cleaning App</p>
            <p>Appartment Indicator</p>
            </section>
        </div>
    );
}; 

export default Resume;
