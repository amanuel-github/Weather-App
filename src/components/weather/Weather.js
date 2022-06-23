import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getWeatherData from "../../api";
import { setData, selectData } from "../../store/weatherSlice";
import styles from "./Weather.module.css";

export function Weather() {
  const weather = useSelector(selectData);
  console.log(weather);
  const dispatch = useDispatch();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const getData = async (coord) => {
    const res = await getWeatherData(coord);
    dispatch(setData(res.data));
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        getData({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <div>
      <div className={styles.row}>
        <label>Lattitude</label>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <label>Longitude</label>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => getData({ lat: lat, lon: lon })}
        >
          submit
        </button>
      </div>

      {weather ? (
        <div>
          <div>
            <label>name: {weather.name}</label>
          </div>

          <div>
            <label>clouds: {weather.clouds.all}</label>
          </div>

          <div>
            <label>Feels like: {weather.main.feels_like}</label>
          </div>
          <div>
            <label>Humidity: {weather.main.humidity}</label>
          </div>
          <div>
            <label>Pressure: {weather.main.pressure}</label>
          </div>
          <div>
            <label>Temperature: {weather.main.temp}</label>
          </div>
          <div>
            <label>Maximum Temperature: {weather.main.temp_max}</label>
          </div>
          <div>
            <label>Minimum Temperature: {weather.main.temp_min}</label>
          </div>
          <div>
            <label>country: {weather.sys.country}</label>
          </div>
          <div>
            <label>Sunrise: {weather.sys.sunrise}</label>
          </div>
          <div>
            <label>Sunset: {weather.sys.sunset}</label>
          </div>
          <br />
          <div style={{ backgroundColor: "#f0f0f0" }}>
            <label style={{ fontWeight: "bold" }}>weathers: </label>
            {weather.weather.map((w) => (
              <div>
                <label> Main: {w.main}</label>
                <br />
                <label> Descreption: {w.description}</label>
              </div>
            ))}
            <br />
          </div>
          <div>
            <label>Wind ---- </label>
            <label> degree: {weather.wind.deg}</label>
            <label> speed: {weather.wind.speed}</label>
          </div>
        </div>
      ) : null}
    </div>
  );
}
