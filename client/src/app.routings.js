import React from 'react';
import CountDown from './components/countdown';
import ImageGallery from './components/imagegallery';
const currentDate = new Date();
const year = currentDate.getMonth() === 11 && currentDate.getDate() > 23 ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

import { CustomButton } from './components/common/custombutton';
import { ToggleMenu } from './components/common/togglemenu';
import { Menu } from './components/common/menu';
import axios from 'axios';
class RouteConfigs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isMenuHide: true };
    }
    onToggleMenu(e) {
        e.stopPropagation();
        e.preventDefault();
        this.setState({ isMenuHide: !this.state.isMenuHide });
        return;
    }
    componentDidMount() {
        // axios
        //     .post(
        //         'https://jsonplaceholder.typicode.com/posts',
        //         { title: 'foo', body: 'bar', userId: 1 },
        //         {
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         }
        //     )
        //     .then(response => Promise.resolve(response))
        //     .catch(err => Promise.reject(err));
        this.promiseUseCase()
            .then(response => response.filter(item => item.userId === 1))
            .then(dataUserId1 => console.log(dataUserId1))
            .catch(err => console.log(err));
    }
    promiseUseCase() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        return new Promise((resolve, reject) => {
            var a = new XMLHttpRequest();
            a.onreadystatechange = function() {
                if (a.readyState === a.DONE && a.status === 200) {
                    const data = JSON.parse(a.response);
                    resolve(data);
                } else if (a.status === '404') {
                    reject(a.status);
                }
            };
            a.open('GET', url, true);
            a.send();
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <CountDown date={`${year}-12-06T00:00:00`} />
                    <ImageGallery infinite={true} autoplay={true} autoplaySpeed={1000}>
                        <img src="https://salt.tikicdn.com/ts/lp/8a/81/e2/4fdaacbe3a3c3fccfd8cdfe29d868f9f.png" />
                        <div style={{ paddingTop: '20px' }}>
                            <span>This is html tag</span>
                        </div>
                        <img src="https://salt.tikicdn.com/ts/lp/53/c8/9b/22b09f264276653d69c0665ed525830f.png" />
                        <div style={{ paddingTop: '20px' }}>
                            <span>This is html tag seconds</span>
                        </div>
                        asd
                    </ImageGallery>
                    <div className="common">
                        <CustomButton classname="draw" text="Button" />
                        <div className="menu-container">
                            <ToggleMenu onClick={e => this.onToggleMenu(e)}>
                                <Menu
                                    isHide={this.state.isMenuHide}
                                    source={[{ link: '#home', text: 'Home' }, { link: '#home', text: 'Home' }, { link: '#home', text: 'Home' }, { link: '#home', text: 'Home' }]}
                                />
                            </ToggleMenu>
                        </div>
                        <div>asd kjashdkajhsd</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default RouteConfigs;
