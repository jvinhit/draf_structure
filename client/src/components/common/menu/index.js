import React from 'react';
import { MenuItem } from './menuitem';
import './index.scss';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isHide, source } = this.props;
        return (
            <div className={`menu ${isHide ? ' hide' : 'show'}`}>
                <ul>
                    {source.map((item, index) => (
                        <MenuItem key={index} link={item.link} text={item.text} />
                    ))}
                </ul>
            </div>
        );
    }
}

Menu.defaultProps = {
    isHide: false
};
export { Menu };
