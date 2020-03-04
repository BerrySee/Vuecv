import { Radar } from 'vue-chartjs';
import { red } from 'color-name';

export default {
  props: ['barchart'],
  extends: Radar,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        responsive: true,
        labels: [
          'HTML',
          'CSS',
          'Javascript',
          'Bootsrap',
          'Vue.js',
          'Adobe Illustrator',
          'Adobe Photoshop',
          'Friendly Personality'
        ],
        fontColor: red,
        //fontSize: 20,
        datasets: [
          {
            label: ['Web technologies in %'],
            backgroundColor: 'rgba(28, 84, 25, 0.4)',
            borderColor: 'rgb(28, 84, 25, )',
            data: [70, 60, 40, 55, 20, 30, 25, 99]
          }
        ]
      },
      {
        scale: {
          responsive: true,
          pointLabels: {
            fontSize: 12
          },
          ticks: {
            min: 0,
            max: 100,
            backgroundColor: 'rgba(0,0,0,0)'
          }
        },
        responsive: true
      }
    );
  }
};
