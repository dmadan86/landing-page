// "use client";

// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Product } from '@/lib/constants';
// import AnimateOnScroll from '@/components/ui/animate-on-scroll';

// interface ProductCardProps {
//   product: Product;
//   index: number;
// }

// const ProductCard = ({ product, index }: ProductCardProps) => {
//   const { id, name, shortDescription } = product;
  
//   const iconBgColors = {
//     demomonkey: 'bg-demomonkey',
//     sidekick: 'bg-sidekick',
//     rapidhire: 'bg-rapidhire',
//     onespot: 'bg-onespot',
//   };
  
//   const borderColors = {
//     demomonkey: 'border-demomonkey',
//     sidekick: 'border-sidekick',
//     rapidhire: 'border-rapidhire',
//     onespot: 'border-onespot',
//   };
  
//   const buttonVariants = {
//     demomonkey: 'demomonkey',
//     sidekick: 'sidekick',
//     rapidhire: 'rapidhire',
//     onespot: 'onespot',
//   } as const;
  
//   return (
//     <AnimateOnScroll animation="fadeUp" delay={0.1 * index} className="h-full">
//       <div className={`h-full rounded-xl border-2 ${borderColors[id]} overflow-hidden shadow-sm bg-white hover:shadow-md transition-all duration-300 relative`}>
//         <div className="flex flex-col h-full">
//           <div className="p-6 flex flex-col h-full">
//             <div className="flex items-center space-x-3 mb-4">
//               <div className={`w-10 h-10 rounded-full ${iconBgColors[id]} flex items-center justify-center text-white font-medium text-lg`}>
//                 {name.charAt(0)}
//               </div>
//               <h3 className="text-xl font-bold">{name}</h3>
//             </div>
            
//             <p className="text-gray-600 mb-6 flex-grow">{shortDescription}</p>
            
//             <div className="mt-auto">
//               <Link href={`/${id}`}>
//                 <Button 
//                   variant={buttonVariants[product.id]} 
//                   className="w-full group"
//                   rounded="lg"
//                 >
//                   Learn More 
//                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </AnimateOnScroll>
//   );
// };

// export default ProductCard;