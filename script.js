function allDateRange(startdate, enddate){
    const dates = [];
    let current = new Date(startdate);
    const end = new Date(enddate);

    while(current <= end){
        dates.push(new Date(current));
        current.setDate(current.getDate() + 1);
        console.log(current)
    }
    
    return dates;
}

function formatDate(date){
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct","Nov","Dec"];

    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${day}  ${month}`
}

function generateTable(){
    const startday = document.getElementById("startday");
    const endday = document.getElementById("endday");
    const table = document.getElementById("table");
    const activities = ["Buy Stuff", "Research", "Build", "Report", "Presentation"];

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
    // console.log("Start Date : ", startdate);
    // console.log("End Date", enddate);

    const dates = allDateRange(startdate, enddate);

    // console.log(dates);

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

    activities.forEach(activity => {
        const rows = document.createElement("tr");
        const act = document.createElement("td");
        
        act.textContent = activity;
        rows.appendChild(act);

        dates.forEach(() => {
            const cells = document.createElement("td");
            rows.append(cells);
        })
        table.appendChild(rows);
    })
}