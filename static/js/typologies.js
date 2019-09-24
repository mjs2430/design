class Typologies {
  static get pay() {
    return [
      { 
        "name": "zone1",
        "type": "single",
        "units": ["leaderboard"]
      },
      { 
        "name": "zone2",
        "type": "single",
        "units": ["ad"]
      },
      { 
        "name": "zone3",
        "type": "combo",
        "units": ["subscription", "ad"]
      },
      {
        "name": "zone4",
        "type": "single",
        "class": "wide",
        "units": ["banner"]
      },
      {
        "name": "zone5",
        "type": "combo",
        "units": ["podcast", "ad"]
      }
    ]
  }

  static get subscriber() {
    return [
      { 
        "name": "zone1",
        "type": "single",
        "units": ["leaderboard"]
      },
      {
        "name": "zone3",
        "type": "combo",
        "units": ["newsletter", "ad"]
      }
    ]
  }
}
