import React from "react";

class  DropDown extends React.Component{



onSelectChange = (e) => {
    this.props.onChange(e.target.value);
}



render(){
    return(
        <div className="ui segment">
            <select className="ui dropdown" onChange={this.onSelectChange}>
                    <option defaultValue="--">Select a value</option>
                    {this.props.countries.map(data=>(
                        <option key ={data.Name}>{data.Name}</option>
                    ))}
            </select>
        </div>
    )

}

}

export default DropDown;