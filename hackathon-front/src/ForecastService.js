import axios from 'axios';

const url = 'http://localhost:8000/api/forecast';

class ForecastService {
    static getForecast() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);

                const data = res.forecast;

                console.log(data);

                resolve(
                    data.map(forecast => ({
                        hours: new Date(data.timestamp * 1000),
                        prices: data.price
                    }))
                );
            } catch(err) {
                reject(err);
            }
        })
    }
}

export default ForecastService;