// TimePicker.js
import React from 'react';

function TimePicker() {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval); 
    }, []);

    return (
        <div>
            <h1>Current Time:</h1>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default TimePicker;
