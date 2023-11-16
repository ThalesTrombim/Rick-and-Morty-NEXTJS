export default async (req, res) => {
    const result = await fetch(`https://rickandmortyapi.com/api/episode/${req.query.id}`);
    const json = await result.json();

    res.status(200).json({
        info: json
    });
}