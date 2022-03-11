import Clear from "./Components/Clear";
import PartlyCloudy from "./Components/PartlyCloudy";
import Cloudy from "./Components/Cloudy";
import VeryCloudy from "./Components/VeryCloudy";

 function DisplaySeason(props){
    //  console.log(props.lat)
      console.log(props.season)
    if ( props.season <= 2){ 
        return <Clear/>;

    }else if (props.season <= 5){
        return <PartlyCloudy/>;
        
    }else if (props.season <= 7){
        return<Cloudy/>;

    }else if (props.season <= 9){
        return<VeryCloudy/>;
    }
}

export default DisplaySeason;