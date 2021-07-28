import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.scss'
import logo from '../../images/logo.png'
import IMAGES from '../../constants/Images'

const cardArray = [
    {
       "desc":"My back pain has subsided & sleeping without waking up! I’m so motivated to learn more and breathe",
        "name": 'Virgie Hatley',
        "img":IMAGES.F1
    },
    {
        "desc":"I have to say that lower extremity flow, unlocked more than just my hips! Transformational!",
         "name": 'Lynlee Copenhaver',
         "img":IMAGES.F2
     },
     {
        "desc":"My run times, distance, and recovery are definitely better since starting the program. Jen has improved my life so much.",
         "name": 'Joe Sanchez',
         "img":IMAGES.F3
     },
    
]
class Landing extends Component {
    componentDidMount(props){
        this.state={

        }
        // console.log(logo, IMAGES.LOGO)
    }
    render() {
        return (
            <React.Fragment>
                <div className="landing">
                <header className="py-3">
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-3">
                            <div className="logo">
                                <button className="bg-transparent border-0 p-0">
                                    <img src={IMAGES.LOGO} className="img-fluid" alt="logo"/> 
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section>
                <div className="container">
                        <div className="row">
                        <div className="col-sm-6">
                            <h2 className="title mt-lg-5 mt-4">Knowledge &amp; Solutions for your body</h2>
                            <h4 className="sub-title mb-4">From experienced doctors of physical therapy</h4>
                            <p className="para mb-4">Learn about the body, Find solutions to relieve pain, Improve mobility, Understand proper movement, Optimize your health, Find community</p>
                            <button className="text-uppercase text-white btn btn- mb-4">
                                Let's get started
                            </button>
                            <p>Already a member? Login now</p>
                        </div>
                        <div className="col-sm-6">
                        <ul className="customer list-unstyled ms-lg-5 position-relative mt-sm-0 mt-5">
                        {
                                cardArray.map((data, index) => 
                                <li>
                                    <div className="card border-0 position-relative px-2 py-2" key={index}>
                                        <div className="customer-img position-absolute"><img src={data.img}/></div>
                                        <div className="card-body">
                                            <p className="card-text">{data.desc}</p>
                                            <span>{data.name}</span>
                                        </div>
                                    </div>
                                </li>
                                    
                                )
                            }
                            
                        </ul>
                        </div>
                        </div>
                    </div>
                </section>
                <div className="circle1 position-absolute rounded-circle"></div>
                <div className="circle2 position-absolute rounded-circle"></div>
                <div className="circle3 position-absolute rounded-circle"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default Landing;