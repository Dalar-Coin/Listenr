import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LogarithmicScale,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
// import { faker } from '@faker-js/faker'
ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Graph = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Peaks',
      },
    },
    scales: {
      y: {
        min: -10,
        max: 10,
        stepSize: 2,
      },
      x: {
        type: 'logarithmic',
        min: 20,
        max: 20000,
        // stepSize: 2,
      },
    },
  }

  // const labels = ['20', '100', '500', '1000', '3000', '5000', '8000', '10000']

  const data = {
    // labels,
    datasets: [
      {
        // label: '',
        // data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        // borderColor: 'rgb(255, 99, 132)',
        // backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return (
    <div>
      <div>
        <Line
          options={options}
          data={data}
          style={{ width: '100%', height: '500px' }}
        />
      </div>
    </div>
  )
}

export default Graph
