import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/superbase/client';
import { useAuth } from '@/hooks/useAuth';
import { Navigate, Link } from 'react-router-dom';
import PropertyCard from '../components/ui/PropertyCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Skeleton } from '../components/ui/skeleton';
import { Plus, Building2, MessageSquare, Trash2 } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import type { Property } from '@/lib/supabase-helpers';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const queryClient = useQueryClient();

  const userId = user?.id;

  const { data: myProperties, isLoading } = useQuery({
    queryKey: ['my-properties', userId],
    queryFn: async () => {
      if (!userId) return [];
      const { data, error } = await (supabase as any)
        .from('properties')
        .select('*')
        .eq('owner_id', userId)
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data as Property[];
    },
    enabled: !!userId,
  });

  const { data: inquiries } = useQuery({
    queryKey: ['my-inquiries', userId],
    queryFn: async () => {
      if (!userId) return [];
      const { data, error } = await (supabase as any)
        .from('inquiries')
        .select('*, properties(title)')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data as any[];
    },
    enabled: !!userId,
  });

  const deleteMutation = useMutation({
    mutationFn: async (propertyId: string) => {
      const { error } = await (supabase as any).from('properties').delete().eq('id', propertyId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-properties'] });
      toast.success('Property deleted');
    },
    onError: () => toast.error('Failed to delete'),
  });

  if (loading) return null;
  if (!user) return <Navigate to="/auth" replace />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Manage your listings and inquiries</p>
        </div>
        <Button asChild>
          <Link to="/dashboard/new"><Plus className="h-4 w-4 mr-1" /> New Listing</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold font-sans mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5" /> My Properties
          </h2>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1,2].map(i => <Skeleton key={i} className="h-64 rounded-lg" />)}
            </div>
          ) : myProperties?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {myProperties.map(p => (
                <div key={p.id} className="relative">
                  <PropertyCard property={p} />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-3 left-3 h-8 w-8 z-10"
                    onClick={(e) => { e.preventDefault(); deleteMutation.mutate(p.id); }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <Card><CardContent className="py-10 text-center text-muted-foreground">No listings yet. Create your first one!</CardContent></Card>
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold font-sans mb-4 flex items-center gap-2">
            <MessageSquare className="h-5 w-5" /> Inquiries
          </h2>
          {inquiries?.length ? (
            <div className="space-y-3">
              {inquiries.map((inq: any) => (
                <Card key={inq.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-sans">{inq.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground line-clamp-2">{inq.message}</p>
                    <p className="text-xs text-muted-foreground mt-2">{inq.email}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card><CardContent className="py-6 text-center text-muted-foreground text-sm">No inquiries yet</CardContent></Card>
          )}
        </div>
      </div>
    </div>
  );
}
