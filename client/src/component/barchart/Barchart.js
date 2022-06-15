import React, { useState } from 'react'
import HSBar from "react-horizontal-stacked-bar-chart";

export default function Barchart() {
    const [value, setvalue] = useState(null);
    return (
        <div className='chart'>
            <HSBar
                height={36}
                showTextIn
                id="chartbar"
                data={[
                    {
                        value: 10,
                        description: "10 days taken",
                        color: '#0067AA'
                    },
                    {
                        value: 10,
                        description: "10 days left",
                        color: '#F34848'
                    }
                ]}
            />
        </div>
    )
}
