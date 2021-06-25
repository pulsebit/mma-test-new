import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart() {
    const data={
        labels: ['Jan','Feb','Mar','Apr','May'],    
        datesets: [
            {
                label: 'Sales 2020 (M)',
                data: [3, 2, 2, 1, 5]
            }
        ]
    }

    return (
        <div>
            <Line data={data} />
        </div>
    )
}

export default LineChart
