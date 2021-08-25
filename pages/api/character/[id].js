export default async (req, res) => {
    const result = await fetch(`https://rickandmortyapi.com/api/character/${req.query.id}`);
    console.log(result);
    const json = await result.json();

    res.status(200).json({
        info: json
    });
}