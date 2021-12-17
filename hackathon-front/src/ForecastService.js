import axios from 'axios';

const url = 'http://localhost:8000/api/forecast/';

class ForecastService {
    static getForecast() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);

                const data = res.data.forecast;

                resolve(
                    data.map(forecast => forecast.price)
                );
            } catch(err) {
                reject(err);
            }
        })
    }
}

export default ForecastService;