import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import api from '../service';

type PokemonContextType = {
  pokemons: Array<any>;
  loading: boolean;
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
};

export const PokemonContext = createContext<PokemonContextType>(
  {} as PokemonContextType,
);

export const PokemonProvider = ({children}: PokemonontextProps) => {
  const [pokemons, setPokemons] = useState<Array<PokemonType>>([]);
  const [loading, setLoading] = useState(false);
  const [offset] = useState(0);

  const limit = 20;

  const getPokemonDetail = useCallback(async (pokemonId: number) => {
    const {data} = await api.get(`pokemon/${pokemonId}`);
    const pokemon: PokemonType = {
      id: data.id,
      name: data.name,
      types: data.types?.map((type: any) => type.type.name),
      image: data.sprites?.other['official-artwork']?.front_default,
      height: data.height,
      weight: data.weight,
    };
    return pokemon;
  }, []);

  const getPokemonList = useCallback(async () => {
    const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
    return response;
  }, [offset]);

  const getPokemons = useCallback(async () => {
    setLoading(true);
    const pokemonList = await getPokemonList();
    const pokemonsResults: Array<PokemonType> = await Promise.all(
      pokemonList?.data?.results?.map((pokemon: PokemonList) => {
        const pokemonId = parseInt(pokemon?.url?.split('/')[6], 10);
        const pokemonResult = getPokemonDetail(pokemonId);
        return pokemonResult;
      }),
    );
    setPokemons(pokemonsResults);
    setLoading(false);
  }, [getPokemonList, getPokemonDetail]);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return (
    <PokemonContext.Provider value={{pokemons, loading}}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
