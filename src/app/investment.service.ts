import { Injectable } from '@angular/core';
import { InvestmentInputModel } from './investment-input.model';
import { AnnualDataResult } from './investment-input.model';

@Injectable({providedIn:'root'})

export class InvestmentService {
  
  annualDataResult?: AnnualDataResult[];

 calculateInvestmentResults(data: InvestmentInputModel ) {
  const annualData = [];
  let investmentValue = data.InitialInvestment;


  for (let i = 0; i < data.Duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (data.ExceptedReturn / 100);
    investmentValue += interestEarnedInYear + data.AnnualInvestment;
    const totalInterest =
      investmentValue - data.AnnualInvestment * year - data.InitialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: data.AnnualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: data.InitialInvestment + data.AnnualInvestment * year,
    });
  }

   return this.annualDataResult = annualData;
}

}