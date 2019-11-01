import React from "react";

export default class Slider extends React.Component {

    constructor(props) {
        super(props);
        let highlight = Math.ceil(props.slideCount/2);
        let slides = props.slides.map((slide, index) => {
            slide.order = index;
            if(index === highlight - 1)
                slide.highlight = true;
            return slide;
        })
        let lastSlide = slides.pop();
        slides.unshift({
            ...lastSlide,
            order: -1
        });
        this.state = {
            slides: slides,
            sliding: false
        };

        setInterval(() => {
            this.nextSlide();
        }, 5000)
    }

    componentDidMount() {
        this.setState({
            dimensions: {
              width: this.container.offsetWidth,
              height: this.container.offsetHeight,
            },
          });
    }

    nextSlide = () => {
        this.setState({sliding: true}, () => {
            setTimeout(() => {
                this.setState((prevState) => {
                    let oldSlides = [...prevState.slides];
                    let hiddenSlide = oldSlides.shift();
                    let newHiddenSlide = { 
                      ...hiddenSlide, 
                      order: oldSlides[oldSlides.length - 1].order + 1 
                    };
                    oldSlides.push(newHiddenSlide);
                    let highlight = Math.ceil(this.props.slideCount/2);
                    const slides = oldSlides.map((s, index) => {
                      return { ...s, order: s.order - 1, highlight: index === highlight ? true : false };
                    });
                    return { slides, sliding: false };
                  });
            }, 500);
        })
    }

    render() {
        const { slides, sliding, dimensions } = this.state;
        const { slideCount } = this.props;

        let sliderStyles = {};
        let slideItem = {};

        if(dimensions) {
            sliderStyles = {
                transform: sliding ? `translateX(${-2 * (dimensions.width/slideCount)}px)` :  `translateX(-${dimensions.width/slideCount}px)`,
                transition:  sliding ? "transform 500ms ease-in" : ""
            }
            slideItem = {
                width: `${dimensions.width/slideCount}px`
            }
        }
        return (
            <div className="box" ref={el => (this.container = el)}>
            {
                dimensions ? 
                <div className="slider" style={sliderStyles}>
                {
                    slides.map((slide, id) => (
                        <div id={id} key={slide.order} className="slideItem" style={slideItem}>
                            <div key={slide.order} className="wrapper">
                                {
                                {...slide.content, 
                                    props: {
                                        ...slide.content.props,
                                        className: slide.highlight && !sliding ? slide.content.props.className + " highlight" : slide.content.props.className
                                    }
                                }
                                }
                            </div>
                        </div>
                    ))
                }
            </div> : null
            }
            </div>
        );
    }
}