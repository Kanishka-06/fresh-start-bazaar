import { motion } from 'framer-motion';
import { Bed, Utensils, Laptop, Sofa, Coffee, Wifi } from 'lucide-react';

const LoaderIcon = ({ Icon, delay }: { Icon: any; delay: number }) => (
  <motion.div
    initial={{ scale: 0, rotate: 0 }}
    animate={{ scale: [0, 1.2, 1], rotate: 360 }}
    transition={{
      duration: 0.8,
      delay,
      repeat: Infinity,
      repeatDelay: 2
    }}
    className="text-primary"
  >
    <Icon size={40} />
  </motion.div>
);

export const AnimatedLoader = () => {
  const icons = [
    { Icon: Bed, delay: 0 },
    { Icon: Utensils, delay: 0.2 },
    { Icon: Laptop, delay: 0.4 },
    { Icon: Sofa, delay: 0.6 },
    { Icon: Coffee, delay: 0.8 },
    { Icon: Wifi, delay: 1.0 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center space-y-8">
        <div className="flex justify-center items-center space-x-4">
          {icons.map((item, index) => (
            <LoaderIcon key={index} Icon={item.Icon} delay={item.delay} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-bold gradient-text">Loading FreshStart</h2>
          <p className="text-muted-foreground">Preparing your journey to a new city...</p>
        </motion.div>

        <motion.div
          className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};