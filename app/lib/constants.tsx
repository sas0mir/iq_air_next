export type ILocation = {
    country?: string,
    state?: string,
    city?: string,
    type?: string,
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

export const TestNearestResponse = {
    "status": "success",
    "data": {
      "city": "Port Harcourt",
      "state": "Rivers",
      "country": "Nigeria",
      "location": {
        "type": "Point",
        "coordinates": [
          7.048623,
          4.854166
        ]
      },
      "forecasts": [
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
          "ic": "10d"
        },
        {
          "ts": "2019-08-15T18:00:00.000Z",
          "aqius": 137,
          "aqicn": 69,
          "tp": 22,
          "tp_min": 22,
          "pr": 994,
          "hu": 98,
          "ws": 1,
          "wd": 238,
          "ic": "10n"
        },
        {
          "ts": "2019-08-15T21:00:00.000Z",
          "aqius": 137,
          "aqicn": 69,
          "tp": 22,
          "tp_min": 22,
          "pr": 996,
          "hu": 98,
          "ws": 1,
          "wd": 229,
          "ic": "10n"
        },
        {
          "ts": "2019-08-16T00:00:00.000Z",
          "aqius": 137,
          "aqicn": 69,
          "tp": 22,
          "tp_min": 22,
          "pr": 996,
          "hu": 98,
          "ws": 1,
          "wd": 252,
          "ic": "10n"
        },
        {
          "ts": "2019-08-16T03:00:00.000Z",
          "aqius": 158,
          "aqicn": 94,
          "tp": 22,
          "tp_min": 22,
          "pr": 995,
          "hu": 98,
          "ws": 1,
          "wd": 243,
          "ic": "10n"
        },
        {
          "ts": "2019-08-16T06:00:00.000Z",
          "aqius": 158,
          "aqicn": 94,
          "tp": 22,
          "tp_min": 22,
          "pr": 996,
          "hu": 98,
          "ws": 1,
          "wd": 267,
          "ic": "10d"
        },
        {
          "ts": "2019-08-16T09:00:00.000Z",
          "aqius": 158,
          "aqicn": 94,
          "tp": 24,
          "tp_min": 24,
          "pr": 996,
          "hu": 100,
          "ws": 2,
          "wd": 262,
          "ic": "10d"
        },
        {
          "ts": "2019-08-16T12:00:00.000Z",
          "aqius": 137,
          "aqicn": 69,
          "tp": 24,
          "tp_min": 24,
          "pr": 995,
          "hu": 96,
          "ws": 3,
          "wd": 256,
          "ic": "10d"
        },
        {
          "ts": "2019-08-16T15:00:00.000Z",
          "aqius": 137,
          "aqicn": 69,
          "tp": 24,
          "tp_min": 24,
          "pr": 993,
          "hu": 93,
          "ws": 3,
          "wd": 237,
          "ic": "10d"
        },
        {
          "ts": "2019-08-16T18:00:00.000Z",
          "aqius": 137,
          "aqicn": 69,
          "tp": 23,
          "tp_min": 23,
          "pr": 994,
          "hu": 95,
          "ws": 2,
          "wd": 239,
          "ic": "10n"
        },
        {
          "ts": "2019-08-16T21:00:00.000Z",
          "aqius": 158,
          "aqicn": 94,
          "tp": 22,
          "tp_min": 22,
          "pr": 995,
          "hu": 97,
          "ws": 3,
          "wd": 237,
          "ic": "10n"
        },
        {
          "ts": "2019-08-17T00:00:00.000Z",
          "aqius": 158,
          "aqicn": 94,
          "tp": 22,
          "tp_min": 22,
          "pr": 995,
          "hu": 97,
          "ws": 3,
          "wd": 238,
          "ic": "10n"
        },
        {
          "ts": "2019-08-17T03:00:00.000Z",
          "aqius": 158,
          "aqicn": 94,
          "tp": 21,
          "tp_min": 21,
          "pr": 993,
          "hu": 98,
          "ws": 3,
          "wd": 236,
          "ic": "10n"
        },
        {
          "ts": "2019-08-17T06:00:00.000Z",
          "aqius": 158,
          "aqicn": 94,
          "tp": 21,
          "tp_min": 21,
          "pr": 995,
          "hu": 98,
          "ws": 2,
          "wd": 257,
          "ic": "10d"
        },
        {
          "ts": "2019-08-17T09:00:00.000Z",
          "aqius": 158,
          "aqicn": 94,
          "tp": 23,
          "tp_min": 23,
          "pr": 996,
          "hu": 99,
          "ws": 3,
          "wd": 260,
          "ic": "10d"
        },
        {
          "ts": "2019-08-17T12:00:00.000Z",
          "aqius": 158,
          "aqicn": 94,
          "tp": 24,
          "tp_min": 24,
          "pr": 995,
          "hu": 97,
          "ws": 2,
          "wd": 266,
          "ic": "10d"
        },
        {
          "ts": "2019-08-17T15:00:00.000Z",
          "aqius": 158,
          "aqicn": 94,
          "tp": 24,
          "tp_min": 24,
          "pr": 993,
          "hu": 93,
          "ws": 2,
          "wd": 249,
          "ic": "10d"
        },
        {
          "ts": "2019-08-17T18:00:00.000Z",
          "aqius": 158,
          "aqicn": 94,
          "tp": 23,
          "tp_min": 23,
          "pr": 993,
          "hu": 90,
          "ws": 2,
          "wd": 217,
          "ic": "10n"
        },
        {
          "ts": "2019-08-17T21:00:00.000Z",
          "aqius": 158,
          "aqicn": 94,
          "tp": 22,
          "tp_min": 22,
          "pr": 995,
          "hu": 96,
          "ws": 2,
          "wd": 221,
          "ic": "10n"
        },
        {
          "ts": "2019-08-18T00:00:00.000Z",
          "aqius": 137,
          "aqicn": 69,
          "tp": 21,
          "tp_min": 21,
          "pr": 994,
          "hu": 96,
          "ws": 2,
          "wd": 240,
          "ic": "10n"
        },
        {
          "ts": "2019-08-18T03:00:00.000Z",
          "aqius": 158,
          "aqicn": 94,
          "tp": 19,
          "tp_min": 19,
          "pr": 993,
          "hu": 96,
          "ws": 0,
          "wd": 228,
          "ic": "10n"
        },
        {
          "ts": "2019-08-18T06:00:00.000Z",
          "aqius": 137,
          "aqicn": 69,
          "tp": 19,
          "tp_min": 19,
          "pr": 994,
          "hu": 95,
          "ws": 1,
          "wd": 171,
          "ic": "10d"
        },
        {
          "ts": "2019-08-18T09:00:00.000Z",
          "aqius": 158,
          "aqicn": 94,
          "tp": 24,
          "tp_min": 24,
          "pr": 995,
          "hu": 100,
          "ws": 2,
          "wd": 182,
          "ic": "10d"
        }
      ],
      "current": {
        "weather": {
          "ts": "2019-08-15T09:00:00.000Z",
          "tp": 23,
          "pr": 997,
          "hu": 100,
          "ws": 1,
          "wd": 216,
          "ic": "10d"
        },
        "pollution": {
          "ts": "2019-08-15T10:00:00.000Z",
          "aqius": 83,
          "mainus": "p2",
          "aqicn": 39,
          "maincn": "p2",
          "p2": {
            "conc": 27.2,
            "aqius": 83,
            "aqicn": 39
          }
        }
      },
      "history": {
        "weather": [
          {
            "ts": "2019-08-15T09:00:00.000Z",
            "tp": 23,
            "pr": 997,
            "hu": 100,
            "ws": 1,
            "wd": 216,
            "ic": "10d"
          },
          {
            "ts": "2019-08-15T08:00:00.000Z",
            "tp": 23,
            "pr": 997,
            "hu": 100,
            "ws": 1,
            "wd": 216,
            "ic": "10d"
          },
          {
            "ts": "2019-08-15T06:00:00.000Z",
            "tp": 21,
            "pr": 995,
            "hu": 98,
            "ws": 1,
            "wd": 204,
            "ic": "10d"
          },
          {
            "ts": "2019-08-15T05:00:00.000Z",
            "tp": 21,
            "pr": 995,
            "hu": 98,
            "ws": 1,
            "wd": 204,
            "ic": "10d"
          },
          {
            "ts": "2019-08-15T04:00:00.000Z",
            "tp": 21,
            "pr": 995,
            "hu": 98,
            "ws": 1,
            "wd": 219,
            "ic": "10n"
          },
          {
            "ts": "2019-08-15T03:00:00.000Z",
            "tp": 21,
            "pr": 995,
            "hu": 98,
            "ws": 1,
            "wd": 219,
            "ic": "10n"
          },
          {
            "ts": "2019-08-15T02:00:00.000Z",
            "tp": 21,
            "pr": 995,
            "hu": 98,
            "ws": 1,
            "wd": 219,
            "ic": "10n"
          },
          {
            "ts": "2019-08-15T01:00:00.000Z",
            "tp": 22,
            "pr": 995,
            "hu": 98,
            "ws": 1,
            "wd": 225,
            "ic": "10n"
          },
          {
            "ts": "2019-08-15T00:00:00.000Z",
            "tp": 22,
            "pr": 995,
            "hu": 98,
            "ws": 1,
            "wd": 225,
            "ic": "10n"
          },
          {
            "ts": "2019-08-14T23:00:00.000Z",
            "tp": 22,
            "pr": 995,
            "hu": 98,
            "ws": 1,
            "wd": 225,
            "ic": "10n"
          },
          {
            "ts": "2019-08-14T22:00:00.000Z",
            "tp": 22,
            "pr": 995,
            "hu": 98,
            "ws": 1,
            "wd": 220,
            "ic": "10n"
          },
          {
            "ts": "2019-08-14T21:00:00.000Z",
            "tp": 22,
            "pr": 995,
            "hu": 98,
            "ws": 1,
            "wd": 220,
            "ic": "10n"
          },
          {
            "ts": "2019-08-14T20:00:00.000Z",
            "tp": 22,
            "pr": 995,
            "hu": 98,
            "ws": 1,
            "wd": 220,
            "ic": "10n"
          },
          {
            "ts": "2019-08-14T19:00:00.000Z",
            "tp": 22,
            "pr": 994,
            "hu": 97,
            "ws": 1,
            "wd": 220,
            "ic": "10n"
          },
          {
            "ts": "2019-08-14T18:00:00.000Z",
            "tp": 22,
            "pr": 994,
            "hu": 97,
            "ws": 1,
            "wd": 220,
            "ic": "10n"
          },
          {
            "ts": "2019-08-14T17:00:00.000Z",
            "tp": 22,
            "pr": 994,
            "hu": 97,
            "ws": 1,
            "wd": 220,
            "ic": "10d"
          },
          {
            "ts": "2019-08-14T16:00:00.000Z",
            "tp": 23,
            "pr": 993,
            "hu": 98,
            "ws": 3,
            "wd": 215,
            "ic": "10d"
          },
          {
            "ts": "2019-08-14T15:00:00.000Z",
            "tp": 23,
            "pr": 993,
            "hu": 98,
            "ws": 3,
            "wd": 215,
            "ic": "10d"
          },
          {
            "ts": "2019-08-14T14:00:00.000Z",
            "tp": 23,
            "pr": 993,
            "hu": 98,
            "ws": 3,
            "wd": 215,
            "ic": "10d"
          },
          {
            "ts": "2019-08-14T13:00:00.000Z",
            "tp": 23,
            "pr": 995,
            "hu": 100,
            "ws": 2,
            "wd": 192,
            "ic": "10d"
          },
          {
            "ts": "2019-08-14T12:00:00.000Z",
            "tp": 26,
            "pr": 1012,
            "hu": 88,
            "ws": 3,
            "wd": 240,
            "ic": "04d"
          },
          {
            "ts": "2019-08-14T11:00:00.000Z",
            "tp": 26,
            "pr": 1012,
            "hu": 88,
            "ws": 3,
            "wd": 240,
            "ic": "04d"
          },
          {
            "ts": "2019-08-14T10:00:00.000Z",
            "tp": 21,
            "pr": 996,
            "hu": 100,
            "ws": 1,
            "wd": 244,
            "ic": "10d"
          },
          {
            "ts": "2019-08-14T09:00:00.000Z",
            "tp": 25,
            "pr": 1013,
            "hu": 94,
            "ws": 1,
            "ic": "04d",
            "wd": null
          },
          {
            "ts": "2019-08-14T08:00:00.000Z",
            "tp": 25,
            "pr": 1013,
            "hu": 94,
            "ws": 1,
            "ic": "04d",
            "wd": null
          },
          {
            "ts": "2019-08-14T07:00:00.000Z",
            "tp": 24,
            "pr": 1012,
            "hu": 94,
            "ws": 0,
            "wd": 113,
            "ic": "10d"
          },
          {
            "ts": "2019-08-14T06:00:00.000Z",
            "tp": 24,
            "pr": 1012,
            "hu": 94,
            "ws": 0,
            "wd": 113,
            "ic": "10d"
          },
          {
            "ts": "2019-08-14T05:00:00.000Z",
            "tp": 24,
            "pr": 1012,
            "hu": 100,
            "ws": 0,
            "wd": 113,
            "ic": "04n"
          },
          {
            "ts": "2019-08-14T04:00:00.000Z",
            "tp": 24,
            "pr": 1011,
            "hu": 100,
            "ws": 1,
            "wd": 287,
            "ic": "04n"
          },
          {
            "ts": "2019-08-14T03:00:00.000Z",
            "tp": 24,
            "pr": 1011,
            "hu": 100,
            "ws": 1,
            "wd": 287,
            "ic": "04n"
          },
          {
            "ts": "2019-08-14T02:00:00.000Z",
            "tp": 24,
            "pr": 1011,
            "hu": 100,
            "ws": 1,
            "wd": 287,
            "ic": "04n"
          },
          {
            "ts": "2019-08-14T01:00:00.000Z",
            "tp": 24,
            "pr": 1013,
            "hu": 100,
            "ws": 1,
            "wd": 234,
            "ic": "04n"
          },
          {
            "ts": "2019-08-14T00:00:00.000Z",
            "tp": 24,
            "pr": 1013,
            "hu": 100,
            "ws": 1,
            "wd": 234,
            "ic": "04n"
          },
          {
            "ts": "2019-08-13T23:00:00.000Z",
            "tp": 24,
            "pr": 1013,
            "hu": 100,
            "ws": 1,
            "wd": 234,
            "ic": "11n"
          },
          {
            "ts": "2019-08-13T22:00:00.000Z",
            "tp": 24,
            "pr": 1013,
            "hu": 100,
            "ws": 2,
            "wd": 233,
            "ic": "11n"
          },
          {
            "ts": "2019-08-13T21:00:00.000Z",
            "tp": 24,
            "pr": 1013,
            "hu": 100,
            "ws": 2,
            "wd": 233,
            "ic": "11n"
          },
          {
            "ts": "2019-08-13T20:00:00.000Z",
            "tp": 22,
            "pr": 996,
            "hu": 96,
            "ws": 2,
            "wd": 233,
            "ic": "03n"
          },
          {
            "ts": "2019-08-13T19:00:00.000Z",
            "tp": 25,
            "pr": 1011,
            "hu": 100,
            "ws": 1,
            "wd": 240,
            "ic": "11n"
          },
          {
            "ts": "2019-08-13T18:00:00.000Z",
            "tp": 25,
            "pr": 1011,
            "hu": 100,
            "ws": 1,
            "wd": 230,
            "ic": "11d"
          },
          {
            "ts": "2019-08-13T17:00:00.000Z",
            "tp": 26,
            "pr": 1010,
            "hu": 94,
            "ws": 2,
            "wd": 260,
            "ic": "11d"
          },
          {
            "ts": "2019-08-13T16:00:00.000Z",
            "tp": 25,
            "pr": 993,
            "hu": 94,
            "ws": 4,
            "wd": 229,
            "ic": "03d"
          },
          {
            "ts": "2019-08-13T15:00:00.000Z",
            "tp": 25,
            "pr": 993,
            "hu": 94,
            "ws": 4,
            "wd": 229,
            "ic": "03d"
          },
          {
            "ts": "2019-08-13T14:00:00.000Z",
            "tp": 25,
            "pr": 993,
            "hu": 94,
            "ws": 4,
            "wd": 229,
            "ic": "03d"
          },
          {
            "ts": "2019-08-13T13:00:00.000Z",
            "tp": 28,
            "pr": 1012,
            "hu": 78,
            "ws": 2,
            "wd": 220,
            "ic": "04d"
          },
          {
            "ts": "2019-08-13T12:00:00.000Z",
            "tp": 28,
            "pr": 1012,
            "hu": 78,
            "ws": 2,
            "wd": 220,
            "ic": "04d"
          },
          {
            "ts": "2019-08-13T11:00:00.000Z",
            "tp": 27,
            "pr": 1014,
            "hu": 83,
            "ws": 3,
            "wd": 250,
            "ic": "04d"
          },
          {
            "ts": "2019-08-13T10:00:00.000Z",
            "tp": 22,
            "pr": 996,
            "hu": 100,
            "ws": 2,
            "wd": 227,
            "ic": "10d"
          },
          {
            "ts": "2019-08-13T09:00:00.000Z",
            "tp": 22,
            "pr": 996,
            "hu": 100,
            "ws": 2,
            "wd": 227,
            "ic": "10d"
          }
        ],
        "pollution": [
          {
            "ts": "2019-08-15T10:00:00.000Z",
            "aqius": 83,
            "mainus": "p2",
            "aqicn": 39,
            "maincn": "p2",
            "p2": {
              "conc": 27.2,
              "aqius": 83,
              "aqicn": 39
            }
          },
          {
            "ts": "2019-08-15T09:00:00.000Z",
            "aqius": 96,
            "mainus": "p2",
            "aqicn": 48,
            "maincn": "p2",
            "p2": {
              "conc": 33.7,
              "aqius": 96,
              "aqicn": 48
            }
          },
          {
            "ts": "2019-08-15T08:00:00.000Z",
            "aqius": 107,
            "mainus": "p2",
            "aqicn": 54,
            "maincn": "p2",
            "p2": {
              "conc": 37.8,
              "aqius": 107,
              "aqicn": 54
            }
          },
          {
            "ts": "2019-08-15T07:00:00.000Z",
            "aqius": 102,
            "mainus": "p2",
            "aqicn": 51,
            "maincn": "p2",
            "p2": {
              "conc": 36,
              "aqius": 102,
              "aqicn": 51
            }
          },
          {
            "ts": "2019-08-15T06:00:00.000Z",
            "aqius": 94,
            "mainus": "p2",
            "aqicn": 46,
            "maincn": "p2",
            "p2": {
              "conc": 32.5,
              "aqius": 94,
              "aqicn": 46
            }
          },
          {
            "ts": "2019-08-15T05:00:00.000Z",
            "aqius": 93,
            "mainus": "p2",
            "aqicn": 46,
            "maincn": "p2",
            "p2": {
              "conc": 32.3,
              "aqius": 93,
              "aqicn": 46
            }
          },
          {
            "ts": "2019-08-15T04:00:00.000Z",
            "aqius": 90,
            "mainus": "p2",
            "aqicn": 44,
            "maincn": "p2",
            "p2": {
              "conc": 30.8,
              "aqius": 90,
              "aqicn": 44
            }
          },
          {
            "ts": "2019-08-15T03:00:00.000Z",
            "aqius": 90,
            "mainus": "p2",
            "aqicn": 44,
            "maincn": "p2",
            "p2": {
              "conc": 30.8,
              "aqius": 90,
              "aqicn": 44
            }
          },
          {
            "ts": "2019-08-15T02:00:00.000Z",
            "aqius": 104,
            "mainus": "p2",
            "aqicn": 52,
            "maincn": "p2",
            "p2": {
              "conc": 36.7,
              "aqius": 104,
              "aqicn": 52
            }
          },
          {
            "ts": "2019-08-15T01:00:00.000Z",
            "aqius": 120,
            "mainus": "p2",
            "aqicn": 60,
            "maincn": "p2",
            "p2": {
              "conc": 43.2,
              "aqius": 120,
              "aqicn": 60
            }
          },
          {
            "ts": "2019-08-15T00:00:00.000Z",
            "aqius": 144,
            "mainus": "p2",
            "aqicn": 73,
            "maincn": "p2",
            "p2": {
              "conc": 53.1,
              "aqius": 144,
              "aqicn": 73
            }
          },
          {
            "ts": "2019-08-14T23:00:00.000Z",
            "aqius": 153,
            "mainus": "p2",
            "aqicn": 80,
            "maincn": "p2",
            "p2": {
              "conc": 58.8,
              "aqius": 153,
              "aqicn": 80
            }
          },
          {
            "ts": "2019-08-14T22:00:00.000Z",
            "aqius": 123,
            "mainus": "p2",
            "aqicn": 62,
            "maincn": "p2",
            "p2": {
              "conc": 44.3,
              "aqius": 123,
              "aqicn": 62
            }
          },
          {
            "ts": "2019-08-14T21:00:00.000Z",
            "aqius": 91,
            "mainus": "p2",
            "aqicn": 45,
            "maincn": "p2",
            "p2": {
              "conc": 31.3,
              "aqius": 91,
              "aqicn": 45
            }
          },
          {
            "ts": "2019-08-14T20:00:00.000Z",
            "aqius": 83,
            "mainus": "p2",
            "aqicn": 39,
            "maincn": "p2",
            "p2": {
              "conc": 27.6,
              "aqius": 83,
              "aqicn": 39
            }
          },
          {
            "ts": "2019-08-14T19:00:00.000Z",
            "aqius": 68,
            "mainus": "p2",
            "aqicn": 29,
            "maincn": "p2",
            "p2": {
              "conc": 20.3,
              "aqius": 68,
              "aqicn": 29
            }
          },
          {
            "ts": "2019-08-14T18:00:00.000Z",
            "aqius": 63,
            "mainus": "p2",
            "aqicn": 25,
            "maincn": "p2",
            "p2": {
              "conc": 17.8,
              "aqius": 63,
              "aqicn": 25
            }
          },
          {
            "ts": "2019-08-14T17:00:00.000Z",
            "aqius": 66,
            "mainus": "p2",
            "aqicn": 28,
            "maincn": "p2",
            "p2": {
              "conc": 19.5,
              "aqius": 66,
              "aqicn": 28
            }
          },
          {
            "ts": "2019-08-14T16:00:00.000Z",
            "aqius": 58,
            "mainus": "p2",
            "aqicn": 22,
            "maincn": "p2",
            "p2": {
              "conc": 15.3,
              "aqius": 58,
              "aqicn": 22
            }
          },
          {
            "ts": "2019-08-14T15:00:00.000Z",
            "aqius": 48,
            "mainus": "p2",
            "aqicn": 16,
            "maincn": "p2",
            "p2": {
              "conc": 11.5,
              "aqius": 48,
              "aqicn": 16
            }
          },
          {
            "ts": "2019-08-14T14:00:00.000Z",
            "aqius": 45,
            "mainus": "p2",
            "aqicn": 16,
            "maincn": "p2",
            "p2": {
              "conc": 11,
              "aqius": 45,
              "aqicn": 16
            }
          },
          {
            "ts": "2019-08-14T13:00:00.000Z",
            "aqius": 43,
            "mainus": "p2",
            "aqicn": 15,
            "maincn": "p2",
            "p2": {
              "conc": 10.4,
              "aqius": 43,
              "aqicn": 15
            }
          },
          {
            "ts": "2019-08-14T12:00:00.000Z",
            "aqius": 41,
            "mainus": "p2",
            "aqicn": 14,
            "maincn": "p2",
            "p2": {
              "conc": 9.9,
              "aqius": 41,
              "aqicn": 14
            }
          },
          {
            "ts": "2019-08-14T11:00:00.000Z",
            "aqius": 45,
            "mainus": "p2",
            "aqicn": 15,
            "maincn": "p2",
            "p2": {
              "conc": 10.8,
              "aqius": 45,
              "aqicn": 15
            }
          },
          {
            "ts": "2019-08-14T10:00:00.000Z",
            "aqius": 56,
            "mainus": "p2",
            "aqicn": 21,
            "maincn": "p2",
            "p2": {
              "conc": 14.7,
              "aqius": 56,
              "aqicn": 21
            }
          },
          {
            "ts": "2019-08-14T09:00:00.000Z",
            "aqius": 67,
            "mainus": "p2",
            "aqicn": 28,
            "maincn": "p2",
            "p2": {
              "conc": 19.6,
              "aqius": 67,
              "aqicn": 28
            }
          },
          {
            "ts": "2019-08-14T08:00:00.000Z",
            "aqius": 116,
            "mainus": "p2",
            "aqicn": 58,
            "maincn": "p2",
            "p2": {
              "conc": 41.6,
              "aqius": 116,
              "aqicn": 58
            }
          },
          {
            "ts": "2019-08-14T07:00:00.000Z",
            "aqius": 143,
            "mainus": "p2",
            "aqicn": 72,
            "maincn": "p2",
            "p2": {
              "conc": 52.8,
              "aqius": 143,
              "aqicn": 72
            }
          },
          {
            "ts": "2019-08-14T06:00:00.000Z",
            "aqius": 129,
            "mainus": "p2",
            "aqicn": 65,
            "maincn": "p2",
            "p2": {
              "conc": 47,
              "aqius": 129,
              "aqicn": 65
            }
          },
          {
            "ts": "2019-08-14T05:00:00.000Z",
            "aqius": 96,
            "mainus": "p2",
            "aqicn": 48,
            "maincn": "p2",
            "p2": {
              "conc": 33.8,
              "aqius": 96,
              "aqicn": 48
            }
          },
          {
            "ts": "2019-08-14T04:00:00.000Z",
            "aqius": 104,
            "mainus": "p2",
            "aqicn": 52,
            "maincn": "p2",
            "p2": {
              "conc": 36.7,
              "aqius": 104,
              "aqicn": 52
            }
          },
          {
            "ts": "2019-08-14T03:00:00.000Z",
            "aqius": 92,
            "mainus": "p2",
            "aqicn": 45,
            "maincn": "p2",
            "p2": {
              "conc": 31.8,
              "aqius": 92,
              "aqicn": 45
            }
          },
          {
            "ts": "2019-08-14T02:00:00.000Z",
            "aqius": 59,
            "mainus": "p2",
            "aqicn": 23,
            "maincn": "p2",
            "p2": {
              "conc": 15.9,
              "aqius": 59,
              "aqicn": 23
            }
          },
          {
            "ts": "2019-08-14T01:00:00.000Z",
            "aqius": 72,
            "mainus": "p2",
            "aqicn": 32,
            "maincn": "p2",
            "p2": {
              "conc": 22.1,
              "aqius": 72,
              "aqicn": 32
            }
          },
          {
            "ts": "2019-08-14T00:00:00.000Z",
            "aqius": 122,
            "mainus": "p2",
            "aqicn": 62,
            "maincn": "p2",
            "p2": {
              "conc": 44.2,
              "aqius": 122,
              "aqicn": 62
            }
          },
          {
            "ts": "2019-08-13T23:00:00.000Z",
            "aqius": 153,
            "mainus": "p2",
            "aqicn": 80,
            "maincn": "p2",
            "p2": {
              "conc": 58.8,
              "aqius": 153,
              "aqicn": 80
            }
          },
          {
            "ts": "2019-08-13T22:00:00.000Z",
            "aqius": 107,
            "mainus": "p2",
            "aqicn": 54,
            "maincn": "p2",
            "p2": {
              "conc": 38,
              "aqius": 107,
              "aqicn": 54
            }
          },
          {
            "ts": "2019-08-13T21:00:00.000Z",
            "aqius": 65,
            "mainus": "p2",
            "aqicn": 27,
            "maincn": "p2",
            "p2": {
              "conc": 19,
              "aqius": 65,
              "aqicn": 27
            }
          },
          {
            "ts": "2019-08-13T20:00:00.000Z",
            "aqius": 48,
            "mainus": "p2",
            "aqicn": 17,
            "maincn": "p2",
            "p2": {
              "conc": 11.7,
              "aqius": 48,
              "aqicn": 17
            }
          },
          {
            "ts": "2019-08-13T19:00:00.000Z",
            "aqius": 56,
            "mainus": "p2",
            "aqicn": 21,
            "maincn": "p2",
            "p2": {
              "conc": 14.7,
              "aqius": 56,
              "aqicn": 21
            }
          },
          {
            "ts": "2019-08-13T18:00:00.000Z",
            "aqius": 70,
            "mainus": "p2",
            "aqicn": 30,
            "maincn": "p2",
            "p2": {
              "conc": 21.1,
              "aqius": 70,
              "aqicn": 30
            }
          },
          {
            "ts": "2019-08-13T17:00:00.000Z",
            "aqius": 63,
            "mainus": "p2",
            "aqicn": 26,
            "maincn": "p2",
            "p2": {
              "conc": 17.9,
              "aqius": 63,
              "aqicn": 26
            }
          },
          {
            "ts": "2019-08-13T16:00:00.000Z",
            "aqius": 45,
            "mainus": "p2",
            "aqicn": 16,
            "maincn": "p2",
            "p2": {
              "conc": 11,
              "aqius": 45,
              "aqicn": 16
            }
          },
          {
            "ts": "2019-08-13T15:00:00.000Z",
            "aqius": 41,
            "mainus": "p2",
            "aqicn": 14,
            "maincn": "p2",
            "p2": {
              "conc": 10,
              "aqius": 41,
              "aqicn": 14
            }
          },
          {
            "ts": "2019-08-13T14:00:00.000Z",
            "aqius": 41,
            "mainus": "p2",
            "aqicn": 14,
            "maincn": "p2",
            "p2": {
              "conc": 9.9,
              "aqius": 41,
              "aqicn": 14
            }
          },
          {
            "ts": "2019-08-13T13:00:00.000Z",
            "aqius": 38,
            "mainus": "p2",
            "aqicn": 13,
            "maincn": "p2",
            "p2": {
              "conc": 9.2,
              "aqius": 38,
              "aqicn": 13
            }
          },
          {
            "ts": "2019-08-13T12:00:00.000Z",
            "aqius": 41,
            "mainus": "p2",
            "aqicn": 14,
            "maincn": "p2",
            "p2": {
              "conc": 9.9,
              "aqius": 41,
              "aqicn": 14
            }
          },
          {
            "ts": "2019-08-13T11:00:00.000Z",
            "aqius": 45,
            "mainus": "p2",
            "aqicn": 16,
            "maincn": "p2",
            "p2": {
              "conc": 11,
              "aqius": 45,
              "aqicn": 16
            }
          }
        ]
      }
    }
  }

  export const TestRankingResponse = {
    "status": "success",
    "data": [
      {
        "city": "Portland",
        "state": "Oregon",
        "country": "USA",
        "ranking": {
          "current_aqi": 183,
          "current_aqi_cn": 154
        }
      },
      {
        "city": "Eugene",
        "state": "Oregon",
        "country": "USA",
        "ranking": {
          "current_aqi": 151,
          "current_aqi_cn": 77
        }
      },
      {
        "city": "Dhaka",
        "state": "Dhaka",
        "country": "Bangladesh",
        "ranking": {
          "current_aqi": 141,
          "current_aqi_cn": 71
        }
      },
      {
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "ranking": {
          "current_aqi": 129,
          "current_aqi_cn": 65
        }
      },
      {
        "city": "Jakarta",
        "state": "Jakarta",
        "country": "Indonesia",
        "ranking": {
          "current_aqi": 121,
          "current_aqi_cn": 61
        }
      },
      {
        "city": "Brasov",
        "state": "Centru",
        "country": "Romania",
        "ranking": {
          "current_aqi": 118,
          "current_aqi_cn": 59,
          "last_aqi": 140,
          "last_aqi_cn": 71
        }
      },
      {
        "city": "Chiang Mai",
        "state": "Chiang Mai",
        "country": "Thailand",
        "ranking": {
          "current_aqi": 114,
          "current_aqi_cn": 58
        }
      },
      {
        "city": "Santiago",
        "state": "Santiago Metropolitan",
        "country": "Chile",
        "ranking": {
          "current_aqi": 109,
          "current_aqi_cn": 55
        }
      },
      {
        "city": "Taipei",
        "state": "Taipei",
        "country": "Taiwan",
        "ranking": {
          "current_aqi": 100,
          "current_aqi_cn": 50
        }
      },
      {
        "city": "Kolkata",
        "state": "West Bengal",
        "country": "India",
        "ranking": {
          "current_aqi": 98,
          "current_aqi_cn": 49
        }
      },
      {
        "city": "Seattle",
        "state": "Washington",
        "country": "USA",
        "ranking": {
          "current_aqi": 94,
          "current_aqi_cn": 46
        }
      },
      {
        "city": "Beijing",
        "state": "Beijing",
        "country": "China",
        "ranking": {
          "current_aqi": 90,
          "current_aqi_cn": 44
        }
      },
      {
        "city": "Sao Paulo",
        "state": "Sao Paulo",
        "country": "Brazil",
        "ranking": {
          "current_aqi": 89,
          "current_aqi_cn": 43
        }
      },
      {
        "city": "Lahore",
        "state": "Punjab",
        "country": "Pakistan",
        "ranking": {
          "current_aqi": 88,
          "current_aqi_cn": 43
        }
      },
      {
        "city": "Osaka",
        "state": "Osaka",
        "country": "Japan",
        "ranking": {
          "current_aqi": 84,
          "current_aqi_cn": 40
        }
      },
      {
        "city": "Guangzhou",
        "state": "Guangdong",
        "country": "China",
        "ranking": {
          "current_aqi": 83,
          "current_aqi_cn": 39
        }
      },
      {
        "city": "Port Harcourt",
        "state": "Rivers",
        "country": "Nigeria",
        "ranking": {
          "current_aqi": 83,
          "current_aqi_cn": 39,
          "last_aqi": 96,
          "last_aqi_cn": 48
        }
      },
      {
        "city": "Hanoi",
        "state": "Hanoi",
        "country": "Vietnam",
        "ranking": {
          "current_aqi": 80,
          "current_aqi_cn": 37
        }
      },
      {
        "city": "Lima",
        "state": "Lima",
        "country": "Peru",
        "ranking": {
          "current_aqi": 80,
          "current_aqi_cn": 37
        }
      },
      {
        "city": "Chengdu",
        "state": "Sichuan",
        "country": "China",
        "ranking": {
          "current_aqi": 79,
          "current_aqi_cn": 36
        }
      },
      {
        "city": "Bogota",
        "state": "Bogota",
        "country": "Colombia",
        "ranking": {
          "current_aqi": 76,
          "current_aqi_cn": 34
        }
      },
      {
        "city": "Seoul",
        "state": "Seoul",
        "country": "South Korea",
        "ranking": {
          "current_aqi": 76,
          "current_aqi_cn": 34
        }
      },
      {
        "city": "Paris",
        "state": "Ile-de-France",
        "country": "France",
        "ranking": {
          "current_aqi": 75,
          "current_aqi_cn": 33
        }
      },
      {
        "city": "Riyadh",
        "state": "Riyadh",
        "country": "Saudi Arabia",
        "ranking": {
          "current_aqi": 74,
          "current_aqi_cn": 33,
          "last_aqi": 85,
          "last_aqi_cn": 40
        }
      },
      {
        "city": "Wroclaw",
        "state": "Wroclaw",
        "country": "Poland",
        "ranking": {
          "current_aqi": 71,
          "current_aqi_cn": 31
        }
      },
      {
        "city": "Denver",
        "state": "Colorado",
        "country": "USA",
        "ranking": {
          "current_aqi": 70,
          "current_aqi_cn": 30
        }
      },
      {
        "city": "Tehran",
        "state": "Tehran",
        "country": "Iran",
        "ranking": {
          "current_aqi": 69,
          "current_aqi_cn": 30
        }
      },
      {
        "city": "Kuala Lumpur",
        "state": "Wilayah Persekutuan",
        "country": "Malaysia",
        "ranking": {
          "current_aqi": 69,
          "current_aqi_cn": 30,
          "last_aqi": 70,
          "last_aqi_cn": 30
        }
      },
      {
        "city": "Oakland",
        "state": "California",
        "country": "USA",
        "ranking": {
          "current_aqi": 63,
          "current_aqi_cn": 26
        }
      },
      {
        "city": "Incheon",
        "state": "Gyeonggi-do",
        "country": "South Korea",
        "ranking": {
          "current_aqi": 63,
          "current_aqi_cn": 25
        }
      },
      {
        "city": "Sacramento",
        "state": "California",
        "country": "USA",
        "ranking": {
          "current_aqi": 61,
          "current_aqi_cn": 24
        }
      },
      {
        "city": "Los Angeles",
        "state": "California",
        "country": "USA",
        "ranking": {
          "current_aqi": 59,
          "current_aqi_cn": 23
        }
      },
      {
        "city": "Busan",
        "state": "Gyeongsangnam-do",
        "country": "South Korea",
        "ranking": {
          "current_aqi": 59,
          "current_aqi_cn": 23
        }
      },
      {
        "city": "Hong Kong",
        "state": "Hong Kong",
        "country": "China",
        "ranking": {
          "current_aqi": 58,
          "current_aqi_cn": 22
        }
      },
      {
        "city": "San Francisco",
        "state": "California",
        "country": "USA",
        "ranking": {
          "current_aqi": 58,
          "current_aqi_cn": 22
        }
      },
      {
        "city": "Nice",
        "state": "PACA",
        "country": "France",
        "ranking": {
          "current_aqi": 57,
          "current_aqi_cn": 21
        }
      },
      {
        "city": "Shanghai",
        "state": "Shanghai",
        "country": "China",
        "ranking": {
          "current_aqi": 55,
          "current_aqi_cn": 20
        }
      },
      {
        "city": "Karachi",
        "state": "Sindh",
        "country": "Pakistan",
        "ranking": {
          "current_aqi": 55,
          "current_aqi_cn": 20,
          "last_aqi": 55,
          "last_aqi_cn": 20
        }
      },
      {
        "city": "Tel Aviv-Yafo",
        "state": "Tel Aviv District",
        "country": "Israel",
        "ranking": {
          "current_aqi": 54,
          "current_aqi_cn": 20
        }
      },
      {
        "city": "Krakow",
        "state": "krakow",
        "country": "Poland",
        "ranking": {
          "current_aqi": 51,
          "current_aqi_cn": 17
        }
      },
      {
        "city": "London",
        "state": "Greater London",
        "country": "United Kingdom",
        "ranking": {
          "current_aqi": 51,
          "current_aqi_cn": 17
        }
      },
      {
        "city": "Pristina",
        "state": "Kosovo",
        "country": "Kosovo",
        "ranking": {
          "current_aqi": 50,
          "current_aqi_cn": 17
        }
      },
      {
        "city": "Bakersfield",
        "state": "California",
        "country": "USA",
        "ranking": {
          "current_aqi": 50,
          "current_aqi_cn": 17
        }
      },
      {
        "city": "Newark",
        "state": "New Jersey",
        "country": "USA",
        "ranking": {
          "current_aqi": 49,
          "current_aqi_cn": 17
        }
      },
      {
        "city": "Warsaw",
        "state": "Mazowieckie",
        "country": "Poland",
        "ranking": {
          "current_aqi": 49,
          "current_aqi_cn": 17
        }
      },
      {
        "city": "Poznan",
        "state": "Poznan",
        "country": "Poland",
        "ranking": {
          "current_aqi": 49,
          "current_aqi_cn": 17
        }
      },
      {
        "city": "Kaohsiung",
        "state": "Kaohsiung",
        "country": "Taiwan",
        "ranking": {
          "current_aqi": 46,
          "current_aqi_cn": 16
        }
      },
      {
        "city": "Singapore",
        "state": "Singapore",
        "country": "Singapore",
        "ranking": {
          "current_aqi": 45,
          "current_aqi_cn": 16
        }
      },
      {
        "city": "Kosice",
        "state": "Kosice",
        "country": "Slovakia",
        "ranking": {
          "current_aqi": 45,
          "current_aqi_cn": 16
        }
      },
      {
        "city": "Bangkok",
        "state": "Bangkok",
        "country": "Thailand",
        "ranking": {
          "current_aqi": 44,
          "current_aqi_cn": 15
        }
      },
      {
        "city": "Manila",
        "state": "National Capital Region",
        "country": "Philippines",
        "ranking": {
          "current_aqi": 43,
          "current_aqi_cn": 15
        }
      },
      {
        "city": "Escaldes-Engordany",
        "state": "andorra",
        "country": "Andorra",
        "ranking": {
          "current_aqi": 43,
          "current_aqi_cn": 33,
          "last_aqi": 47,
          "last_aqi_cn": 36
        }
      },
      {
        "city": "Munich",
        "state": "Bavaria",
        "country": "Germany",
        "ranking": {
          "current_aqi": 35,
          "current_aqi_cn": 27,
          "last_aqi": 44,
          "last_aqi_cn": 33
        }
      },
      {
        "city": "Brussels",
        "state": "Brussels",
        "country": "Belgium",
        "ranking": {
          "current_aqi": 33,
          "current_aqi_cn": 11
        }
      },
      {
        "city": "Budapest",
        "state": "Central Hungary",
        "country": "Hungary",
        "ranking": {
          "current_aqi": 33,
          "current_aqi_cn": 43,
          "last_aqi": 30,
          "last_aqi_cn": 43
        }
      },
      {
        "city": "Vilnius",
        "state": "Vilniaus apskritis",
        "country": "Lithuania",
        "ranking": {
          "current_aqi": 33,
          "current_aqi_cn": 11
        }
      },
      {
        "city": "Madrid",
        "state": "Madrid",
        "country": "Spain",
        "ranking": {
          "current_aqi": 29,
          "current_aqi_cn": 10
        }
      },
      {
        "city": "Amsterdam",
        "state": "Noord-Holland",
        "country": "Netherlands",
        "ranking": {
          "current_aqi": 26,
          "current_aqi_cn": 9
        }
      },
      {
        "city": "Toronto Downtown",
        "state": "Ontario",
        "country": "Canada",
        "ranking": {
          "current_aqi": 25,
          "current_aqi_cn": 9
        }
      },
      {
        "city": "Prague",
        "state": "Prague",
        "country": "Czech Republic",
        "ranking": {
          "current_aqi": 23,
          "current_aqi_cn": 8
        }
      },
      {
        "city": "Moscow",
        "state": "Moscow",
        "country": "Russia",
        "ranking": {
          "current_aqi": 22,
          "current_aqi_cn": 8
        }
      },
      {
        "city": "Lisbon",
        "state": "Lisbon",
        "country": "Portugal",
        "ranking": {
          "current_aqi": 21,
          "current_aqi_cn": 7
        }
      },
      {
        "city": "Bratislava",
        "state": "Bratislava",
        "country": "Slovakia",
        "ranking": {
          "current_aqi": 20,
          "current_aqi_cn": 22,
          "last_aqi": 14,
          "last_aqi_cn": 15
        }
      },
      {
        "city": "Ulaanbaatar",
        "state": "Ulaanbaatar",
        "country": "Mongolia",
        "ranking": {
          "current_aqi": 19,
          "current_aqi_cn": 7
        }
      },
      {
        "city": "Detroit",
        "state": "Michigan",
        "country": "USA",
        "ranking": {
          "current_aqi": 19,
          "current_aqi_cn": 7
        }
      },
      {
        "city": "Phnom Penh",
        "state": "Phnom Penh",
        "country": "Cambodia",
        "ranking": {
          "current_aqi": 19,
          "current_aqi_cn": 6,
          "last_aqi": 20,
          "last_aqi_cn": 7
        }
      },
      {
        "city": "Jerusalem",
        "state": "Jerusalem District",
        "country": "Israel",
        "ranking": {
          "current_aqi": 17,
          "current_aqi_cn": 6
        }
      },
      {
        "city": "Rotterdam",
        "state": "Zuid-Holland",
        "country": "Netherlands",
        "ranking": {
          "current_aqi": 16,
          "current_aqi_cn": 6
        }
      },
      {
        "city": "Matosinhos",
        "state": "Porto",
        "country": "Portugal",
        "ranking": {
          "current_aqi": 15,
          "current_aqi_cn": 16,
          "last_aqi": 15,
          "last_aqi_cn": 16
        }
      },
      {
        "city": "Vienna",
        "state": "Vienna",
        "country": "Austria",
        "ranking": {
          "current_aqi": 15,
          "current_aqi_cn": 5
        }
      },
      {
        "city": "Sydney",
        "state": "New South Wales",
        "country": "Australia",
        "ranking": {
          "current_aqi": 14,
          "current_aqi_cn": 5
        }
      },
      {
        "city": "Bern",
        "state": "Bern",
        "country": "Switzerland",
        "ranking": {
          "current_aqi": 14,
          "current_aqi_cn": 20,
          "last_aqi": 14,
          "last_aqi_cn": 20
        }
      },
      {
        "city": "Helsinki",
        "state": "Uusimaa",
        "country": "Finland",
        "ranking": {
          "current_aqi": 13,
          "current_aqi_cn": 4
        }
      },
      {
        "city": "Oslo",
        "state": "Oslo",
        "country": "Norway",
        "ranking": {
          "current_aqi": 13,
          "current_aqi_cn": 5
        }
      },
      {
        "city": "Ankara",
        "state": "Ankara",
        "country": "Turkey",
        "ranking": {
          "current_aqi": 12,
          "current_aqi_cn": 13,
          "last_aqi": 18,
          "last_aqi_cn": 20
        }
      },
      {
        "city": "Katowice",
        "state": "Slaskie",
        "country": "Poland",
        "ranking": {
          "current_aqi": 10,
          "current_aqi_cn": 3
        }
      },
      {
        "city": "Beograd",
        "state": "Central Serbia",
        "country": "Serbia",
        "ranking": {
          "current_aqi": 10,
          "current_aqi_cn": 4
        }
      },
      {
        "city": "Zagreb",
        "state": "Croatia",
        "country": "Croatia",
        "ranking": {
          "current_aqi": 9,
          "current_aqi_cn": 19,
          "last_aqi": 7,
          "last_aqi_cn": 17
        }
      },
      {
        "city": "Richards Bay",
        "state": "KwaZulu-Natal",
        "country": "South Africa",
        "ranking": {
          "current_aqi": 3,
          "current_aqi_cn": 3,
          "last_aqi": 5,
          "last_aqi_cn": 5
        }
      }
    ]
  }