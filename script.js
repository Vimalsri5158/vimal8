
async function bar() {
    let res = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects');
    let data = await res.json();
    await renderUser(data.objectIDs);
}

async function renderUser(data) {
    let html = '';

    data.forEach(objectID => {
        let htmlSegment = `
            <div>
                <h2>${objectID}</h2>
            </div>`;
        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

bar();

