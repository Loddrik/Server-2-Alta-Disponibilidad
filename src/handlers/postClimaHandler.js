import axios from 'axios';

export const postClimaHandler = async (req, res) => {
    const url = 'https://api.gael.cloud/general/public/clima/SCQN';
    const resa = await axios.get(url);

    res.status(200).json(resa.data);
};