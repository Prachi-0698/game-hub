import axios  from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '060dd51b71b64d2b9f69f3fffba3ad50'
    }
})