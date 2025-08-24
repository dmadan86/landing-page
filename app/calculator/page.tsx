// app/calculator/page.tsx
"use client";

import { useState, useEffect, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Calculator, ChevronDown, ChevronUp, DollarSign, Clock, Zap, Users, BarChart4 } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/ui/animate-on-scroll';

export default function ROICalculatorPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [results, setResults] = useState<any>(null);
  
  const formSchema = z.object({
    employeeCount: z.number().min(1, 'Must have at least 1 employee'),
    avgEmployeeSalary: z.number().min(30000, 'Annual salary must be at least $30,000'),
    hoursSpentWeekly: z.number().min(1, 'Hours must be at least 1').max(40, 'Cannot exceed 40 hours per week'),
    percentageAutomated: z.number().min(1, 'Must be at least 1%').max(100, 'Cannot exceed 100%'),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      employeeCount: 10,
      avgEmployeeSalary: 75000,
      hoursSpentWeekly: 15,
      percentageAutomated: 60,
    },
  });

  const calculateROI = useCallback((values: z.infer<typeof formSchema>) => {
    const { employeeCount, avgEmployeeSalary, hoursSpentWeekly, percentageAutomated } = values;
    
    // Calculate hourly rate
    const hourlyRate = avgEmployeeSalary / 2080; // Based on 40 hours/week, 52 weeks/year
    
    // Time saved calculation
    const weeklyHoursSaved = (hoursSpentWeekly * (percentageAutomated / 100));
    const annualHoursSaved = weeklyHoursSaved * 52 * employeeCount;
    
    // Cost savings calculation
    const annualLaborSaved = annualHoursSaved * hourlyRate;
    
    // Determine which pricing tier based on number of employees
    let tier = 'starter';
    let monthlyPricePerUser = 19;
    
    if (employeeCount > 100) {
      tier = 'enterprise';
      monthlyPricePerUser = 69; // Using business tier price as base for enterprise
    } else if (employeeCount > 25) {
      tier = 'business';
      monthlyPricePerUser = 69;
    } else if (employeeCount > 5) {
      tier = 'professional';
      monthlyPricePerUser = 39;
    }
    
    // Apply volume discount
    let discount = 0;
    if (employeeCount >= 250) {
      discount = 0.4; // Custom enterprise pricing, using 40% as example
    } else if (employeeCount >= 100) {
      discount = 0.3;
    } else if (employeeCount >= 50) {
      discount = 0.2;
    } else if (employeeCount >= 20) {
      discount = 0.1;
    }
    
    // Apply annual discount if selected
    let annualDiscount = isAnnual ? 0.15 : 0;
    
    // Calculate final price
    const effectiveMonthlyPrice = monthlyPricePerUser * (1 - discount) * (1 - annualDiscount);
    const monthlyCost = effectiveMonthlyPrice * employeeCount;
    const annualCost = monthlyCost * 12;
    
    // ROI calculation
    const annualROI = ((annualLaborSaved - annualCost) / annualCost) * 100;
    
    // Productivity metrics
    const productivityGain = (weeklyHoursSaved / hoursSpentWeekly) * 100;
    
    // Time to ROI in weeks
    const weeklyLaborSaved = annualLaborSaved / 52;
    const weeklyCost = monthlyCost / 4.33;
    const timeToROI = weeklyCost > 0 ? weeklyCost / weeklyLaborSaved * 4.33 : 0;
    
    setResults({
      tier,
      monthlyPricePerUser: effectiveMonthlyPrice,
      monthlyCost,
      annualCost,
      weeklyHoursSaved: weeklyHoursSaved * employeeCount,
      annualHoursSaved,
      annualLaborSaved,
      annualROI,
      productivityGain,
      timeToROI
    });
  }, [isAnnual]);

  // Debounced effect for calculating ROI
  useEffect(() => {
    const subscription = form.watch((values) => {
      if (values) {
        calculateROI(values as z.infer<typeof formSchema>);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, calculateROI]);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  return (
    <>
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gray-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fadeUp" className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">ROI Calculator</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how much time and money your organization can save with CoreSight AI training.
              </p>
            </AnimateOnScroll>
            
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="p-6 md:p-8 border-b border-gray-200 bg-gray-50">
                <h2 className="text-2xl font-bold text-primary-700 mb-2">Estimate Your Savings</h2>
                <p className="text-gray-600">Adjust the values below to calculate your potential ROI</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-6">
                <div className="lg:col-span-7 p-6 md:p-8">
                  <Form {...form}>
                    <form className="space-y-8">
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="employeeCount"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex justify-between items-center mb-2">
                                <FormLabel className="text-base font-medium">Number of Employees</FormLabel>
                                <div className="text-primary-700 font-medium">{field.value}</div>
                              </div>
                              <FormControl>
                                <div className="space-y-3">
                                  <Slider
                                    min={1}
                                    max={500}
                                    step={1}
                                    value={[field.value]}
                                    onValueChange={(vals) => field.onChange(vals[0])}
                                    className="py-2"
                                  />
                                  <div className="flex justify-between text-xs text-gray-500">
                                    <span>1</span>
                                    <span>100</span>
                                    <span>250</span>
                                    <span>500</span>
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="avgEmployeeSalary"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex justify-between items-center mb-2">
                                <FormLabel className="text-base font-medium">Average Annual Salary</FormLabel>
                                <div className="text-primary-700 font-medium">{formatter.format(field.value)}</div>
                              </div>
                              <FormControl>
                                <div className="space-y-3">
                                  <Slider
                                    min={30000}
                                    max={200000}
                                    step={5000}
                                    value={[field.value]}
                                    onValueChange={(vals) => field.onChange(vals[0])}
                                    className="py-2"
                                  />
                                  <div className="flex justify-between text-xs text-gray-500">
                                    <span>$30k</span>
                                    <span>$75k</span>
                                    <span>$125k</span>
                                    <span>$200k</span>
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="hoursSpentWeekly"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex justify-between items-center mb-2">
                                <FormLabel className="text-base font-medium">Training Hours Per Week (per employee)</FormLabel>
                                <div className="text-primary-700 font-medium">{field.value} hours</div>
                              </div>
                              <FormControl>
                                <div className="space-y-3">
                                  <Slider
                                    min={1}
                                    max={40}
                                    step={1}
                                    value={[field.value]}
                                    onValueChange={(vals) => field.onChange(vals[0])}
                                    className="py-2"
                                  />
                                  <div className="flex justify-between text-xs text-gray-500">
                                    <span>1 hour</span>
                                    <span>10 hours</span>
                                    <span>20 hours</span>
                                    <span>40 hours</span>
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="percentageAutomated"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex justify-between items-center mb-2">
                                <FormLabel className="text-base font-medium">Automation Potential (%)</FormLabel>
                                <div className="text-primary-700 font-medium">{field.value}%</div>
                              </div>
                              <FormControl>
                                <div className="space-y-3">
                                  <Slider
                                    min={10}
                                    max={100}
                                    step={5}
                                    value={[field.value]}
                                    onValueChange={(vals) => field.onChange(vals[0])}
                                    className="py-2"
                                  />
                                  <div className="flex justify-between text-xs text-gray-500">
                                    <span>10%</span>
                                    <span>40%</span>
                                    <span>70%</span>
                                    <span>100%</span>
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        {/* Pricing Plan Toggle */}
                        <div className="pt-4">
                          <div className="flex justify-between items-center mb-2">
                            <FormLabel className="text-base font-medium">Pricing Plan</FormLabel>
                          </div>
                          <div className="flex items-center justify-center bg-gray-100 p-1 rounded-full">
                            <Button 
                              type="button"
                              variant={!isAnnual ? "default" : "ghost"}
                              className={`px-4 py-2 rounded-full text-sm font-medium ${!isAnnual ? 'bg-white shadow-sm text-primary-700' : 'text-gray-600'}`}
                              onClick={() => setIsAnnual(false)}
                            >
                              Monthly
                            </Button>
                            <Button 
                              type="button"
                              variant={isAnnual ? "default" : "ghost"}
                              className={`px-4 py-2 rounded-full text-sm font-medium ${isAnnual ? 'bg-white shadow-sm text-primary-700' : 'text-gray-600'}`}
                              onClick={() => setIsAnnual(true)}
                            >
                              Annual (Save 15%)
                            </Button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Form>
                </div>
                
                <div className="lg:col-span-5 bg-primary-50 p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-6 text-primary-700">Your ROI Estimate</h3>
                  
                  {results && (
                    <div className="space-y-6">
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="text-center mb-4">
                          <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-1">Annual ROI</h4>
                          <div className="text-4xl font-bold text-primary-700">{Math.max(results.annualROI, 0).toFixed(0)}%</div>
                        </div>
                        <div className="bg-primary-50 h-2 rounded-full w-full">
                          <div 
                            className="bg-primary-700 h-2 rounded-full" 
                            style={{ width: `${Math.min(100, Math.max(results.annualROI, 0) / 5)}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <div className="flex items-center">
                            <DollarSign className="h-5 w-5 text-primary-600 mr-2" />
                            <span className="font-medium">Annual Savings</span>
                          </div>
                          <span className="font-bold text-lg">{formatter.format(results.annualLaborSaved)}</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-primary-600 mr-2" />
                            <span className="font-medium">Hours Saved Annually</span>
                          </div>
                          <span className="font-bold text-lg">{Math.round(results.annualHoursSaved).toLocaleString()} hrs</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <div className="flex items-center">
                            <Zap className="h-5 w-5 text-primary-600 mr-2" />
                            <span className="font-medium">Productivity Gain</span>
                          </div>
                          <span className="font-bold text-lg">{results.productivityGain.toFixed(0)}%</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <div className="flex items-center">
                            <BarChart4 className="h-5 w-5 text-primary-600 mr-2" />
                            <span className="font-medium">Time to ROI</span>
                          </div>
                          <span className="font-bold text-lg">{results.timeToROI.toFixed(1)} weeks</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-3">
                          <div className="flex items-center">
                            <DollarSign className="h-5 w-5 text-primary-600 mr-2" />
                            <span className="font-medium">Estimated Cost</span>
                          </div>
                          <span className="font-bold text-lg">
                            {formatter.format(isAnnual ? results.annualCost : results.monthlyCost)}
                            <span className="text-sm font-normal text-gray-500 ml-1">
                              {isAnnual ? '/year' : '/month'}
                            </span>
                          </span>
                        </div>
                      </div>
                      
                      <div className="pt-4 space-y-3">
                        <Link href="https://app.CoreSight.co/register">
                          <Button className="w-full bg-primary-700 hover:bg-primary-800 text-white" size="lg">
                            Start Your Free Trial
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button variant="outline" className="w-full border-primary-700 text-primary-700 hover:bg-primary-50" size="lg">
                            Talk to Sales
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fadeUp" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How Our Customers Save</h2>
              <p className="text-xl text-gray-600">
                Real-world results from organizations using CoreSight
              </p>
            </AnimateOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimateOnScroll animation="fadeUp" delay={0.1} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-700 text-white rounded-full mb-4">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Cost Reduction</h3>
                </div>
                <p className="text-gray-700">
                  Our customers typically see a 40-60% reduction in training costs and a 30% increase in employee skill proficiency.
                </p>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fadeUp" delay={0.2} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-700 text-white rounded-full mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Time Savings</h3>
                </div>
                <p className="text-gray-700">
                  Teams reclaim 15-20 hours per employee per month with automated training, allowing them to focus on high-value work.
                </p>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fadeUp" delay={0.3} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-700 text-white rounded-full mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Fast ROI</h3>
                </div>
                <p className="text-gray-700">
                  Most customers achieve positive ROI within 4-8 weeks of implementation, with continued returns growing over time.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}