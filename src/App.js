import * as React from 'react';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  const getLocation = () => {
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      alert(`Nearest auto reaching at Latitude: ${latitude}, Longitude: ${longitude}`);
      console.log(position);
      fetch(geoApiUrl).then(res => res.body).then(data => {
        console.log(data);
      })
    };
    const error = () => {
      alert("Unable to get your location. Please refresh the page and try again");
    };
    navigator.geolocation.getCurrentPosition(success, error);
  };

  return (
    <div className="center">
      <Button variant="contained" onClick={getLocation}>Book auto</Button>
    </div>
  );
}

export default App;
