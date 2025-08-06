export interface InvestmentInputModel {
    InitialInvestment:number;
    AnnualInvestment:number;
    ExceptedReturn:number;
    Duration:number;
}

export interface AnnualDataResult {
     year: number,
      interest: number,
      valueEndOfYear: number,
      annualInvestment: number,
      totalInterest: number,
      totalAmountInvested: number
}