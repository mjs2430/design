class Typologies {
  static get pay() {
    return [
      { 
        "name": "zone1",
        "units": ["leaderboard"]
      },
      { 
        "name": "zone2",
        "units": ["ad"]
      },
      { 
        "name": "zone3",
        "class": "grid combo",
        "units": ["subscription", "ad"]
      },
      {
        "name": "zone4",
        "class": "wide",
        "units": ["banner"]
      },
      {
        "name": "zone5",
        "class": "grid combo",
        "units": ["podcast", "ad"]
      },
      {
        "name": "zone6",
        "units": ["zergnet"]
      }
    ]
  }

  static get subscriber() {
    return [
      { 
        "name": "zone1",
        "units": ["leaderboard"]
      },
      {
        "name": "zone3",
        "class": "grid combo",
        "units": ["newsletter", "ad"]
      }
    ]
  }
}
