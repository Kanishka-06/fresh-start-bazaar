import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  count: number;
  onClick?: () => void;
}

export function CategoryCard({ title, icon: Icon, count, onClick }: CategoryCardProps) {
  return (
    <Card 
      className="cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 bg-card border-border/50"
      onClick={onClick}
    >
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-medium text-card-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{count} items</p>
      </CardContent>
    </Card>
  );
}