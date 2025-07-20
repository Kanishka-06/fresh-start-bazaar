import { MapPin, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ItemCardProps {
  title: string;
  image: string;
  city: string;
  pickupLocation: string;
  type: 'donate' | 'rent' | 'sell';
  price?: string;
  verified?: boolean;
}

export function ItemCard({ 
  title, 
  image, 
  city, 
  pickupLocation, 
  type, 
  price, 
  verified = false 
}: ItemCardProps) {
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'donate': return 'secondary';
      case 'rent': return 'default';
      case 'sell': return 'destructive';
      default: return 'default';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'donate': return 'Free';
      case 'rent': return 'Rent';
      case 'sell': return 'Sell';
      default: return type;
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md hover:scale-105 bg-card border-border/50">
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant={getBadgeVariant(type)} className="text-xs">
            {getTypeLabel(type)}
          </Badge>
          {verified && (
            <Badge variant="outline" className="text-xs bg-background/90">
              <Shield className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          )}
        </div>
        {price && type !== 'donate' && (
          <div className="absolute bottom-3 right-3 bg-background/90 px-2 py-1 rounded text-sm font-medium">
            ₹{price}
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-medium text-card-foreground mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
          <MapPin className="h-3 w-3" />
          <span>{city}</span>
        </div>
        <p className="text-xs text-muted-foreground">{pickupLocation}</p>
      </CardContent>
    </Card>
  );
}