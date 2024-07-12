import React from 'react'
import first from '../src/assets/Images/LastImg/1.svg'
import second from '../src/assets/Images/LastImg/2.svg'
import third from '../src/assets/Images/LastImg/3.svg'
import four from '../src/assets/Images/LastImg/4.svg'
import five from '../src/assets/Images/LastImg/5.svg'
import six from '../src/assets/Images/LastImg/6.svg'
import seven from '../src/assets/Images/LastImg/7.svg'
import eight from '../src/assets/Images/LastImg/8.svg'
import nine from '../src/assets/Images/LastImg/9.svg'
import ten from '../src/assets/Images/LastImg/10.svg'
import first_1 from '../src/assets/Images/LastImg/11.svg'
import second_1 from '../src/assets/Images/LastImg/12.svg'
import third_1 from '../src/assets/Images/LastImg/13.svg'
import four_1 from '../src/assets/Images/LastImg/14.svg'
import five_1 from '../src/assets/Images/LastImg/15.svg'
import six_1 from '../src/assets/Images/LastImg/16.svg'
import seven_1 from '../src/assets/Images/LastImg/17.svg'
import eight_1 from '../src/assets/Images/LastImg/18.svg'
import nine_1 from '../src/assets/Images/LastImg/19.svg'
import ten_1 from '../src/assets/Images/LastImg/20.svg'
import first_2 from '../src/assets/Images/LastImg/21.svg'
import second_2 from '../src/assets/Images/LastImg/22.svg'
import third_2 from '../src/assets/Images/LastImg/23.svg'
import four_2 from '../src/assets/Images/LastImg/24.svg'

const FooterImages = () => {

    let data = [ first, second, third, four, five, six, seven, eight, nine, ten, first_1, second_1, third_1, four_1, five_1, six_1, seven_1, eight_1, nine_1, ten_1, first_2, second_2, third_2, four_2 ]

  return (
    <div className='flex justify-around flex-wrap gap-36 p-20'>
        {data.map((image, index) => (
            <img key={index} src={image} alt="image" />
        ))}
    </div>
  )
}

export default FooterImages