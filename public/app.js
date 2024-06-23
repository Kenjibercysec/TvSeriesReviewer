async function searchSeries() {
    const query = document.getElementById('query').value;
    const response = await fetch(`http://localhost:3000/search/${query}`);
    const data = await response.json();
    
    const results = document.getElementById('results');
    results.innerHTML = '';
    
    data.results.forEach(series => {
        const li = document.createElement('li');
        li.textContent = series.name;
        results.appendChild(li);
    });
}
