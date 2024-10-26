//`<XAxis />` has the following properties,
// - xScale: the scale of the x-axis
// - height: the height of the scatter plot
// - width: the width of the scatter plot
// - axisLabel: the name of the axis
// - `<YAxis />` has the following properties,
// - yScale: the scale of y-axis
// - height: the height of the scatter plot
// - axisLabel: the name of the axis
// - **`<Points />`**: it is defined in the module points.js. The radius of each `<circle />` is 5 and the color is `steelblue`, and the `<Points />` has the following properties,
// - data: the data items
// - xScale: the scale for the x coordinate
// - yScale: the scale for the y coordinate


function XAxis(props){
    const { xScale, height, width, axisLable } = props;
    // const ticks = xScale.ticks();
    const ticks = xScale.ticks ? xScale.ticks() : xScale.domain();
    const isLinearScale = typeof xScale.domain()[0] === 'number';


    //Note:
    //1. XAxis works for two cases: the xScale is linear (i.e., scatter plot) and the xScalse is discrete (i.e., bar chart)
    //2. you can use typeof(xScale.domain()[0]) to decide the return value
    //3. if typeof(xScale.domain()[0]) is a number, xScale is a linear scale; if it is a string, it is a scaleBand.
    
    if(xScale) {
        return <g>
        {/* //the if(xScale){...} means when xScale is not null, the component will return the x-axis; otherwise, it returns <g></g>
        //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
        //all your code should be put in this block. Remember to use typeof check if the xScale is linear or discrete. */}
        {/* <line x1={0} x2={width} y1={height} y2={height} stroke={'black'} />
        {ticks.map( tickValue => {
                return <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${height+20})`}>
                    <line y1={-10} y2={-20} stroke={'black'} />
                    <text style={{ textAnchor:'end', fontSize:'13px'}}>
                        {tickValue}
                    </text>
                </g>
            })
        } */}
        {/* if (typeof xScale.domain()[0] === 'number') {
            const axisElement = axisBottom(xScale).ticks(5);
            setAxis(axisElement);
        } */}
        {/* <text style={{ textAnchor:'end', fontSize:'15px'}} transform={`translate(20, 0)rotate(-90)`}>
            {axisLable}
        </text> */}
 
            <line 
                x1={xScale.range()[0]} 
                x2={xScale.range()[1]} 
                y1={height} 
                y2={height} 
                stroke="black" 
            />
            <g transform={`translate(0, ${height})`}>
                {ticks.map((tick, i) => (
                    <g key={i} transform={`translate(${xScale(tick)}, 0)`}>
                        {isLinearScale && <line y2="10" stroke="black" />}
                        <text
                            style={{
                                textAnchor: isLinearScale ? 'middle' : 'start',
                                fontSize: '11px'
                            }}
                            transform={isLinearScale ? '' : 'rotate(80) translate(5, -15)'} 
                            dy="1.5em"
                            // dx={isLinearScale ? '0' : '0.5em'}
                        >
                            {tick}
                        </text>
                    </g>
                ))}
            </g>

            <text
                style={{ textAnchor: 'end', fontSize: '15px' }}
                x={width}
                y={height - 10}
            >
                {axisLable}
            </text>
        

        </g>
    }else {
    return <g></g>
}
}

export default XAxis