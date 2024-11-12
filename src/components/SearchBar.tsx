import React, { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

const SearchBar: React.FC<{ onSearch: (term: string) => void }> = ({ onSearch }) => {
    const [term, setTerm] = useState('');
    const debouncedTerm = useDebounce(term);

    React.useEffect(() => {
        onSearch(debouncedTerm);
    }, [debouncedTerm, onSearch]);

    return (
        <div className="search-bar">
            <input type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search tasks..." 
            />
        </div>
    )
};

export default SearchBar;
