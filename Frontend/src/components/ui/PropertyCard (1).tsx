import { Property, statusLabel, typeLabel, formatPrice } from '@/types/property';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  property: Property;
}

const statusVariant = (s: string) => {
  if (s === 'for_sale') return 'default';
  if (s === 'for_rent') return 'secondary';
  return 'outline';
};

const PropertyCard = ({ property }: Props) => {
  const imgSrc = property.image_urls?.[0] || '/placeholder.svg';

  return (
    <div className="property-card flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imgSrc}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <Badge className="absolute top-3 left-3" variant={statusVariant(property.status)}>
          {statusLabel(property.status)}
        </Badge>
        <div className="absolute bottom-3 right-3 bg-primary/90 text-primary-foreground px-3 py-1 rounded-md font-bold text-sm">
          {formatPrice(property.price)}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-display text-lg font-semibold leading-tight line-clamp-1">{property.title}</h3>
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" /> {property.location}
        </p>
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          {typeLabel(property.property_type)}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{property.description}</p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2 border-t">
          <span className="flex items-center gap-1"><Bed className="h-3.5 w-3.5" /> {property.bedrooms}</span>
          <span className="flex items-center gap-1"><Bath className="h-3.5 w-3.5" /> {property.bathrooms}</span>
          <span className="flex items-center gap-1"><Maximize className="h-3.5 w-3.5" /> {property.area} sqft</span>
        </div>

        <Link to={`/properties/${property.id}`} className="mt-3">
          <Button variant="outline" className="w-full" size="sm">View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
