interface Currency {
  name: string;
  code: string;
  prefix: string;
  suffix: string;
  includeThousandsSeparator: boolean;
  thousandsSeparatorSymbol: string;
  allowDecimal: boolean;
  decimalSymbol: string;
  decimalLimit: number;
  integerLimit?: number;
  requireDecimal?: boolean;
}

export const CurrencyList: Currency[] = [
  {
    name: 'US Dollar',
    code: 'USD',
    prefix: '$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Euro',
    code: 'EUR',
    prefix: '€',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2
  },
  {
    name: 'British Pound',
    code: 'GBP',
    prefix: '£',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Japanese Yen',
    code: 'JPY',
    prefix: '¥',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: false,
    decimalSymbol: '.',
    decimalLimit: 0
  },
  {
    name: 'Brazilian Real',
    code: 'BRL',
    prefix: 'R$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2
  },
  {
    name: 'Canadian Dollar',
    code: 'CAD',
    prefix: 'CA$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Australian Dollar',
    code: 'AUD',
    prefix: 'A$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Swiss Franc',
    code: 'CHF',
    prefix: 'CHF',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: "'",
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Chinese Yuan',
    code: 'CNY',
    prefix: '¥',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Indian Rupee',
    code: 'INR',
    prefix: '₹',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Russian Ruble',
    code: 'RUB',
    prefix: '',
    suffix: '₽',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ' ',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2
  },
  {
    name: 'South Korean Won',
    code: 'KRW',
    prefix: '₩',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: false,
    decimalSymbol: '.',
    decimalLimit: 0
  },
  {
    name: 'Mexican Peso',
    code: 'MXN',
    prefix: 'MX$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Singapore Dollar',
    code: 'SGD',
    prefix: 'S$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Hong Kong Dollar',
    code: 'HKD',
    prefix: 'HK$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Norwegian Krone',
    code: 'NOK',
    prefix: '',
    suffix: ' kr',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ' ',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2
  },
  {
    name: 'Swedish Krona',
    code: 'SEK',
    prefix: '',
    suffix: ' kr',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ' ',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2
  },
  {
    name: 'Danish Krone',
    code: 'DKK',
    prefix: '',
    suffix: ' kr',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2
  },
  {
    name: 'Polish Złoty',
    code: 'PLN',
    prefix: '',
    suffix: ' zł',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ' ',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2
  },
  {
    name: 'Israeli New Shekel',
    code: 'ILS',
    prefix: '₪',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Turkish Lira',
    code: 'TRY',
    prefix: '₺',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2
  },
  {
    name: 'South African Rand',
    code: 'ZAR',
    prefix: 'R',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ' ',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'New Zealand Dollar',
    code: 'NZD',
    prefix: 'NZ$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Thai Baht',
    code: 'THB',
    prefix: '฿',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Malaysian Ringgit',
    code: 'MYR',
    prefix: 'RM',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Philippine Peso',
    code: 'PHP',
    prefix: '₱',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Indonesian Rupiah',
    code: 'IDR',
    prefix: 'Rp',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: false,
    decimalSymbol: ',',
    decimalLimit: 0
  },
  {
    name: 'Colombian Peso',
    code: 'COP',
    prefix: 'COL$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: false,
    decimalSymbol: ',',
    decimalLimit: 0
  },
  {
    name: 'Chilean Peso',
    code: 'CLP',
    prefix: 'CLP$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: false,
    decimalSymbol: ',',
    decimalLimit: 0
  },
  {
    name: 'Argentine Peso',
    code: 'ARS',
    prefix: 'AR$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2
  },
  {
    name: 'Czech Koruna',
    code: 'CZK',
    prefix: '',
    suffix: ' Kč',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ' ',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2
  },
  {
    name: 'Hungarian Forint',
    code: 'HUF',
    prefix: '',
    suffix: ' Ft',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ' ',
    allowDecimal: false,
    decimalSymbol: ',',
    decimalLimit: 0
  },
  {
    name: 'United Arab Emirates Dirham',
    code: 'AED',
    prefix: 'د.إ',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Saudi Riyal',
    code: 'SAR',
    prefix: '﷼',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Bangladeshi Taka',
    code: 'BDT',
    prefix: '৳',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Egyptian Pound',
    code: 'EGP',
    prefix: 'E£',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Nigerian Naira',
    code: 'NGN',
    prefix: '₦',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Qatari Riyal',
    code: 'QAR',
    prefix: 'QR',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2
  },
  {
    name: 'Ukrainian Hryvnia',
    code: 'UAH',
    prefix: '₴',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ' ',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2
  },
  {
    name: 'Romanian Leu',
    code: 'RON',
    prefix: '',
    suffix: ' lei',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2
  },
  {
    name: 'Kuwaiti Dinar',
    code: 'KWD',
    prefix: 'KD',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 3
  },
  {
    name: 'Bitcoin',
    code: 'BTC',
    prefix: '₿',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 8
  }
];

export const getCurrencyByCode = (code: string): Currency | undefined => {
  return CurrencyList.find(currency => currency.code === code);
};

export const getDefaultCurrencyMask = (): Currency => {
  return CurrencyList[0];
};

export default CurrencyList;
