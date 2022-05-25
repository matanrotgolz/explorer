import React from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

function SvgSkillsChart () {
 	 const data = [
      {
        data: {
          battery: 0.7,
          design: .8,
          useful: 0.9,
          speed: 0.67,
          weight: 0.8
        },
        meta: { color: 'blue' }
      },
      
    ];

	const captions = {
      // columns
      battery: 'Battery Capacity',
      design: 'Design',
      useful: 'Usefulness',
      speed: 'Speed',
      weight: 'Weight'
    };

    return (
      <div>
        <RadarChart
            captions={{
              // columns
              battery: 'Battery Capacity',
              design: 'Design',
              useful: 'Usefulness',
              speed: 'Speed',
              weight: 'Weight'
            }}
            data={[
              // data
              {
                data: {
                  battery: 0.7,
                  design: .8,
                  useful: 0.9,
                  speed: 0.67,
                  weight: 0.8
                },
                meta: { backgroundColor: '#282c34' }
              },
            ]}
            size={400}
          />
        </div>
    );
  }

export default SvgSkillsChart;