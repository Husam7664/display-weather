import React from 'react';

import DisplaySeason from './DisplaySeason';
import axios from 'axios';
import DropDown from './Components/DropDown';


class App extends React.Component{
  constructor(props){
    super(props);
  
    //this.getWeatherReport();
            
  }

  state = {
    lat: null,
    log: null,
    name: null,
    season: null
 };

  onCountrySelect = (country) => {
    console.log(country);
    // update state detailed
    //  call weather api
    //  update season
  }

  getWeatherReport = () => {
  console.log(this.state.log, this.state.lat)
    // Api Data Get Method 
     axios.get("https://www.7timer.info/bin/astro.php",
    {
      params : {
        "lon": this.state.log,
        "lat": this.state.lat,
        "ac": "0",
        "unit": "metric",
        "output": "json",
        "tzshift": "0"
      }
    }
    )
    .then(  res => {
      this.setState({season:res.data.dataseries[0].cloudcover})
    });

  }

      
  countries = [ 
    {"Name":"Berlin","Log":13.404954,"Lat":52.520007},
    {"Name":"London","Log":-0.127758,"Lat":51.507351},
    {"Name":"Moscow","Log":37.6173,"Lat":55.755826},
    {"Name":"Mountain-view","Log":-122.083851,"Lat":51.507351},
    {"Name":"Mumbai","Log":72.877656,"Lat":19.075984},
    {"Name":"San-francisco","Log":-122.419416,"Lat":37.774929},
    {"Name":"Shanghai","Log":121.473701,"Lat":31.230416},
    {"Name":"Tokyo","Log":139.691706,"Lat":35.689487},
  ]

   onDropdownChange = async (country) => {
    const {Name, Log, Lat} =  this.countries.filter(obj => (obj.Name === country))[0] ?? {};
    console.log(Name, Log, Lat)
    await this.setState({name:Name ?? null, log:Log ?? null, lat:Lat ?? null});
    this.getWeatherReport();
    
  }
   
  render() {
    
    return (
      <div className=" ui container" style={{margin:"10px"}}>
        <DropDown countries={this.countries} onChange={this.onDropdownChange}/>
        <b>
          {
            (this.state.season?
              <DisplaySeason season={this.state.season}/> : 
            ( this.state.name ? <div>Loading...</div> : <div>Select a country...</div> )
            )
          }
        </b>
      </div>
    )


    // if (this.state.err && !this.state.lat){
    // return <h1>Error: {this.state.err}</h1>;
    // }

    // if (this.state.lat){
    // return <DisplaySeason  lat={this.state.lat}/>
    
    // }
  }

}

export default App;
