export const postMonedasHandler = (client, req, res) => {
    client.Query(req.body, (err, response) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).json(response);
        }
    });
}