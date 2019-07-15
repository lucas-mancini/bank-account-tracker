import { BankAccount } from '../types'

const BankAccounts: BankAccount[] = [
  {
    id: 'Galicia',
    bankName: 'Banco Galicia',
    country: 'ar',
    currency: 'ARS',
    exchangeRateToUSD: 0.02408
  },
  {
    id: 'DB',
    bankName: 'Deutsche Bank',
    country: 'de',
    currency: 'EUR',
    exchangeRateToUSD: 1.12875
  },
  {
    id: 'CommBank',
    bankName: 'Commonwealth Bank',
    country: 'au',
    currency: 'AUD',
    exchangeRateToUSD: 0.7021
  },
  {
    id: 'Citi',
    bankName: 'Citibank',
    country: 'um',
    currency: 'USD',
    exchangeRateToUSD: 1
  },
  {
    id: 'TD',
    bankName: 'TD Bank',
    country: 'um',
    currency: 'USD',
    exchangeRateToUSD: 1
  },
  {
    id: 'PayPal',
    bankName: 'PayPal',
    country: 'um',
    currency: 'USD',
    exchangeRateToUSD: 1
  }
]

export default BankAccounts
