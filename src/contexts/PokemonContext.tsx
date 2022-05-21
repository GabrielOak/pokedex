import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useCallback,
} from 'react';
import api from '../service';

type PokemonContextType = {
  pokemons: Array<any>;
  loading: boolean;
  getPokemons: () => void;
};

type PokemonontextProps = {
  children: ReactNode;
};

type PokemonList = {
  name: string;
  url: string;
};

export type PokemonType = {
  id: string;
  name: string;
  types: Array<string>;
  image: string;
  height: number;
  weight: number;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefence: number;
  speed: number;
};

export const PokemonContext = createContext<PokemonContextType>(
  {} as PokemonContextType,
);

export const PokemonProvider = ({children}: PokemonontextProps) => {
  const [pokemons, setPokemons] = useState<Array<PokemonType>>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const limit = 20;

  const getPokemonDetail = useCallback(async (pokemonId: number) => {
    const {data} = await api.get(`pokemon/${pokemonId}`);
    const pokemon: PokemonType = {
      id: data.id,
      name: data.name,
      types: data.types?.map((type: any) => type.type.name),
      image: data.sprites?.other['official-artwork']?.front_default,
      height: data.height / 10,
      weight: data.weight / 10,
      hp: data.stats[0]?.base_stat,
      attack: data.stats[1]?.base_stat,
      defense: data.stats[2]?.base_stat,
      specialAttack: data.stats[3]?.base_stat,
      specialDefence: data.stats[4]?.base_stat,
      speed: data.stats[5]?.base_stat,
    };
    return pokemon;
  }, []);

  const getPokemonList = async () => {
    const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
    return response;
  };

  const getPokemons = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const pokemonList = await getPokemonList();
    const pokemonsResults: Array<PokemonType> = await Promise.all(
      pokemonList?.data?.results?.map((pokemon: PokemonList) => {
        const pokemonId = parseInt(pokemon?.url?.split('/')[6], 10);
        const pokemonResult = getPokemonDetail(pokemonId);
        return pokemonResult;
      }),
    );
    setPokemons([...pokemons, ...pokemonsResults]);
    setOffset(offset + limit);
    setLoading(false);
  };

  return (
    <PokemonContext.Provider value={{pokemons, loading, getPokemons}}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
