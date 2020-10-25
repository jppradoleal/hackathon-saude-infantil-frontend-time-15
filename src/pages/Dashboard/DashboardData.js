import React from 'react';
// import UserContext from '../../context/UserContext';
// import api from '../../services/api';
import { Line } from 'react-chartjs-2';

import Sidebar from '../../components/Sidebar';

// import api from '../../services/api';

import '../../styles/dashboard-data.css';

const data = {
  labels: [
    '01/01/2020', 
    '02/01/2020', 
    '03/01/2020', 
    '04/01/2020', 
    '05/01/2020', 
    '06/01/2020'],
  datasets: [
    {
      label: 'Matheus',
      data: [12, 19, 15, 15, 12, 17],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'Marcelo',
      data: [25, 23, 22, 21, 23, 21.5],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-2',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
}

export default function DashboardData() {
  // const [childrenData, setChildrenData] = useState({});
  // const {token} = useContext(UserContext);

  // useEffect(() => {
  //   api.get('/child/data/parent', {
  //     headers: {
  //       'Authorization': 'Bearer ' + String(token)
  //     }
  //   }).then(response => {
  //     response.data.map(lOneData => {
  //       lOneData.map(lTwoData => {
  //         setChildrenData(cData => ({...cData, [lTwoData._id]: lTwoData}));
  //       })
  //     })
  //     console.log(childrenData);
  //   }).catch(err => console.error(err.response.data));
  // }, []);
  return (
    <div className="container">
      <Sidebar />
      <main id="page-chart">
        <h3>IMC</h3>
        <div className="chart-container">
          <Line data={data} options={options} />
        </div>
        <div className="insert">
          <h3>Inserir novo registro</h3>
          <form>
            <input type='number' placeholder="Peso"/>
            <input type='number' placeholder="Altura"/>
            <select>
              <option value="1" default>Marcelo</option>
              <option value="2">Matheus</option>
            </select>
          </form>
        </div>
      </main>
    </div>
  );
}