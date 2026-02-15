import { supabase } from "@/lib/client";

export type Property = {
  id: string;
  owner_id: string;
  title: string;
  description: string | null;
  property_type: 'house' | 'apartment' | 'condo' | 'townhouse' | 'land' | 'commercial';
  listing_status: 'active' | 'pending' | 'sold' | 'rented';
  price: number;
  bedrooms: number;
  bathrooms: number;
  area_sqft: number | null;
  address: string;
  city: string;
  state: string;
  zip_code: string | null;
  latitude: number | null;
  longitude: number | null;
  year_built: number | null;
  features: string[];
  images: string[];
  created_at: string;
  updated_at: string;
  profiles?: { full_name: string | null; avatar_url: string | null; phone: string | null } | null;
};

export type Profile = {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  phone: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
};

export async function fetchProperties(filters?: {
  city?: string;
  property_type?: string;
  min_price?: number;
  max_price?: number;
  bedrooms?: number;
}) {
  let query = (supabase as any)
    .from('properties')
    .select('*, profiles(full_name, avatar_url, phone)')
    .eq('listing_status', 'active')
    .order('created_at', { ascending: false });

  if (filters?.city) query = query.ilike('city', `%${filters.city}%`);
  if (filters?.property_type) query = query.eq('property_type', filters.property_type);
  if (filters?.min_price) query = query.gte('price', filters.min_price);
  if (filters?.max_price) query = query.lte('price', filters.max_price);
  if (filters?.bedrooms) query = query.gte('bedrooms', filters.bedrooms);

  const { data, error } = await query;
  if (error) throw error;
  return data as Property[];
}

export async function fetchPropertyById(id: string) {
  const { data, error } = await (supabase as any)
    .from('properties')
    .select('*, profiles(full_name, avatar_url, phone, bio)')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data as Property;
}

export async function toggleFavorite(propertyId: string, userId: string) {
  const { data: existing } = await (supabase as any)
    .from('favorites')
    .select('id')
    .eq('user_id', userId)
    .eq('property_id', propertyId)
    .maybeSingle();

  if (existing) {
    await (supabase as any).from('favorites').delete().eq('id', existing.id);
    return false;
  } else {
    await (supabase as any).from('favorites').insert({ user_id: userId, property_id: propertyId });
    return true;
  }
}

export async function fetchFavorites(userId: string) {
  const { data, error } = await (supabase as any)
    .from('favorites')
    .select('property_id')
    .eq('user_id', userId);
  if (error) throw error;
  return (data as any[]).map(f => f.property_id as string);
}

export async function sendInquiry(input: {
  property_id: string;
  sender_id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const { error } = await (supabase as any).from('inquiries').insert(input);
  if (error) throw error;
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}
