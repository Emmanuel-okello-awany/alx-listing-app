import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="border rounded-md shadow p-4">
    <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-md" />
    <h3 className="mt-2 font-bold text-lg">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
