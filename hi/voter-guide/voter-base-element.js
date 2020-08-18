/**
 * Voter Guide base functionality
 * 2020 Voter Guide
 */

class VoterBaseElement extends HTMLElement {
  constructor() {
    super();
    this.endpoint = "https://qa1-voter-guide.misitemgr.com/api/";
    // this.endpoint = "https://elections-api.mcclatchy.com/api/";
    this.electionDate = "2020-11-03";
  }

  /**
   * API connections
   */

  // Makes a request to the positions endpoint
  async fetchPositions(address, date = this.electionDate) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{voterguidePositions( parameters: "{'election_date': '${date}', 'address': '${address}', 'include_candidates': 1}"){data}}`
      })
    }

    return await fetch(this.endpoint, options).then(response => response.json());
  }

  // Makes a request to the candidate endpoint
  async fetchCandidate(cid) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{ voterguideCandidate( cid:${cid}, parameters: \"{}\"){ data }}`
      })
    }

    return await fetch(this.endpoint, options).then(response => response.json());
  }

  // Makes a request to the ballot measures endpoint
  async fetchMeasures(address, date = this.electionDate) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{ voterguideMeasures( parameters: "{'election_date':'${date}','address':'${address}'}"){ data }}`
      })
    }

    return await fetch(this.endpoint, options).then(response => response.json());
  }

  async fetchSurvey(sid) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{ survey( sid: ${sid} ){ surveyData }}`
      })
    }

    return await fetch(this.endpoint, options).then(response => response.json());
  }

  /**
   * Data normalization functions
   */

  // Standardizes candidate name
  normalizeName(c) {
    let fn = `${c.first_name} ${c.middle_name || ""} ${c.last_name} ${c.suffix || ""}`;
    return fn.trim().replace(/\s+/, " ");
  }

  // Shadow DOM uses the current version of SDS on the page
  get sds() {
    let mi = document.head.querySelector("link[href*=mi-styles]");
    let sds = document.head.querySelector("link[href*=sds]");
    return mi ? mi.href : sds.href;
  }
}

// ES6 default export
export default VoterBaseElement;
