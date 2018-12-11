import React, { Component } from 'react';
import { DotItem } from './dotitem';
import PropTypes from 'prop-types';
import { Item } from './item';
import './styles.scss';

class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0, isNext: true };
        console.log('1. constructor');
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return null;
    // }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('. shouldComponentUpdate');
        return false;
    }

    static getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('. getSnapshotBeforeUpdate');
    }
    componentDidUpdate() {
        console.log('. componentDidUpdate');
    }
    componentDidMount() {
        console.log('3. constructor');
        if (this.props.infinite) {
            this.interval = setInterval(() => {
                this.onNext();
            }, this.props.autoplaySpeed);
        }
    }
    renderItem() {
        const { children } = this.props;
        return children.map((child, index) => {
            return (
                <Item key={index} index={index} activeIndex={this.state.activeIndex} isNext={this.state.isNext}>
                    {child}
                </Item>
            );
        });
    }
    play() {}
    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }
    renderDotItems() {
        return this.props.children.map((item, index) => <DotItem key={index} index={index} activeIndex={this.state.activeIndex} onClicks={e => this.onGoto(e, index)} />);
    }
    onPrev = e => {
        if (e) {
            this.stop();
        }
        let index = this.state.activeIndex;
        let slidesLength = this.props.children.length;
        if (index < 1) {
            index = slidesLength;
        }
        --index;
        this.setState({
            activeIndex: index,
            isNext: false
        });
    };
    onGoto(e, index) {
        if (e) {
            this.stop();
        }
        this.setState({ activeIndex: index });
    }
    onNext = e => {
        if (e) {
            this.stop();
        }
        let index = this.state.activeIndex;
        let slidesLength = this.props.children.length;
        if (index === slidesLength - 1) {
            index = -1;
        }
        ++index;
        this.setState({
            activeIndex: index,
            isNext: true
        });
    };
    render() {
        const { infinite, autoplay, autoplaySpeed } = this.props;
        console.log('RENDERCALLED');
        return (
            <div className="gallery-section">
                <ul className="content-section">{this.renderItem()}</ul>
                <ul className="dot-section">{this.renderDotItems()}</ul>

                <button className="btn-next btn" onClick={this.onPrev}>
                    ‹
                </button>
                <button className="btn-prev btn" onClick={this.onNext}>
                    ›
                </button>
            </div>
        );
    }
}

ImageGallery.propTypes = {
    infinite: PropTypes.bool.isRequired,
    autoplay: PropTypes.bool.isRequired,
    autoplaySpeed: PropTypes.number.isRequired
};
ImageGallery.defaultProps = {};
export default ImageGallery;
