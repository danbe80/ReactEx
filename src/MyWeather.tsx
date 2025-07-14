import React, { Component } from 'react';

interface MyWeatherProps {
    weather: string;
    children?: React.ReactNode;
}

// const MyWeather: React.FC<MyWeatherProps> = ({children, weather}) => {
//     return(
//         <div>
//             {children}
//             <br/>
//             오늘의 날씨는 {weather}입니다.
//         </div>
//     )
// }

// 클래스형 컴포넌트
class MyWeather extends Component<MyWeatherProps> {
    render() {
        const {children, weather} = this.props;
        return(
            <div>
                {children}
                <br/>
                오늘의 날씨는 {weather}입니다.
            </div>
        )
    }
}

export default MyWeather;