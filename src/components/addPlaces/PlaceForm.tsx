import React, { useState } from 'react';
import InputField from './InputField';
import OptionField from './OptionField';
import LoadingMessage from './LoadingMessage';
import './PlaceForm.css';
import { Place } from './PlaceList';  

export interface FormDataType {
    name: string;
    address: string;
    type: 'restaurant' | 'hotel' | 'park';
    lat: string
    lng: string
}
export interface PlaceFormProps {
    onClose: () => void;
    onPlaceAdded: (newPlace: Place) => void;
}

const PlaceForm: React.FC<PlaceFormProps> = ({ onClose, onPlaceAdded }) => {
    const [formData, setFormData] = useState<FormDataType>({ name: '', address: '', type: 'restaurant', lat: '', lng: '' });
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name.length > 25) {
            alert('Name is more than 25 characters.')
            return;
        }

        setLoading(true);
        const randomLat = (Math.random()*180-90).toFixed(6); 
        const randomLng = (Math.random()*360-180).toFixed(6)

        const newPlace = {
            id: Date.now(),
            name: formData.name,
            address: formData.address,
            type: formData.type,
            creationDate: new Date().toISOString(),
            lat: parseFloat(randomLat), 
            lng: parseFloat(randomLng) 
        };

        onPlaceAdded(newPlace);
        setMessage('Place created!')
        setLoading(false);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField label="Name" value={formData.name} name="name" type="text" onChange={handleChange} />
            <InputField label="Address" value={formData.address} name="address" type="text" onChange={handleChange} />
            <OptionField label="Type" value={formData.type} name="type" options={[
                { value: 'restaurant', label: 'Restaurant' },
                { value: 'hotel', label: 'Hotel' },
                { value: 'park', label: 'Park' }
            ]} onChange={handleChange} />
            <button type="submit" disabled={loading}>Submit</button>
            <LoadingMessage isLoading={loading} message={message} />
        </form>
    );
};

export default PlaceForm;
