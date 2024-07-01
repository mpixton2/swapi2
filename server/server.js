import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/planets', async (req, res) => {

    const mockData = {
        name:"BogusPlanet",
        type:"Grassland"
    }

    res.json(mockData)

})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});