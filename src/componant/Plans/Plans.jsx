import React from "react";
import './Plans.css'
import{plansData} from '../../data/plansData'
import whitwTick from '../../assets/whitetick.png'
import Right from '../../assets/right.png'
import CountUp from "react-countup";

const Plans = ()=> {
 return (
    <div className="plans-container" id="Plans">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{gap: '2rem'}}>
            <span className="stroke-text">READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className="stroke-text">NOW WITHUS</span>
        </div>

        {/* Plans card */}
        <div className="plans">
            {plansData.map((plan, i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {" "}
                    <CountUp start={0} end={plan.price} duration={2} delay={0} /></span>
                    <div className="features">
                        {plan.features.map((feature, i)=> (
                            <div className="feature">
                                <img src={whitwTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>

                        ))}
                    </div>
                    <div><span>See more benefits  <img style={{width:'0.6rem'}} src={Right} alt="" /> </span></div>
                    <button className="btn">Join Now</button>
                </div>
            ))}
        </div>
    </div>
 )
}

export default Plans