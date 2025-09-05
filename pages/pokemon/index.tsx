import Head from 'next/head';
import { useState, useRef, ChangeEvent } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import { Input } from "@heroui/react";
import { MdOutlineSearch } from "react-icons/md";
import AppLayout from '@components/AppLayout';
import PokeballSpinner from '@components/PokeballSpinner/PokeballSpinner';

type PokemonCard = {
  id: string;
  name: string;
  images: {
    small: string;
  };
};

type SearchPokemonCardsData = {
  searchPokemonCards: PokemonCard[];
};

type SearchPokemonCardsVars = {
  q: string;
};

const SEARCH_POKEMON_CARDS = gql`
  query SearchPokemonCards($q: String) {
    searchPokemonCards(q: $q) {
      id
      name
      images {
        small
      }
    }
  }
`;

const Pokemon: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [searchPokemonCards, { data, loading, error }] = useLazyQuery<SearchPokemonCardsData, SearchPokemonCardsVars>(SEARCH_POKEMON_CARDS);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      searchPokemonCards({ variables: { q: `name:${value}` } });
    }, 2000); // 2 seconds debounce
  };

  return (
    <>
      <Head>
        <title>Pokémon</title>
      </Head>

      <AppLayout>
        <div>
          <Input
            classNames={{
              base: "max-w-full h-10 p-5",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search Pokémon..."
            size="sm"
            startContent={<MdOutlineSearch size={18} />}
            type="search"
            value={search}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-4 text-center">
          {loading && <PokeballSpinner />}
          {error && <div>Error: {error.message}</div>}
          {data && data.searchPokemonCards && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.searchPokemonCards.map(card => (
                <div key={card.id} className="p-2 border rounded">
                  <img src={card.images?.small} alt={card.name} className="w-full" />
                  <div className="mt-2 text-center">{card.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </AppLayout>
    </>
  );
};

export default Pokemon;