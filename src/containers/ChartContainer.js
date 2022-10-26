import React, {useState, useEffect} from 'react';
import ChartList from '../components/ChartList.js';

function ChartContainer() {

    const [songs, setSongs] = useState([]);

    async function fetchSongs() {
        const response = await fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json');
        const data = await response.json();
        setSongs(data);
    }
    
    useEffect(() => {
        fetchSongs();
    }, []);


return (
    <>
        <h1>Music Chart</h1>
        
    </>
);
}
export default ChartContainer;
