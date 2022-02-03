module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'Eiko': 'Eiko-Heading',
      },
      colors:{
      'rose-main': '#B86E7A',	/* Main Primary colour Rose Gold*/
      'rose-1': '#F4D1D6',
      'rose-2': '#DBA1AA',
      'rose-3': '#9A4955',
      'rose-4': '#7E2A37',
      'beige-main': '#C39274',	/* Beige Secondary color (1) */
      'beige-1': '#FFE8DA',
      'beige-2': '#E8C2AA',
      'beige-3': '#A36E4D',
      'beige-4': '#854E2C',  
      'green-main': '#4B7E72',	/* Earthy GreenSecondary color (2) */
      'green-1': '#9EB8B2',
      'green-2': '#6E968D',
      'green-3': '#32695D',
      'green-4': '#1D5649',  
      'lime-main': '#76A663',	/* Vibrant Green Complement color */
      'lime-1': '#CAE2C1',
      'lime-2': '#A0C691',
      'lime-3': '#568B42',
      'lime-4': '#3A7226',
      'overlay': '#fff0f5', 
      },
      fontSize:{
        '10xl': '9rem',
        '11xl': '10rem',
        '12xl': '11rem',
        '13xl': '12rem',
      }
    },
  },
  plugins: [],
};
