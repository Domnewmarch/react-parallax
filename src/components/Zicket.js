import React, { Component } from 'react';
import HowZicket from './HowHeader';
import ZicketLeft from './zicketleft';
import ZicketRight from './ZicketRight';

const image = require('../assets/images/payments.png')
const image1 = require('../assets/images/promotion.png')


export default class Zicket extends Component {
    render(){
        return (
            <div className="pt-16 slanted">
                <div className="max-w-5xl m-auto pt-0">
                    <HowZicket />

                    <ZicketLeft 
                        image={image.default}
                        num="1"
                        heading="Set up & payment"
                        info="Quickly build your dedicated events page in English Chinese. Accept payments from all major providers through our safe and reliable checkout."
                    />  

                    <ZicketRight 
                        image={image1.default}
                        num="2"
                        heading="Set up & payment"
                        info="Quickly build your dedicated events page in English Chinese. Accept payments from all major providers through our safe and reliable checkout."
                    />

                    <ZicketLeft 
                        image={image.default}
                        num="1"
                        heading="Set up & payment"
                        info="Quickly build your dedicated events page in English Chinese. Accept payments from all major providers through our safe and reliable checkout."
                    /> 

                    <ZicketRight 
                        image={image1.default}
                        num="2"
                        heading="Set up & payment"
                        info="Quickly build your dedicated events page in English Chinese. Accept payments from all major providers through our safe and reliable checkout."
                    /> 

                </div>
            </div>
        )
    }
}    