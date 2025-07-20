import { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { ItemCard } from '@/components/ItemCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const mockItems = [
  {
    id: 1,
    title: 'Single Mattress - Good Condition',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop',
    city: 'Bangalore',
    pickupLocation: 'Koramangala, Near Metro',
    type: 'donate' as const,
    verified: true
  },
  {
    id: 2,
    title: 'Kitchen Utensils Set - 15 pieces',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop',
    city: 'Mumbai',
    pickupLocation: 'Andheri West',
    type: 'rent' as const,
    price: '200',
    verified: true
  },
  {
    id: 3,
    title: 'Ceiling Fan - Working Condition',
    image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=400&h=400&fit=crop',
    city: 'Delhi',
    pickupLocation: 'Lajpat Nagar',
    type: 'sell' as const,
    price: '1500'
  },
  {
    id: 4,
    title: 'Study Table with Chair',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop',
    city: 'Chennai',
    pickupLocation: 'Anna Nagar',
    type: 'rent' as const,
    price: '500',
    verified: true
  },
  {
    id: 5,
    title: 'Laptop - Dell i5 8th Gen',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop',
    city: 'Pune',
    pickupLocation: 'Hinjewadi IT Park',
    type: 'sell' as const,
    price: '25000'
  },
  {
    id: 6,
    title: 'Bedding Set - Pillow & Blanket',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop',
    city: 'Kolkata',
    pickupLocation: 'Salt Lake',
    type: 'donate' as const,
    verified: true
  }
];

const cityTypes = {
  'metro': ['Mumbai', 'Delhi', 'Kolkata'],
  'tech': ['Bangalore', 'Pune'],
  'cultural': ['Chennai'],
  'all': ['Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Pune', 'Kolkata']
};

export default function Browse() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCityType, setSelectedCityType] = useState('all');

  const filteredItems = mockItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'all' || item.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesCityType = selectedCityType === 'all' || cityTypes[selectedCityType as keyof typeof cityTypes]?.includes(item.city);
    return matchesSearch && matchesCity && matchesType && matchesCityType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-3">
              <Select value={selectedCityType} onValueChange={setSelectedCityType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="City Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="metro">Metro Cities</SelectItem>
                  <SelectItem value="tech">Tech Hubs</SelectItem>
                  <SelectItem value="cultural">Cultural Cities</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                  <SelectItem value="kolkata">Kolkata</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="donate">Donate</SelectItem>
                  <SelectItem value="rent">Rent</SelectItem>
                  <SelectItem value="sell">Sell</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Showing {filteredItems.length} items near you</span>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              title={item.title}
              image={item.image}
              city={item.city}
              pickupLocation={item.pickupLocation}
              type={item.type}
              price={item.price}
              verified={item.verified}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No items found matching your criteria.</p>
            <Button variant="outline" className="mt-4" onClick={() => {
              setSearchTerm('');
              setSelectedCity('all');
              setSelectedType('all');
              setSelectedCityType('all');
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}