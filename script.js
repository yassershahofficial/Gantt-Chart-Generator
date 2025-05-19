let dates = [];
const table = document.getElementById("table");

function allDateRange(startdate, enddate){
    const excludeWeekday = document.getElementById("weekday").checked;
    const excludeWeekend = document.getElementById("weekend").checked;

    const result = [];
    let current = new Date(startdate);
    const end = new Date(enddate);

    while(current <= end){
        const currentday = current.getDay();
        const excludeLogic = (excludeWeekday && currentday >= 1 && currentday <= 5) || (excludeWeekend && (currentday < 1 || currentday > 5));

        if(excludeLogic){
            //exclude weekend or weekday or both depending on checkbox
        }
        else{
            result.push(new Date(current));
        }  
        current.setDate(current.getDate() + 1);
    }
    
    return result;
}

function formatDate(date){
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct","Nov","Dec"];

    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${day}  ${month}`
}

document.getElementById("generateTable").addEventListener('click', () => {
    const startday = document.getElementById("startday");
    const endday = document.getElementById("endday");
    

    if(!startday.value || !endday.value){
        alert("Please fill in both inputs")
        return
    }

    let startdate = new Date(startday.value);
    const enddate = new Date(endday.value);

    if(startdate >= enddate){
        alert("Please make sure end date is after start date");
        return
    }

    dates = allDateRange(startdate, enddate);

    table.textContent = '';
    const headerRows = document.createElement("tr");
    const firstheader = document.createElement("th");

    firstheader.textContent = "Task/Date";
    headerRows.appendChild(firstheader);

    dates.forEach(date => {
        // console.log(date);
        const header = document.createElement("th");
        header.textContent = formatDate(date);
        headerRows.appendChild(header)
    })

    table.appendChild(headerRows);
})

document.getElementById("addActivity").addEventListener('click', () =>{
    const name = document.getElementById("activity_name");
    const startday = document.getElementById("activity_startdate");
    const duration = document.getElementById("activity_duration");

    const newrow = document.createElement("tr");
    const activity = document.createElement("td");

    activity.textContent = name.value;
    newrow.appendChild(activity);

    dates.forEach(() => {
        const emptycells = document.createElement("td");
        newrow.appendChild(emptycells);
    })

    table.appendChild(newrow);
})