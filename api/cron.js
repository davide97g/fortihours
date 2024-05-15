export default async function handler(_, res) {
  const randomPokemonId = Math.floor(Math.random() * 151) + 1;
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
  ).then((res) => res.json());
  res.status(200).send(`Pokemon of the day: ${pokemon.name}`);
}
