import React, { useState } from 'react';
import OptionField from './OptionField'

export interface Place {
  id: number;
  name: string;
  type: 'restaurant' | 'hotel' | 'park'
  creationDate: string;
  lat: number;
  lng: number
}

export interface PlaceListProps {
  places: Place[];
  onPlaceSelected: (place: Place) => void;
}

const PlaceList: React.FC<PlaceListProps> = ({ places, onPlaceSelected }) => {
  const [filterType, setFilterType] = useState<string>('all');

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value);
  };

  const filteredPlaces = filterType === 'all' 
    ? places 
    : places.filter(place => place.type === filterType);

  return (
    <div className="place-list">
      <OptionField 
        label="Filter by Type" 
        value={filterType} 
        name="filterType" 
        options={[
          { value: 'all', label: 'All' },
          { value: 'restaurant', label: 'Restaurant' },
          { value: 'hotel', label: 'Hotel' },
          { value: 'park', label: 'Park' }
        ]} 
        onChange={handleFilterChange} 
      />

      <ul>
        {filteredPlaces.map(place => (
          <li key={place.id} onClick={() => onPlaceSelected(place)}>
            {place.name} - Click on me! {place.type}- created on {new Date(place.creationDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaceList;
