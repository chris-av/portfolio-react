import React, { useEffect } from 'react';
import axios from 'axios';

const spotifyAuthEndpoint = 'https://accounts.spotify.com/api/token';
const spotifyTrackEndpoint = 'https://accounts.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V';
const clientID = '1766a4c77ddd43ada03f8c3c2f669ccd';
const clientSecret = 'ca1b01b7efd04c5a9eca4d74ce2a41e1';
const clientConcatenated = `${clientID}:${clientSecret}`;


const MyMusic = () => {
  
  const getAccessToken = async () => {
    try {
      const data = await axios.post(spotifyAuthEndpoint, 'grant_type=client_credentials', {
        headers: {
          Authorization: `Basic ${Buffer.from(clientConcatenated).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      return data.data.access_token;
    } catch (err) {
      console.log(err);
    }

  }

  const getMyTopTracks = async (accessToken) => {
    try {
      const data = await axios.get(spotifyTrackEndpoint, {
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    async function fetchAPI() {
      let access_token = await getAccessToken();
      const response = await getMyTopTracks(access_token);
      // console.log(access_token);
      console.log(response);
    }
    fetchAPI();
  }, []);
  
  return (
    <div>About my music</div>
  );
}

export default MyMusic;
