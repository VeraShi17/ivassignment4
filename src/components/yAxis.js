function YAxis(props){
    const { yScale, height, axisLable } = props;
    const ticks = yScale.ticks();

    if(yScale){
        return <g>
            
        {/* //the if(yScale){...} means when xScale is not null, the component will return the y-axis; otherwise, it returns <g></g>
        //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
        //all your code should be put in this block. Remember to use typeof check if the xScale is linear or discrete. */}
            <line
                x1={0}
                x2={0}
                y1={yScale.range()[0]}
                y2={yScale.range()[1]}
                stroke="black"
            />
            {ticks.map((tick, i) => (
                <g key={i} transform={`translate(0, ${yScale(tick)})`}>
                    <line x2="-10" stroke="black" />
                    <text
                        style={{
                            textAnchor: 'end',
                            fontSize: '12px'
                        }}
                        dy="0.35em"
                        dx="-0.5em"
                    >
                        {tick}
                    </text>
                </g>
            ))}
            <text style={{ textAnchor:'end', fontSize:'15px'}} transform={`translate(20, 0)rotate(-90)`}>
                {axisLable}
            </text>
        </g>
    } else {
        return <g></g>
    }

}

export default YAxis