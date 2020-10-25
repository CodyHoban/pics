import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID r8gJ00PtgdJiP3HTlEDUwlv061G4sJbusSGyaH-gUDE' 
    }
});
