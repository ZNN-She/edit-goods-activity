import React from 'react';
import img4 from '../../assets/images/4.png';
import img5 from '../../assets/images/5.jpeg';
import img6 from '../../assets/images/6.jpeg';
import './index.less';
interface PervirewProps {
    data: {
        name: string
        label: string
        value: string
        url: string
        [key: string]: any
    }[]
}

export default function Pervirew({data = []}: PervirewProps){
    
    return (
        <div className='pervirew'>
            <div className='perview-header'>
                <div className='logo'>
                    <img className='logo-img' src={img4} alt="" />
                    <div className='logo-text'>明康汇</div>
                </div>
                <div className='qrcode'>
                    <img src={img6} alt="" />
                </div>
            </div>
            <div className='bd'>
                {
                    data.map(item => (
                        <div className='perview-item'>
                            <div className='img'>
                                <img style={{width: '100%'}} src={item.url} alt="" />
                            </div>
                            
                            <div className='fd'>
                                <div className='goods-name'>{item.label}</div>
                                <div className='goods-price'>{item.value}</div>
                            </div>

                            <div className='discount-icon' style={{backgroundImage: `url(${img5})`}}></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}