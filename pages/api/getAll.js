export default async (req, res) => {
    function RandomPage(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
    var num = RandomPage(0, 35);
    num = 1;

    const result = await fetch(`https://rickandmortyapi.com/api/character/?page=${num}`);
    const json = await result.json();

    res.status(200).json({
        list: json.results
    });
}