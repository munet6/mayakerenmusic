document.addEventListener('DOMContentLoaded', main);

async function main() {
    var allGigs = await fetchData();
    var upcomingGigs = getGigs(allGigs, true);
    var pastGigs = getGigs(allGigs, false);
    makeGigContainerDiv(upcomingGigs, "upcoming-gigs-container");
    makeGigContainerDiv(pastGigs, "past-gigs-container");
}

async function fetchData() {
    const response = await fetch('https://mk-gigdata-serverless.vercel.app/api/getGigs');
    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    return data.data;
}

function makeGigContainerDiv(gigs, containerId) {
    gigs.forEach(function (gig) {
        var gigDiv = makeGigDiv(gig);
        document.getElementById(containerId).appendChild(gigDiv);
    });
}

function makeGigDiv(gig) {
    var outerDiv = document.createElement("div");
    outerDiv.setAttribute("class", "row");

    var innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "col pb-2");

    var dateStrong = document.createElement("strong");
    dateStrong.textContent = dateDisplayLong(parseDate(gig.Date));

    var locationPara = document.createElement("p");
    locationPara.textContent = " - " + gig.Location + " - ";
    locationPara.style.display = "inline";

    var descriptionElement;
    if (gig.Link != null) {
        descriptionElement = document.createElement("a");
        descriptionElement.style.color = "rgb(122, 64, 89)";
        descriptionElement.href = gig.Link;
        descriptionElement.target = "_blank";
    } else {
        descriptionElement = document.createElement("p");
    }
    descriptionElement.textContent = gig.Description;
    descriptionElement.style.display = "inline";

    innerDiv.appendChild(dateStrong);
    innerDiv.appendChild(locationPara);
    innerDiv.appendChild(descriptionElement);
    outerDiv.appendChild(innerDiv);
    return outerDiv;
}

// returns upcoming or past gigs
function getGigs(allGigs, trueForUpcoming) {
    var currentDate = new Date().setHours(0, 0, 0, 0);

    var filteredGigs = allGigs.filter(gig => {
        var gigDate = parseDate(gig.Date);
        if (trueForUpcoming) return gigDate >= currentDate;
        else return gigDate < currentDate;
    });

    // sort upcoming gigs ascending by date
    // but past gigs descending by date
    if (trueForUpcoming) {
        return filteredGigs.sort(
            (a, b) => parseDate(a.Date) - parseDate(b.Date));
    } else {
        return filteredGigs.sort(
            (a, b) => parseDate(b.Date) - parseDate(a.Date));
    }
}

function dateDisplayLong(date) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function parseDate(dateString) {
    // remove anything that isn't an integer or comma from that string
    dateArray = dateString.replace(/[^0-9,]/g, '').split(',');
    return new Date(dateArray[0], dateArray[1], dateArray[2]);
}