import React from "react";

const Weather = (props) => {
  return (
    <div className="info">
      {props.city && (
        <p>
          city : <span>{props.city}</span>
        </p>
      )}
      {props.country && (
        <p>
          country : <span>{props.country}</span>
        </p>
      )}
      {props.temperature && (
        <p>
          temperature : <span>{parseInt(props.temperature - 273.15)}</span>
        </p>
      )}
      {props.humidity && (
        <p>
          humidity : <span>{props.humidity}%</span>
        </p>
      )}
      {props.description && (
        <p>
          description : <span>{props.description}</span>
        </p>
      )}
      {props.windSpeed && (
        <p>
          wind speed : <span>{props.windSpeed}</span>
        </p>
      )}
      {props.date && (
        <p>
          date : <span>{props.date}</span>
        </p>
      )}
      {props.error && (
        <p>
          error : <span>{props.error}</span>
        </p>
      )}
    </div>
  );
};

export default Weather;
