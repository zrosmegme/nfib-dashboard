// JSON data imports
import quarterlyDataJson from './quarterlyData.json';
import currentMetricsJson from './currentMetrics.json';
import quarterlyAnalysisJson from './quarterlyAnalysis.json';

// Type definitions
export interface MonthlyDataPoint {
  month: string;
  optimism: number;
  uncertainty: number;
}

export interface QuarterlyDataPoint {
  quarter: string;
  optimism: number;
  uncertainty: number;
}

export interface QuarterlyAnalysis {
  quarter: string;
  period: string;
  avgIndex: number;
  change: number;
  changeDirection: 'positive' | 'negative' | 'neutral';
  supportiveFactors: Factor[];
  limitingFactors: Factor[];
}

export interface Factor {
  title: string;
  detail: string;
  impact?: 'high' | 'moderate' | 'low';
}

export interface CurrentMetrics {
  optimismIndex: number;
  optimismChange: number;
  uncertaintyIndex: number;
  uncertaintyChange: number;
  topConcern: string;
  topConcernPercentage: number;
  hiringDifficulty: number;
  lastUpdated: string;
}

// Export data from JSON files
export const monthlyData: MonthlyDataPoint[] = quarterlyDataJson.monthlyData;
export const quarterlyData: QuarterlyDataPoint[] = [];
export const AVERAGE_BASELINE: number = quarterlyDataJson.averageBaseline;
export const quarterlyAnalysis: QuarterlyAnalysis[] = quarterlyAnalysisJson.quarterlyAnalysis as QuarterlyAnalysis[];
export const currentMetrics: CurrentMetrics = currentMetricsJson as CurrentMetrics;