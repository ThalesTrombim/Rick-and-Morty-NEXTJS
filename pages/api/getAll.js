export default async (req, res) => {
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const json = await result.json();

    res.status(200).json({
        list: json.results
    });
}