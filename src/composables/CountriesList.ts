export interface Country {
    name: string;
    iso: string;
    alpha3: string;
    numeric: string;
    ddi: string;
    phoneMask?: string;
    dateMask?: string;
    timeMask?: string;
}

const Countries: Country[] = [
    {
        name: "Afghanistan",
        iso: "af",
        alpha3: "AFG",
        numeric: "004",
        ddi: "93",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Albania",
        iso: "al",
        alpha3: "ALB",
        numeric: "008",
        ddi: "355",
        phoneMask: "### ### ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Algeria",
        iso: "dz",
        alpha3: "DZA",
        numeric: "012",
        ddi: "213",
        phoneMask: "### ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Andorra",
        iso: "ad",
        alpha3: "AND",
        numeric: "020",
        ddi: "376",
        phoneMask: "### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Angola",
        iso: "ao",
        alpha3: "AGO",
        numeric: "024",
        ddi: "244",
        phoneMask: "### ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Argentina",
        iso: "ar",
        alpha3: "ARG",
        numeric: "032",
        ddi: "54",
        phoneMask: "## ####-####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Armenia",
        iso: "am",
        alpha3: "ARM",
        numeric: "051",
        ddi: "374",
        phoneMask: "## ### ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Australia",
        iso: "au",
        alpha3: "AUS",
        numeric: "036",
        ddi: "61",
        phoneMask: "### ### ###",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Austria",
        iso: "at",
        alpha3: "AUT",
        numeric: "040",
        ddi: "43",
        phoneMask: "### ### ####",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Azerbaijan",
        iso: "az",
        alpha3: "AZE",
        numeric: "031",
        ddi: "994",
        phoneMask: "## ### ## ##",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Bahamas",
        iso: "bs",
        alpha3: "BHS",
        numeric: "044",
        ddi: "1242",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Bahrain",
        iso: "bh",
        alpha3: "BHR",
        numeric: "048",
        ddi: "973",
        phoneMask: "#### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Bangladesh",
        iso: "bd",
        alpha3: "BGD",
        numeric: "050",
        ddi: "880",
        phoneMask: "#### ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Barbados",
        iso: "bb",
        alpha3: "BRB",
        numeric: "052",
        ddi: "1246",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Belarus",
        iso: "by",
        alpha3: "BLR",
        numeric: "112",
        ddi: "375",
        phoneMask: "## ###-##-##",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Belgium",
        iso: "be",
        alpha3: "BEL",
        numeric: "056",
        ddi: "32",
        phoneMask: "### ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Belize",
        iso: "bz",
        alpha3: "BLZ",
        numeric: "084",
        ddi: "501",
        phoneMask: "###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Benin",
        iso: "bj",
        alpha3: "BEN",
        numeric: "204",
        ddi: "229",
        phoneMask: "## ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Bhutan",
        iso: "bt",
        alpha3: "BTN",
        numeric: "064",
        ddi: "975",
        phoneMask: "# ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Bolivia (Plurinational State of)",
        iso: "bo",
        alpha3: "BOL",
        numeric: "068",
        ddi: "591",
        phoneMask: "# ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Bosnia and Herzegovina",
        iso: "ba",
        alpha3: "BIH",
        numeric: "070",
        ddi: "387",
        phoneMask: "## ###-###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Botswana",
        iso: "bw",
        alpha3: "BWA",
        numeric: "072",
        ddi: "267",
        phoneMask: "## ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Brazil",
        iso: "br",
        alpha3: "BRA",
        numeric: "076",
        ddi: "55",
        phoneMask: "(##) #####-####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Brunei Darussalam",
        iso: "bn",
        alpha3: "BRN",
        numeric: "096",
        ddi: "673",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Bulgaria",
        iso: "bg",
        alpha3: "BGR",
        numeric: "100",
        ddi: "359",
        phoneMask: "### ### ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Burkina Faso",
        iso: "bf",
        alpha3: "BFA",
        numeric: "854",
        ddi: "226",
        phoneMask: "## ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Burundi",
        iso: "bi",
        alpha3: "BDI",
        numeric: "108",
        ddi: "257",
        phoneMask: "## ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Cabo Verde",
        iso: "cv",
        alpha3: "CPV",
        numeric: "132",
        ddi: "238",
        phoneMask: "### ## ##",
        dateMask: "dd/MM/yyyy",
        timeMask: "HH:mm"
    },
    {
        name: "Cambodia",
        iso: "kh",
        alpha3: "KHM",
        numeric: "116",
        ddi: "855",
        phoneMask: "## ### ###",
        dateMask: "dd/MM/yyyy",
        timeMask: "HH:mm"
    },
    {
        name: "Cameroon",
        iso: "cm",
        alpha3: "CMR",
        numeric: "120",
        ddi: "237",
        phoneMask: "#### ## ## ##",
        dateMask: "dd/MM/yyyy",
        timeMask: "HH:mm"
    },
    {
        name: "Canada",
        iso: "ca",
        alpha3: "CAN",
        numeric: "124",
        ddi: "1",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Cayman Islands",
        iso: "ky",
        alpha3: "CYM",
        numeric: "136",
        ddi: "1345",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Central African Republic",
        iso: "cf",
        alpha3: "CAF",
        numeric: "140",
        ddi: "236",
        phoneMask: "## ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Chad",
        iso: "td",
        alpha3: "TCD",
        numeric: "148",
        ddi: "235",
        phoneMask: "## ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Chile",
        iso: "cl",
        alpha3: "CHL",
        numeric: "152",
        ddi: "56",
        phoneMask: "# #### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "China",
        iso: "cn",
        alpha3: "CHN",
        numeric: "156",
        ddi: "86",
        phoneMask: "### #### ####",
        dateMask: "####/##/##",
        timeMask: "##:##"
    },
    {
        name: "Christmas Island",
        iso: "cx",
        alpha3: "CXR",
        numeric: "162",
        ddi: "61",
        phoneMask: "### ### ###",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Colombia",
        iso: "co",
        alpha3: "COL",
        numeric: "170",
        ddi: "57",
        phoneMask: "### ### ####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Comoros",
        iso: "km",
        alpha3: "COM",
        numeric: "174",
        ddi: "269",
        phoneMask: "### ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Congo",
        iso: "cg",
        alpha3: "COG",
        numeric: "178",
        ddi: "242",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Congo (Democratic Republic of the)",
        iso: "cd",
        alpha3: "COD",
        numeric: "180",
        ddi: "243",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Cook Islands",
        iso: "ck",
        alpha3: "COK",
        numeric: "184",
        ddi: "682",
        phoneMask: "## ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Costa Rica",
        iso: "cr",
        alpha3: "CRI",
        numeric: "188",
        ddi: "506",
        phoneMask: "#### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Croatia",
        iso: "hr",
        alpha3: "HRV",
        numeric: "191",
        ddi: "385",
        phoneMask: "## ### ####",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Cuba",
        iso: "cu",
        alpha3: "CUB",
        numeric: "192",
        ddi: "53",
        phoneMask: "# ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Cyprus",
        iso: "cy",
        alpha3: "CYP",
        numeric: "196",
        ddi: "357",
        phoneMask: "## ######",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Czech Republic",
        iso: "cz",
        alpha3: "CZE",
        numeric: "203",
        ddi: "420",
        phoneMask: "### ### ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Denmark",
        iso: "dk",
        alpha3: "DNK",
        numeric: "208",
        ddi: "45",
        phoneMask: "## ## ## ##",
        dateMask: "##-##-####",
        timeMask: "##:##"
    },
    {
        name: "Djibouti",
        iso: "dj",
        alpha3: "DJI",
        numeric: "262",
        ddi: "253",
        phoneMask: "## ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Dominica",
        iso: "dm",
        alpha3: "DMA",
        numeric: "212",
        ddi: "1767",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Dominican Republic",
        iso: "do",
        alpha3: "DOM",
        numeric: "214",
        ddi: "1809",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Ecuador",
        iso: "ec",
        alpha3: "ECU",
        numeric: "218",
        ddi: "593",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Egypt",
        iso: "eg",
        alpha3: "EGY",
        numeric: "818",
        ddi: "20",
        phoneMask: "### ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "El Salvador",
        iso: "sv",
        alpha3: "SLV",
        numeric: "222",
        ddi: "503",
        phoneMask: "#### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Equatorial Guinea",
        iso: "gq",
        alpha3: "GNQ",
        numeric: "226",
        ddi: "240",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Eritrea",
        iso: "er",
        alpha3: "ERI",
        numeric: "232",
        ddi: "291",
        phoneMask: "# ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Estonia",
        iso: "ee",
        alpha3: "EST",
        numeric: "233",
        ddi: "372",
        phoneMask: "#### ####",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Eswatini",
        iso: "sz",
        alpha3: "SWZ",
        numeric: "748",
        ddi: "268",
        phoneMask: "## ## ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Ethiopia",
        iso: "et",
        alpha3: "ETH",
        numeric: "231",
        ddi: "251",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Falkland Islands",
        iso: "fk",
        alpha3: "FLK",
        numeric: "238",
        ddi: "500",
        phoneMask: "#####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Faroe Islands",
        iso: "fo",
        alpha3: "FRO",
        numeric: "234",
        ddi: "298",
        phoneMask: "######",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Fiji",
        iso: "fj",
        alpha3: "FJI",
        numeric: "242",
        ddi: "679",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Finland",
        iso: "fi",
        alpha3: "FIN",
        numeric: "246",
        ddi: "358",
        phoneMask: "## ### ####",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "France",
        iso: "fr",
        alpha3: "FRA",
        numeric: "250",
        ddi: "33",
        phoneMask: "# ## ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "French Guiana",
        iso: "gf",
        alpha3: "GUF",
        numeric: "254",
        ddi: "594",
        phoneMask: "### ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "French Polynesia",
        iso: "pf",
        alpha3: "PYF",
        numeric: "258",
        ddi: "689",
        phoneMask: "## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "French Southern Territories",
        iso: "tf",
        alpha3: "ATF",
        numeric: "260",
        ddi: "262",
        phoneMask: "### ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Gabon",
        iso: "ga",
        alpha3: "GAB",
        numeric: "266",
        ddi: "241",
        phoneMask: "# ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Gambia",
        iso: "gm",
        alpha3: "GMB",
        numeric: "270",
        ddi: "220",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Georgia",
        iso: "ge",
        alpha3: "GEO",
        numeric: "268",
        ddi: "995",
        phoneMask: "### ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Germany",
        iso: "de",
        alpha3: "DEU",
        numeric: "276",
        ddi: "49",
        phoneMask: "### #######",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Ghana",
        iso: "gh",
        alpha3: "GHA",
        numeric: "288",
        ddi: "233",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Gibraltar",
        iso: "gi",
        alpha3: "GIB",
        numeric: "292",
        ddi: "350",
        phoneMask: "### #####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Greece",
        iso: "gr",
        alpha3: "GRC",
        numeric: "300",
        ddi: "30",
        phoneMask: "### ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Greenland",
        iso: "gl",
        alpha3: "GRL",
        numeric: "304",
        ddi: "299",
        phoneMask: "## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Grenada",
        iso: "gd",
        alpha3: "GRD",
        numeric: "308",
        ddi: "1473",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Guadeloupe",
        iso: "gp",
        alpha3: "GLP",
        numeric: "312",
        ddi: "590",
        phoneMask: "### ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Guam",
        iso: "gu",
        alpha3: "GUM",
        numeric: "316",
        ddi: "1671",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Guatemala",
        iso: "gt",
        alpha3: "GTM",
        numeric: "320",
        ddi: "502",
        phoneMask: "#### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Guernsey",
        iso: "gg",
        alpha3: "GGY",
        numeric: "831",
        ddi: "44",
        phoneMask: "#### ######",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Guinea",
        iso: "gn",
        alpha3: "GIN",
        numeric: "324",
        ddi: "224",
        phoneMask: "## ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Guinea-Bissau",
        iso: "gw",
        alpha3: "GNB",
        numeric: "624",
        ddi: "245",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Guyana",
        iso: "gy",
        alpha3: "GUY",
        numeric: "328",
        ddi: "592",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Haiti",
        iso: "ht",
        alpha3: "HTI",
        numeric: "332",
        ddi: "509",
        phoneMask: "## ## ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Heard Island and McDonald Islands",
        iso: "hm",
        alpha3: "HMD",
        numeric: "334",
        ddi: "672",
        phoneMask: "### ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Honduras",
        iso: "hn",
        alpha3: "HND",
        numeric: "340",
        ddi: "504",
        phoneMask: "####-####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Hungary",
        iso: "hu",
        alpha3: "HUN",
        numeric: "348",
        ddi: "36",
        phoneMask: "## ### ####",
        dateMask: "####.##.##",
        timeMask: "##:##"
    },
    {
        name: "Iceland",
        iso: "is",
        alpha3: "ISL",
        numeric: "352",
        ddi: "354",
        phoneMask: "### ####",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "India",
        iso: "in",
        alpha3: "IND",
        numeric: "356",
        ddi: "91",
        phoneMask: "##### #####",
        dateMask: "##-##-####",
        timeMask: "##:##"
    },
    {
        name: "Indonesia",
        iso: "id",
        alpha3: "IDN",
        numeric: "360",
        ddi: "62",
        phoneMask: "### ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Iran (Islamic Republic of)",
        iso: "ir",
        alpha3: "IRN",
        numeric: "364",
        ddi: "98",
        phoneMask: "### ### ####",
        dateMask: "####/##/##",
        timeMask: "##:##"
    },
    {
        name: "Iraq",
        iso: "iq",
        alpha3: "IRQ",
        numeric: "368",
        ddi: "964",
        phoneMask: "### ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Ireland",
        iso: "ie",
        alpha3: "IRL",
        numeric: "372",
        ddi: "353",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Israel",
        iso: "il",
        alpha3: "ISR",
        numeric: "376",
        ddi: "972",
        phoneMask: "##-###-####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Italy",
        iso: "it",
        alpha3: "ITA",
        numeric: "380",
        ddi: "39",
        phoneMask: "### ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Jamaica",
        iso: "jm",
        alpha3: "JAM",
        numeric: "388",
        ddi: "1876",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Japan",
        iso: "jp",
        alpha3: "JPN",
        numeric: "392",
        ddi: "81",
        phoneMask: "## #### ####",
        dateMask: "####/##/##",
        timeMask: "##:##"
    },
    {
        name: "Jordan",
        iso: "jo",
        alpha3: "JOR",
        numeric: "400",
        ddi: "962",
        phoneMask: "# #### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Kazakhstan",
        iso: "kz",
        alpha3: "KAZ",
        numeric: "398",
        ddi: "7",
        phoneMask: "(###) ###-##-##",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Kenya",
        iso: "ke",
        alpha3: "KEN",
        numeric: "404",
        ddi: "254",
        phoneMask: "### ######",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Kiribati",
        iso: "ki",
        alpha3: "KIR",
        numeric: "296",
        ddi: "686",
        phoneMask: "## ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Kuwait",
        iso: "kw",
        alpha3: "KWT",
        numeric: "414",
        ddi: "965",
        phoneMask: "#### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Kyrgyzstan",
        iso: "kg",
        alpha3: "KGZ",
        numeric: "417",
        ddi: "996",
        phoneMask: "### ### ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Lao People's Democratic Republic",
        iso: "la",
        alpha3: "LAO",
        numeric: "418",
        ddi: "856",
        phoneMask: "## ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Latvia",
        iso: "lv",
        alpha3: "LVA",
        numeric: "428",
        ddi: "371",
        phoneMask: "## ### ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Lebanon",
        iso: "lb",
        alpha3: "LBN",
        numeric: "422",
        ddi: "961",
        phoneMask: "## ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Lesotho",
        iso: "ls",
        alpha3: "LSO",
        numeric: "426",
        ddi: "266",
        phoneMask: "## ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Liberia",
        iso: "lr",
        alpha3: "LBR",
        numeric: "430",
        ddi: "231",
        phoneMask: "## ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Libya",
        iso: "ly",
        alpha3: "LBY",
        numeric: "434",
        ddi: "218",
        phoneMask: "## ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Liechtenstein",
        iso: "li",
        alpha3: "LIE",
        numeric: "438",
        ddi: "423",
        phoneMask: "### ### ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Lithuania",
        iso: "lv",
        alpha3: "LTU",
        numeric: "440",
        ddi: "370",
        phoneMask: "(###) ## ###",
        dateMask: "####-##-##",
        timeMask: "##:##"
    },
    {
        name: "Luxembourg",
        iso: "lu",
        alpha3: "LUX",
        numeric: "442",
        ddi: "352",
        phoneMask: "### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Madagascar",
        iso: "mg",
        alpha3: "MDG",
        numeric: "450",
        ddi: "261",
        phoneMask: "## ## ### ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Malawi",
        iso: "mw",
        alpha3: "MWI",
        numeric: "454",
        ddi: "265",
        phoneMask: "### ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Maldives",
        iso: "mv",
        alpha3: "MDV",
        numeric: "462",
        ddi: "960",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Mali",
        iso: "ml",
        alpha3: "MLI",
        numeric: "466",
        ddi: "223",
        phoneMask: "## ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Malta",
        iso: "mt",
        alpha3: "MLT",
        numeric: "470",
        ddi: "356",
        phoneMask: "#### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Marshall Islands",
        iso: "mh",
        alpha3: "MHL",
        numeric: "584",
        ddi: "692",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Martinique",
        iso: "mq",
        alpha3: "MTQ",
        numeric: "474",
        ddi: "596",
        phoneMask: "### ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Mauritania",
        iso: "mr",
        alpha3: "MRT",
        numeric: "478",
        ddi: "222",
        phoneMask: "## ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Mauritius",
        iso: "mu",
        alpha3: "MUS",
        numeric: "480",
        ddi: "230",
        phoneMask: "#### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Mayotte",
        iso: "yt",
        alpha3: "MYT",
        numeric: "175",
        ddi: "262",
        phoneMask: "### ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Mexico",
        iso: "mx",
        alpha3: "MEX",
        numeric: "484",
        ddi: "52",
        phoneMask: "### ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Micronesia (Federated States of)",
        iso: "fm",
        alpha3: "FSM",
        numeric: "583",
        ddi: "691",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Moldova (the Republic of)",
        iso: "md",
        alpha3: "MDA",
        numeric: "498",
        ddi: "373",
        phoneMask: "### ## ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Monaco",
        iso: "mc",
        alpha3: "MCO",
        numeric: "492",
        ddi: "377",
        phoneMask: "## ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Mongolia",
        iso: "mn",
        alpha3: "MNG",
        numeric: "496",
        ddi: "976",
        phoneMask: "## ## ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Montenegro",
        iso: "me",
        alpha3: "MNE",
        numeric: "499",
        ddi: "382",
        phoneMask: "## ### ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Montserrat",
        iso: "ms",
        alpha3: "MSR",
        numeric: "500",
        ddi: "1664",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Morocco",
        iso: "ma",
        alpha3: "MAR",
        numeric: "504",
        ddi: "212",
        phoneMask: "## #### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Mozambique",
        iso: "mz",
        alpha3: "MOZ",
        numeric: "508",
        ddi: "258",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Myanmar",
        iso: "mm",
        alpha3: "MMR",
        numeric: "104",
        ddi: "95",
        phoneMask: "# ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Namibia",
        iso: "na",
        alpha3: "NAM",
        numeric: "516",
        ddi: "264",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Nauru",
        iso: "nr",
        alpha3: "NRU",
        numeric: "520",
        ddi: "674",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Nepal",
        iso: "np",
        alpha3: "NPL",
        numeric: "524",
        ddi: "977",
        phoneMask: "##-######",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Netherlands",
        iso: "nl",
        alpha3: "NLD",
        numeric: "528",
        ddi: "31",
        phoneMask: "# ## ## ## ##",
        dateMask: "##-##-####",
        timeMask: "##:##"
    },
    {
        name: "New Caledonia",
        iso: "nc",
        alpha3: "NCL",
        numeric: "540",
        ddi: "687"
    },
    {
        name: "New Zealand",
        iso: "nz",
        alpha3: "NZL",
        numeric: "554",
        ddi: "64",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Nicaragua",
        iso: "ni",
        alpha3: "NIC",
        numeric: "558",
        ddi: "505",
        phoneMask: "#### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Niger",
        iso: "ne",
        alpha3: "NER",
        numeric: "562",
        ddi: "227",
        phoneMask: "## ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Nigeria",
        iso: "ng",
        alpha3: "NGA",
        numeric: "566",
        ddi: "234",
        phoneMask: "### ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Niue",
        iso: "nu",
        alpha3: "NIU",
        numeric: "570",
        ddi: "683",
        phoneMask: "####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Norfolk Island",
        iso: "nf",
        alpha3: "NFK",
        numeric: "574",
        ddi: "672",
        phoneMask: "### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "North Macedonia",
        iso: "mk",
        alpha3: "MKD",
        numeric: "807",
        ddi: "389",
        phoneMask: "## ### ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Northern Mariana Islands",
        iso: "mp",
        alpha3: "MNP",
        numeric: "580",
        ddi: "1670",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Norway",
        iso: "no",
        alpha3: "NOR",
        numeric: "578",
        ddi: "47",
        phoneMask: "### ## ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Oman",
        iso: "om",
        alpha3: "OMN",
        numeric: "512",
        ddi: "968",
        phoneMask: "#### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Pakistan",
        iso: "pk",
        alpha3: "PAK",
        numeric: "586",
        ddi: "92",
        phoneMask: "### ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Palau",
        iso: "pw",
        alpha3: "PLW",
        numeric: "585",
        ddi: "680",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Palestine, State of",
        iso: "ps",
        alpha3: "PSE",
        numeric: "275",
        ddi: "970",
        phoneMask: "### ## ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Papua New Guinea",
        iso: "pg",
        alpha3: "PNG",
        numeric: "598",
        ddi: "675",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Paraguay",
        iso: "py",
        alpha3: "PRY",
        numeric: "600",
        ddi: "595",
        phoneMask: "### ######",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Peru",
        iso: "pe",
        alpha3: "PER",
        numeric: "604",
        ddi: "51",
        phoneMask: "### ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Philippines",
        iso: "ph",
        alpha3: "PHL",
        numeric: "608",
        ddi: "63",
        phoneMask: "### ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Pitcairn",
        iso: "pn",
        alpha3: "PCN",
        numeric: "612",
        ddi: "64",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Poland",
        iso: "pl",
        alpha3: "POL",
        numeric: "616",
        ddi: "48",
        phoneMask: "### ### ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Portugal",
        iso: "pt",
        alpha3: "PRT",
        numeric: "620",
        ddi: "351",
        phoneMask: "### ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Puerto Rico",
        iso: "pr",
        alpha3: "PRI",
        numeric: "630",
        ddi: "1787",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Qatar",
        iso: "qa",
        alpha3: "QAT",
        numeric: "634",
        ddi: "974",
        phoneMask: "#### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Réunion",
        iso: "re",
        alpha3: "REU",
        numeric: "638",
        ddi: "262",
        phoneMask: "### ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Romania",
        iso: "ro",
        alpha3: "ROU",
        numeric: "642",
        ddi: "40",
        phoneMask: "### ### ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Russian Federation",
        iso: "ru",
        alpha3: "RUS",
        numeric: "643",
        ddi: "7",
        phoneMask: "(###) ###-##-##",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Rwanda",
        iso: "rw",
        alpha3: "RWA",
        numeric: "646",
        ddi: "250",
        phoneMask: "### ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Saint Barthélemy",
        iso: "bl",
        alpha3: "BLM",
        numeric: "652",
        ddi: "590",
        phoneMask: "### ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Saint Helena, Ascension and Tristan da Cunha",
        iso: "sh",
        alpha3: "SHN",
        numeric: "654",
        ddi: "290",
        phoneMask: "####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Saint Kitts and Nevis",
        iso: "kn",
        alpha3: "KNA",
        numeric: "659",
        ddi: "1869",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Saint Lucia",
        iso: "lc",
        alpha3: "LCA",
        numeric: "662",
        ddi: "1758",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Saint Martin (French part)",
        iso: "mf",
        alpha3: "MAF",
        numeric: "663",
        ddi: "590",
        phoneMask: "### ## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Saint Pierre and Miquelon",
        iso: "pm",
        alpha3: "SPM",
        numeric: "666",
        ddi: "508",
        phoneMask: "## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Saint Vincent and the Grenadines",
        iso: "vc",
        alpha3: "VCT",
        numeric: "670",
        ddi: "1784",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Samoa",
        iso: "ws",
        alpha3: "WSM",
        numeric: "882",
        ddi: "685",
        phoneMask: "## ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "San Marino",
        iso: "sm",
        alpha3: "SMR",
        numeric: "674",
        ddi: "378",
        phoneMask: "#### ######",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Sao Tome and Principe",
        iso: "st",
        alpha3: "STP",
        numeric: "678",
        ddi: "239",
        phoneMask: "## #####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Saudi Arabia",
        iso: "sa",
        alpha3: "SAU",
        numeric: "682",
        ddi: "966",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Senegal",
        iso: "sn",
        alpha3: "SEN",
        numeric: "686",
        ddi: "221",
        phoneMask: "## ### ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Serbia",
        iso: "rs",
        alpha3: "SRB",
        numeric: "688",
        ddi: "381",
        phoneMask: "## ### ####",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Seychelles",
        iso: "sc",
        alpha3: "SYC",
        numeric: "690",
        ddi: "248",
        phoneMask: "# ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Sierra Leone",
        iso: "sl",
        alpha3: "SLE",
        numeric: "694",
        ddi: "232",
        phoneMask: "## ######",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Singapore",
        iso: "sg",
        alpha3: "SGP",
        numeric: "702",
        ddi: "65",
        phoneMask: "#### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Sint Maarten (Dutch part)",
        iso: "sx",
        alpha3: "SXM",
        numeric: "534",
        ddi: "1721",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Slovakia",
        iso: "sk",
        alpha3: "SVK",
        numeric: "703",
        ddi: "421",
        phoneMask: "### ### ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Slovenia",
        iso: "si",
        alpha3: "SVN",
        numeric: "705",
        ddi: "386",
        phoneMask: "## ### ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Solomon Islands",
        iso: "sb",
        alpha3: "SLB",
        numeric: "090",
        ddi: "677",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Somalia",
        iso: "so",
        alpha3: "SOM",
        numeric: "706",
        ddi: "252",
        phoneMask: "# #######",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "South Africa",
        iso: "za",
        alpha3: "ZAF",
        numeric: "710",
        ddi: "27",
        phoneMask: "## ### ####",
        dateMask: "####/##/##",
        timeMask: "##:##"
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        iso: "gs",
        alpha3: "SGS",
        numeric: "239",
        ddi: "500",
        phoneMask: "#####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "South Sudan",
        iso: "ss",
        alpha3: "SSD",
        numeric: "728",
        ddi: "211",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Spain",
        iso: "es",
        alpha3: "ESP",
        numeric: "724",
        ddi: "34",
        phoneMask: "### ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Sri Lanka",
        iso: "lk",
        alpha3: "LKA",
        numeric: "144",
        ddi: "94",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Sudan",
        iso: "sd",
        alpha3: "SDN",
        numeric: "729",
        ddi: "249",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Suriname",
        iso: "sr",
        alpha3: "SUR",
        numeric: "740",
        ddi: "597",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Svalbard and Jan Mayen",
        iso: "sj",
        alpha3: "SJM",
        numeric: "744",
        ddi: "47",
        phoneMask: "### ## ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Sweden",
        iso: "se",
        alpha3: "SWE",
        numeric: "752",
        ddi: "46",
        phoneMask: "-### ## ##",
        dateMask: "####-##-##",
        timeMask: "##:##"
    },
    {
        name: "Switzerland",
        iso: "ch",
        alpha3: "CHE",
        numeric: "756",
        ddi: "41",
        phoneMask: "## ### ## ##",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Thailand",
        iso: "th",
        alpha3: "THA",
        numeric: "764",
        ddi: "66",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Timor-Leste",
        iso: "tl",
        alpha3: "TLS",
        numeric: "626",
        ddi: "670",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Togo",
        iso: "tg",
        alpha3: "TGO",
        numeric: "768",
        ddi: "228",
        phoneMask: "## ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Tokelau",
        iso: "tk",
        alpha3: "TKL",
        numeric: "772",
        ddi: "690",
        phoneMask: "####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Tonga",
        iso: "to",
        alpha3: "TON",
        numeric: "776",
        ddi: "676",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Trinidad and Tobago",
        iso: "tt",
        alpha3: "TTO",
        numeric: "780",
        ddi: "1868",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Tunisia",
        iso: "tn",
        alpha3: "TUN",
        numeric: "788",
        ddi: "216",
        phoneMask: "## ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Turkey",
        iso: "tr",
        alpha3: "TUR",
        numeric: "792",
        ddi: "90",
        phoneMask: "(###) ### ####",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Turkmenistan",
        iso: "tm",
        alpha3: "TKM",
        numeric: "795",
        ddi: "993",
        phoneMask: "## ## ####",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Turks and Caicos Islands",
        iso: "tc",
        alpha3: "TCA",
        numeric: "796",
        ddi: "1649",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Tuvalu",
        iso: "tv",
        alpha3: "TUV",
        numeric: "798",
        ddi: "688",
        phoneMask: "## ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Uganda",
        iso: "ug",
        alpha3: "UGA",
        numeric: "800",
        ddi: "256",
        phoneMask: "### ######",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Ukraine",
        iso: "ua",
        alpha3: "UKR",
        numeric: "804",
        ddi: "380",
        phoneMask: "## ### ####",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "United Arab Emirates",
        iso: "ae",
        alpha3: "ARE",
        numeric: "784",
        ddi: "971",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "United Kingdom of Great Britain and Northern Ireland",
        iso: "gb",
        alpha3: "GBR",
        numeric: "826",
        ddi: "44",
        phoneMask: "#### ######",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "United States of America",
        iso: "us",
        alpha3: "USA",
        numeric: "840",
        ddi: "1",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Uruguay",
        iso: "uy",
        alpha3: "URY",
        numeric: "858",
        ddi: "598",
        phoneMask: "# ### ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Uzbekistan",
        iso: "uz",
        alpha3: "UZB",
        numeric: "860",
        ddi: "998",
        phoneMask: "## ### ## ##",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Vanuatu",
        iso: "vu",
        alpha3: "VUT",
        numeric: "548",
        ddi: "678",
        phoneMask: "## #####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Western Sahara",
        iso: "eh",
        alpha3: "ESH",
        numeric: "732",
        ddi: "212",
        phoneMask: "## #### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Yemen",
        iso: "ye",
        alpha3: "YEM",
        numeric: "887",
        ddi: "967",
        phoneMask: "### ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Zambia",
        iso: "zm",
        alpha3: "ZMB",
        numeric: "894",
        ddi: "260",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Zimbabwe",
        iso: "zw",
        alpha3: "ZWE",
        numeric: "716",
        ddi: "263",
        phoneMask: "## ### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Anguilla",
        iso: "ai",
        alpha3: "AIA",
        numeric: "660",
        ddi: "1264",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Antarctica",
        iso: "aq",
        alpha3: "ATA",
        numeric: "010",
        ddi: "672",
        phoneMask: "### ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Aruba",
        iso: "aw",
        alpha3: "ABW",
        numeric: "533",
        ddi: "297",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Bermuda",
        iso: "bm",
        alpha3: "BMU",
        numeric: "060",
        ddi: "1441",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Bonaire, Sint Eustatius and Saba",
        iso: "bq",
        alpha3: "BES",
        numeric: "535",
        ddi: "599",
        phoneMask: "### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Bouvet Island",
        iso: "bv",
        alpha3: "BVT",
        numeric: "074",
        ddi: "47",
        phoneMask: "### ## ###",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Cocos (Keeling) Islands",
        iso: "cc",
        alpha3: "CCK",
        numeric: "166",
        ddi: "61",
        phoneMask: "### ### ###",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "United States Minor Outlying Islands",
        iso: "um",
        alpha3: "UMI",
        numeric: "581",
        ddi: "1",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Virgin Islands (British)",
        iso: "vg",
        alpha3: "VGB",
        numeric: "092",
        ddi: "1284",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Virgin Islands (U.S.)",
        iso: "vi",
        alpha3: "VIR",
        numeric: "850",
        ddi: "1340",
        phoneMask: "(###) ###-####",
        dateMask: "##/##/####",
        timeMask: "##:## ##"
    },
    {
        name: "Wallis and Futuna",
        iso: "wf",
        alpha3: "WLF",
        numeric: "876",
        ddi: "681",
        phoneMask: "## ## ##",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Taiwan (Province of China)",
        iso: "tw",
        alpha3: "TWN",
        numeric: "158",
        ddi: "886",
        phoneMask: "#### ####",
        dateMask: "####/##/##",
        timeMask: "##:##"
    },
    {
        name: "Hong Kong",
        iso: "hk",
        alpha3: "HKG",
        numeric: "344",
        ddi: "852",
        phoneMask: "#### ####",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Syrian Arab Republic",
        iso: "sy",
        alpha3: "SYR",
        numeric: "760",
        ddi: "963",
        phoneMask: "## #### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    },
    {
        name: "Tajikistan",
        iso: "tj",
        alpha3: "TJK",
        numeric: "762",
        ddi: "992",
        phoneMask: "## ### ####",
        dateMask: "##.##.####",
        timeMask: "##:##"
    },
    {
        name: "Tanzania, United Republic of",
        iso: "tz",
        alpha3: "TZA",
        numeric: "834",
        ddi: "255",
        phoneMask: "### ### ###",
        dateMask: "##/##/####",
        timeMask: "##:##"
    }
];

export function getCountryByIso(iso: string): Country | undefined {
    return Countries.find(country => country.iso === iso.toLowerCase());
}

export function getCountryByDDI(ddi: string): Country | undefined {
    return Countries.find(country => country.ddi === ddi);
}

export function getPhoneMaskByIso(iso: string): string {
    const country = getCountryByIso(iso);

    if (country && country.phoneMask)
        return country.phoneMask;

    return "#### #### ####";
}

export function getPhoneMaskByDDI(ddi: string): string {
    const country = getCountryByDDI(ddi);

    if (country && country.phoneMask)
        return country.phoneMask;

    return "#### #### ####";
}

export function getDateMaskByIso(iso: string): string {
    const country = getCountryByIso(iso);

    if (country && country.dateMask)
        return country.dateMask;

    return "##/##/####";
}

export function getTimeMaskByIso(iso: string): string {
    const country = getCountryByIso(iso);

    if (country && country.timeMask)
        return country.timeMask;

    return "##:##";
}

export default Countries;
