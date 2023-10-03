"use client"

import { scrapeAndStoreProduct } from '@/lib/actions';
import { FormEvent, useState, useEffect } from 'react'

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if(
      hostname.includes('amazon.com') || 
      hostname.includes ('amazon.') || 
      hostname.endsWith('amazon')
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
}

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchResult('');
    }, 5000);

    return () => clearTimeout(timer);
  }, [searchResult]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if(!isValidLink) return alert('Please provide a valid Amazon link')

    try {
      setIsLoading(true);

      const product = await scrapeAndStoreProduct(searchPrompt);
      setSearchResult('Product added to trending section!');
      setSearchPrompt('');
    } catch (error) {
      console.log(error);
      setSearchResult('Error adding the product. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <form
        className="flex flex-wrap gap-4 mt-12"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          placeholder="Enter product link"
          className="searchbar-input"
        />

        <button
          type="submit"
          className="searchbar-btn"
          disabled={searchPrompt === '' || isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {searchResult && (
        <div className="flex flex-col justify-center bg-white rounded-full mt-3 max-xl:flex-col gap-16 w-10">
          <p className="small-text rounded-full p-1">{searchResult}</p>
        </div>
      )}
    </div>
  )
}

export default Searchbar