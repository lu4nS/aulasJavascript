// Função para realizar três requisições em paralelo e filtrar as informações importantes
async function fetchWeatherData() {
    aula16Function1Pre = document.getElementById('aula16Function1Pre')
    if (!aula16Function1Pre.textContent == '') {
        aula16Function1Pre.textContent = ''
    } else {

        const urls = [
            'http://www.7timer.info/bin/api.pl?lon=-46.6333&lat=-23.5505&product=civil&output=json', // São Paulo
            'http://www.7timer.info/bin/api.pl?lon=-74.006&lat=40.7128&product=civil&output=json',  // Nova York
            'http://www.7timer.info/bin/api.pl?lon=139.6917&lat=35.6895&product=civil&output=json'   // Tóquio
        ];

        try {
            // Fazendo as requisições de forma paralela
            const responses = await Promise.all(urls.map(url => fetch(url)));

            // Convertendo as respostas em JSON
            const data = await Promise.all(responses.map(response => response.json()));

            // Filtrando as informações importantes
            const filteredData = data.map((locationData, index) => {
                const city = index === 0 ? 'São Paulo' : index === 1 ? 'Nova York' : 'Tóquio';
                const firstEntry = locationData.dataseries[0];

                return {
                    cidade: city,
                    temperatura: `${firstEntry.temp2m} °C`,
                    umidade: `${firstEntry.rh2m} %`,
                    tempo: firstEntry.weather
                };
            });

            // Exibindo os resultados filtrados no console
            console.log('Previsões filtradas:', filteredData);

            // Exibindo no elemento HTML
            aula16Function1Pre.textContent = JSON.stringify(filteredData, null, 2);

        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

}

document.getElementById('fetchWeather').addEventListener('click', fetchWeatherData);
