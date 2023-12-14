export type ILocation = {
    country?: string,
    state?: string,
    city?: string,
    station?: string,
    coordinates?: any[]
}

export type ISelectProps = {
    placeHolder?: string,
    options: any[],
    isMulti?: boolean,
    isSearchable?: boolean,
    optionName: string,
    onChange: (a: string) => void
}

export const recomendations = {
  good: [
      {image: 'ic-health-sport-green.svg', text: 'Наслаждайтесь отдыхом на улице'},
      {image: 'ic-health-window-green.svg', text: 'Откройте окна, чтобы проветрить помещение',}
  ],
  normal: [
      {image: 'ic-health-sport-yellow.svg', text: 'Чувствительные группы должны уменьшить нагрузки на открытом воздухе'},
      {image: 'ic-health-mask-yellow.svg', text: 'Чувствительные группы должны носить маски на улице'},
      {image: 'ic-health-window-yellow.svg', text: 'Закройте окна, чтобы избежать загрязнения наружным воздухом'},
      {image: 'ic-health-airpurifier-yellow.svg', text: 'Чувствительные группы должны запустить очиститель воздуха'}            
  ],
  bad: [
      {image: 'ic-health-sport-red.svg', text: 'Избегайте нагрузок на улице'},
      {image: 'ic-health-window-red.svg', text: 'Закройте окна, чтобы избежать загрязнения наружным воздухом'},
      {image: 'ic-health-mask-red.svg', text: 'Носите маску на улице'},
      {image: 'ic-health-airpurifier-red.svg', text: 'Включите очиститель воздуха'}
  ]
}

export const getWeatherDescription = (ic: string) => {
  let description = '';
  switch (ic) {
      case '01d':
          description = 'clear sky (day)';
          break;
      case '01n':
          description = 'clear sky (night)';
          break;
      case '02d':
          description = 'few clouds (day)';
          break;	
      case '02n':
          description = 'few clouds (night)';
          break;	
      case '03d':
          description = 'scattered clouds';
          break;	
      case '04d':
          description = 'broken clouds';
          break;
      case '09d':
          description = 'shower rain';
          break;
      case '10d':
          description = 'rain (day time)';
          break;
      case '10n':
          description = 'rain (night time)';
          break;
      case '11d':
          description = 'thunderstorm';
          break;
      case '13d':
          description = 'snow';
          break;
      case '50d':
          description = 'mist';
          break;
      default:
          description = 'no info'	
  }
  return description
}

export const TestForecasts = [
  {
    "ts": "2019-08-15T12:00:00.000Z",
    "aqius": 137,
    "aqicn": 69,
    "tp": 23,
    "tp_min": 23,
    "pr": 996,
    "hu": 100,
    "ws": 2,
    "wd": 225,
    "ic": "10d"
  },
  {
    "ts": "2019-08-15T15:00:00.000Z",
    "aqius": 137,
    "aqicn": 69,
    "tp": 23,
    "tp_min": 23,
    "pr": 994,
    "hu": 100,
    "ws": 2,
    "wd": 226,
    "ic": "02d"
  },
  {
    "ts": "2019-08-15T18:00:00.000Z",
    "aqius": 77,
    "aqicn": 43,
    "tp": 22,
    "tp_min": 22,
    "pr": 994,
    "hu": 98,
    "ws": 1,
    "wd": 238,
    "ic": "10n"
  },
  {
    "ts": "2019-08-18T06:00:00.000Z",
    "aqius": 65,
    "aqicn": 35,
    "tp": 19,
    "tp_min": 19,
    "pr": 994,
    "hu": 95,
    "ws": 1,
    "wd": 171,
    "ic": "13d"
  },
  {
    "ts": "2019-08-18T09:00:00.000Z",
    "aqius": 33,
    "aqicn": 15,
    "tp": 24,
    "tp_min": 24,
    "pr": 995,
    "hu": 100,
    "ws": 2,
    "wd": 182,
    "ic": "10d"
  }
]