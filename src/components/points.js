import React from 'react';

function Points(props) {
    const {data, xScale, yScale, height, width, hoveredStation, onMouseEnter, onMouseOut} = props;
    // const [hoveredStation, setHoveredStation] = React.useState(null);

    // const onMouseEnter = (station) => setHoveredStation(station);
    // const onMouseOut = () => setHoveredStation(null);

    const getColor = (station) => (station === hoveredStation ? 'red' : 'steelblue');
    const getRadius = (station) => (station === hoveredStation ? 10 : 5);

    //Note: 
    //the if(data){...} means when data is not null, the component will return the points; otherwise, it returns <g></g>
    //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
    if(data){
        return <g>
        {/* task:1. remove this comments and put your code here */}
            {hoveredStation && (
                <rect
                x={0}
                y={0}
                width={width}
                height={height}
                fill="yellow"
                opacity={0.3}
                />
            )}

            {data.map((d, i) => (
                <circle
                    key={i}
                    cx={xScale(d.tripdurationS)}
                    cy={yScale(d.tripdurationE)}
                    // r={5}
                    // fill="steelblue"
                    r={getRadius(d.station)}
                    fill={getColor(d.station)}
                    onMouseEnter={(e) => {
                        onMouseEnter(d.station, e, d); 
                    }}
                    onMouseOut={onMouseOut}

                    stroke="black" 
                />
            ))}

            {hoveredStation && data.map((d, i) => {
                if (d.station === hoveredStation) {
                    return (
                    <circle
                        key={`hover-${i}`}
                        cx={xScale(d.tripdurationS)}
                        cy={yScale(d.tripdurationE)}
                        r={getRadius(d.station)}
                        fill={getColor(d.station)}
                        onMouseEnter={(e) => {
                            onMouseEnter(d.station, e, d); 
                        }}
                        onMouseOut={onMouseOut}
                        stroke="black"
                    />
                    );
                }
                return null;
            })}
        </g>
    } else {
        return <g></g>
    }
}

export default Points