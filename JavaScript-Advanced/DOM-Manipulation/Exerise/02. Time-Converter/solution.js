function attachEventsListeners() {
    let dayValue = 0;
    let hourValue = 0;
    let minutesValue = 0;
    let secondsValue = 0;
    const days = document.getElementById('daysBtn');
    days.addEventListener('click', onClick);
    
    const hours = document.getElementById('hoursBtn');
    hours.addEventListener('click', onClick);

    const minutes = document.getElementById('minutesBtn');
    minutes.addEventListener('click', onClick);

    const seconds = document.getElementById('secondsBtn');
    seconds.addEventListener('click', onClick);

    function onClick(event){
        if (event.target.id == 'daysBtn') {
            dayValue = Number(document.getElementById('days').value)
            hourValue = dayValue * 24;
            minutesValue = dayValue * 1440;
            secondsValue = dayValue * 86400;
        }else if (event.target.id   == 'hoursBtn') {
            hourValue = Number(document.getElementById('hours').value)
            dayValue = hourValue / 24;
            minutesValue = dayValue * 1440;
            secondsValue = dayValue * 86400;
            
        }else if (event.target.id == 'minutesBtn') {
            minutesValue = Number(document.getElementById('minutes').value)
            dayValue = minutesValue / 1440;
            hourValue = dayValue * 24;
            minutesValue = dayValue * 1440;
            secondsValue = dayValue * 86400;
            
        }else if (event.target.id == 'secondsBtn') {
            secondsValue = Number(document.getElementById('seconds').value)
            dayValue = secondsValue / 86400;
            hourValue = dayValue * 24;
            minutesValue = dayValue * 1440;
        }
        document.getElementById('days').value = dayValue;
        document.getElementById('hours').value = hourValue;
        document.getElementById('minutes').value = minutesValue;
        document.getElementById('seconds').value = secondsValue;
    }
}