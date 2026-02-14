import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '../ui/badge';
import { Heart, Bed, Bath, Maximize, MapPin } from 'lucide-react';
import { type Property, formatPrice, toggleFavorite } from '../../lib/supabase-helpers';
import { useAuth } from '@/hooks/useAuth';
import { useState, type MouseEvent } from 'react';
import { toast } from 'sonner';

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80';

export default function PropertyCard({ property, isFav = false }: { property: Property; isFav?: boolean }) {
  const { user } = useAuth();
  const [fav, setFav] = useState(isFav);

  const handleFav = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!user) { toast.error('Sign in to save properties'); return; }
    const result = await toggleFavorite(property.id, user.id);
    setFav(result);
    toast.success(result ? 'Saved to favorites' : 'Removed from favorites');
  };

  const imgUrl = property.images?.[0] || PLACEHOLDER_IMG;

  return (
    <Link to={`/property/${property.id}`}>
      <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imgUrl}
            alt={property.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <button
            onClick={handleFav}
            className="absolute top-3 right-3 rounded-full bg-card/80 p-2 backdrop-blur hover:bg-card transition-colors"
          >
            <Heart className={`h-4 w-4 ${fav ? 'fill-destructive text-destructive' : 'text-foreground'}`} />
          </button>
          <Badge className="absolute bottom-3 left-3 bg-primary text-primary-foreground font-semibold">
            {formatPrice(property.price)}
          </Badge>
        </div>
        <CardContent className="p-4 space-y-2">
          <h3 className="font-semibold text-foreground line-clamp-1 font-sans">{property.title}</h3>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {property.city}, {property.state}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-1">
            <span className="flex items-center gap-1"><Bed className="h-3.5 w-3.5" /> {property.bedrooms} bd</span>
            <span className="flex items-center gap-1"><Bath className="h-3.5 w-3.5" /> {property.bathrooms} ba</span>
            {property.area_sqft && (
              <span className="flex items-center gap-1"><Maximize className="h-3.5 w-3.5" /> {property.area_sqft.toLocaleString()} sqft</span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
