import { PropertyFilters, PROPERTY_TYPES, PROPERTY_STATUSES } from '@/types/property';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  filters: PropertyFilters;
  onChange: (f: PropertyFilters) => void;
}

const PropertyFiltersBar = ({ filters, onChange }: Props) => {
  const update = (partial: Partial<PropertyFilters>) => onChange({ ...filters, ...partial });

  const hasFilters = filters.search || filters.property_type || filters.status ||
    filters.min_price !== '' || filters.max_price !== '' || filters.bedrooms !== '' || filters.sort_by;

  const reset = () => onChange({
    search: '', property_type: '', status: '', min_price: '', max_price: '', bedrooms: '', sort_by: '',
  });

  return (
    <div className="bg-card rounded-xl p-4 md:p-6 space-y-4 border">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by title or location..."
          value={filters.search}
          onChange={(e) => update({ search: e.target.value })}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* Property Type */}
        <Select value={filters.property_type || 'all'} onValueChange={(v) => update({ property_type: v === 'all' ? '' : v as any })}>
          <SelectTrigger><SelectValue placeholder="Type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {PROPERTY_TYPES.map((t) => (
              <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Status */}
        <Select value={filters.status || 'all'} onValueChange={(v) => update({ status: v === 'all' ? '' : v as any })}>
          <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            {PROPERTY_STATUSES.map((s) => (
              <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Min Price */}
        <Input
          type="number"
          placeholder="Min Price"
          value={filters.min_price}
          onChange={(e) => update({ min_price: e.target.value ? Number(e.target.value) : '' })}
        />

        {/* Max Price */}
        <Input
          type="number"
          placeholder="Max Price"
          value={filters.max_price}
          onChange={(e) => update({ max_price: e.target.value ? Number(e.target.value) : '' })}
        />

        {/* Bedrooms */}
        <Select value={filters.bedrooms !== '' ? String(filters.bedrooms) : 'any'} onValueChange={(v) => update({ bedrooms: v === 'any' ? '' : Number(v) })}>
          <SelectTrigger><SelectValue placeholder="Bedrooms" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Beds</SelectItem>
            {[1, 2, 3, 4, 5].map((n) => (
              <SelectItem key={n} value={String(n)}>{n}+ Beds</SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select value={filters.sort_by || 'newest'} onValueChange={(v) => update({ sort_by: v === 'newest' ? '' : v as any })}>
          <SelectTrigger><SelectValue placeholder="Sort" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price_asc">Price: Low to High</SelectItem>
            <SelectItem value="price_desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {hasFilters && (
        <Button variant="ghost" size="sm" onClick={reset} className="gap-1 text-muted-foreground">
          <X className="h-3.5 w-3.5" /> Clear Filters
        </Button>
      )}
    </div>
  );
};

export default PropertyFiltersBar;
