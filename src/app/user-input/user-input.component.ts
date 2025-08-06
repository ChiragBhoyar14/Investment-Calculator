import { Component, EventEmitter, inject, Output } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppService } from '../app.service';
import { InvestmentInputModel } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

    enteredInitialInvestment='0';
    enteredAnnualInvestment= '0';
    enteredExceptedReturn= '5';
    enteredDuration= '10';
  
  @Output() Calculate = new EventEmitter<InvestmentInputModel>();

  private AppService = inject(AppService);

  onSubmit(){  
      // this.AppService.calculateInvestmentResults({
      //   InitialInvestment: +this.enteredInitialInvestment,
      //   AnnualInvestment: +this.enteredAnnualInvestment,
      //   ExceptedReturn: +this.enteredExceptedReturn,
      //   Duration: +this.enteredDuration
      // });
      
      this.Calculate.emit({
        InitialInvestment: +this.enteredInitialInvestment,
        AnnualInvestment: +this.enteredAnnualInvestment,
        ExceptedReturn: +this.enteredExceptedReturn,
        Duration: +this.enteredDuration
      });
  }
}
