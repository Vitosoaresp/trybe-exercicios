import React from "react";

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image} } = this.props;

    return (
        <div className='pokemon-card'>
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>{`Average weigth ${averageWeight.value} ${averageWeight.measurementUnit }`}</p>
          </div>
          <img source={image} alt={name}/>
        </div>
    )
  }
}

export default Pokemon; 