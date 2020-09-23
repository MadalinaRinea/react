import React, { useEffect, useState } from 'react';

export default function Weather() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasov,Ro&appid=c7da641777760054e5ca6164eb47580a')
            .then(res => res.json())
            .then(data => setGames(data));
    }, []);

    
}