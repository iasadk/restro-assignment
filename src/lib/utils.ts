import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import {
  Zap,
  Shield,
  TrendingUp,
  Users,
  Code,
  Rocket,
} from 'lucide-react'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const iconMap = {
  zap: Zap,
  shield: Shield,
  'trending-up': TrendingUp,
  users: Users,
  code: Code,
  rocket: Rocket,
}
