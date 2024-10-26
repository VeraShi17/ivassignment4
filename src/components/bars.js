import React from 'react';

function Bars(props) {
    const {data, xScale, yScale, height, hoveredStation, onMouseEnter, onMouseOut} = props;
    // const [hoveredStation, setHoveredStation] = React.useState(null);

    // const onMouseEnter = (station) => setHoveredStation(station);
    // const onMouseOut = () => setHoveredStation(null);

    const getColor = (station) => (station === hoveredStation ? 'red' : 'steelblue');

    //Note: 
    //the if(data){...} means when data is not null, the component will return the bars; otherwise, it returns <g></g>
    //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
    if(data){
        return <g>
            {/* {task:
                    1. remove this comments and put your code here
                    2. pay attention to the height of the bars, it should be height-yScale(d.start)} */}
                    {data.map((d, i) => (
                    <rect
                        key={i}
                        x={xScale(d.station)}
                        y={yScale(d.start)}
                        width={xScale.bandwidth()}
                        height={height - yScale(d.start)}
                        // fill="steelblue"
                        fill={getColor(d.station)}
                        onMouseEnter={() => onMouseEnter(d.station)}
                        onMouseOut={onMouseOut}
                        stroke="black" 
                    />
                ))}
            </g>
    } else {
        return <g></g>
    }
}

export default Bars