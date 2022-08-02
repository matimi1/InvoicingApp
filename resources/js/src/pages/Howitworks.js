import React from 'react';

function HowItWorks() {
    return (

        <div className="HowItWorks__mainContainer">
            <div className='HowItWorks__container_picture'>
                <img src='../images/invoiceLogo.jpg'/>
            </div>

            <div className='HowItWorks__container__steps'>

                <h1 className="HowItWorks__heading">How it works - 3 steps</h1>
                <h3 className='HowItWorks__heading_h3'>Control your invoices</h3>

                <div className='HowItWorks__container_step'>
                    <div className='HowItWorks__step_iconContainer'>
                        <img className='HowItWorks__step_icon'src='../images/edit.png'/>
                    </div>
                    <div className='HowItWorks__step_textContainer'>
                        <h2 className='HowItWorks__step_header'>Register</h2>
                        <p className='HowItWorks__step_p'>Use this space to describe this benefit.</p>
                    </div>
                </div>

                <div className='HowItWorks__container_step'>
                    <div className='HowItWorks__step_iconContainer'>
                        <img className='HowItWorks__step_icon' src='../images/idea.png'/>
                    </div>
                    <div className='HowItWorks__step_textContainer'>
                        <h2 className='HowItWorks__step_header'>Create</h2>
                        <p className='HowItWorks__step_p'>Use this space to describe this benefit.</p>
                    </div>
                </div>

                <div className='HowItWorks__container_step'>
                    <div className='HowItWorks__step_iconContainer'>
                        <img className='HowItWorks__step_icon' src='../images/management.png'/>
                    </div>
                    <div className='HowItWorks__step_textContainer'>
                        <h2 className='HowItWorks__step_header'>Manage</h2>
                        <p className='HowItWorks__step_p'>Use this space to describe this benefit.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HowItWorks;