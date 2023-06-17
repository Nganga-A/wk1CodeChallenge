
function calculate() {
    const basicSalaryInput = document.getElementById('basicSalaryInput'); //basic salary input
    const benefitsInput = document.getElementById('benefitsInput'); //basic salary input element
    const salaryDisplay = document.getElementById('salaryDisplay');  //output field
  
    const basicSalary = parseFloat(basicSalaryInput.value);
    const benefits = parseFloat(benefitsInput.value);
  
    const result = calculateNetSalary(basicSalary, benefits);
  
    salaryDisplay.textContent = `Gross Salary: ${result.grossSalary} ,  NHIF Deduction: ${result.nhifDeduction} ,  PAYEE: ${result.payee} ,  NSSF Deduction: ${result.nssfDeduction} ,  Net Salary: ${result.netSalary}`;
  }

//Tax Rates
const TAX_RATES = [
    { lower: 0, upper: 24000, rate: 10 },
    { lower: 24001, upper: 32333, rate: 25 },
    { lower: 32333, upper: Infinity, rate: 30 }
  ];

  // Constants for NHIF and NSSF deductions
  const NHIF_RATES = [
    { lower: 0, upper: 5999, amount: 150 },
    { lower: 6000, upper: 7999, amount: 300 },
    { lower: 8000, upper: 11999, amount: 400 },
    { lower: 12000, upper: 14999, amount: 500 },
    { lower: 15000, upper: 19999, amount: 600 },
    { lower: 20000, upper: 24999, amount: 750 },
    { lower: 25000, upper: 29999, amount: 850 },
    { lower: 30000, upper: 34999, amount: 900 },
    { lower: 35000, upper: 39999, amount: 950 },
    { lower: 40000, upper: 44999, amount: 1000 },
    { lower: 45000, upper: 49999, amount: 1100 },
    { lower: 50000, upper: 59999, amount: 1200 },
    { lower: 60000, upper: 69999, amount: 1300 },
    { lower: 70000, upper: 79999, amount: 1400 },
    { lower: 80000, upper: 89999, amount: 1500 },
    { lower: 90000, upper: 99999, amount: 1600 },
    { lower: 100000, upper: Infinity, amount: 1700 }
  ];
  
  const NSSF_RATE = 0.06;
  
  function calculateNetSalary(basicSalary, benefits) {    
   
    const grossSalary = basicSalary + benefits;   // Calculate gross salary
  
    const nhifDeduction = calculateNHIFDeduction(grossSalary);     // Calculate NHIF deduction
 
    const taxableIncome = grossSalary - nhifDeduction;   // Calculate taxable income
  
    const payee = calculatePayee(taxableIncome);    // Calculate PAYE
   
    const nssfDeduction = grossSalary * NSSF_RATE;    // Calculate NSSF deduction
 
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;    // Calculate net salary
  
    return {
      grossSalary: grossSalary,
      nhifDeduction: nhifDeduction,
      payee: payee,
      nssfDeduction: nssfDeduction,
      netSalary: netSalary
    };
  }
  
  function calculateNHIFDeduction(salary) {
    for (let i = 0; i < NHIF_RATES.length; i++) {
      const { lower, upper, amount } = NHIF_RATES[i];
      if (salary >= lower && salary <= upper) {
        return amount;
      }
    }
    return 0;
  }
  
  function calculatePayee(taxableIncome) {
    let payee = 0;
    let remainingIncome = taxableIncome;
  
    for (let i = 0; i < TAX_RATES.length; i++) {
      const { lower, upper, rate } = TAX_RATES[i];
      if (remainingIncome > 0) {
        const range = Math.min(upper - lower, remainingIncome);
        payee += (range * rate) / 100;
        remainingIncome -= range;
      } else {
        break;
      }
    }
  
    return payee;
  }
  

 