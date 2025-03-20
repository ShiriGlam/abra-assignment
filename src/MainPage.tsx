import React, { useState } from 'react';
import PlaceForm from './components/addPlaces/PlaceForm';
import PlaceList from './components/addPlaces/PlaceList';
import MapComponent from './components/Map/MapComp';
import './MainPage.css'
import { Place } from './components/addPlaces/PlaceList';

function MainPage() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [places, setPlaces] = useState<Place[]>([
        { id: 1, name: "example 1", type: "restaurant", creationDate: "2025-03-20", lat: -3.745, lng: -38.523 },
        { id: 2, name: "example 2", type: "hotel", creationDate: "2025-05-01", lat: -3.750, lng: -38.520 }
    ]);
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

    const handlePlaceSelect = (place: Place) => {
        setSelectedPlace(place);
    };

    const handleChangeForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    const handleClose = () => {
        setIsFormOpen(false);
    };

    return (
        <div className="App">
            <button onClick={handleChangeForm}>{isFormOpen ? 'Close Form' : 'Open Form'} 
            </button>
            {isFormOpen && (<PlaceForm
                    onPlaceAdded={(newPlace: Place) => {
                        setPlaces([...places, newPlace]);
                        handleClose();
                    }}
                    onClose={handleClose}
                />
            )}<h3>Places:</h3><PlaceList places={places} onPlaceSelected={handlePlaceSelect} />
            <div><MapComponent selectedPlace={selectedPlace} /></div>
            

        </div>
    );
}

export default MainPage;
