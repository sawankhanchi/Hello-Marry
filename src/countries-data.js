const countries = [
    {
      "name": "Abkhazia (+7 840)"
    },
    {
      "name": "Afghanistan (+93)"
    },
    {
      "name": "Albania (+355)"
    },
    {
      "name": "Algeria (+213)"
    },
    {
      "name": "American Samoa (+1 684)"
    },
    {
      "name": "Andorra (+376)"
    },
    {
      "name": "Angola (+244)"
    },
    {
      "name": "Anguilla (+1 264)"
    },
    {
      "name": "Argentina (+54)"
    },
    {
      "name": "Armenia (+374)"
    },
    {
      "name": "Aruba (+297)"
    },
    {
      "name": "Ascension (+247)"
    },
    {
      "name": "Australia (+61)"
    },
    {
      "name": "Austria (+43)"
    },
    {
      "name": "Bahamas (+1 242)"
    },
    {
      "name": "Bahrain (+973)"
    },
    {
      "name": "Bangladesh (+880)"
    },
    {
      "name": "Barbados (+1 246)"
    },
    {
      "name": "Barbuda (+1 268)"
    },
    {
      "name": "Belarus (+375)"
    },
    {
      "name": "Chile (+56)"
    },
    {
      "name": "China (+86)"
    },
    {
      "name": "Colombia (+57)"
    },
    {
      "name": "Denmark (+45)"
    },
    {
      "name": "Diego Garcia (+246)"
    },
    {
      "name": "Djibouti (+253)"
    },
    {
      "name": "Dominica (+1 767)"
    },
    {
      "name": "East Timor (+670)"
    },
    {
      "name": "Easter Island (+56)"
    },
    {
      "name": "Ecuador (+593)"
    },
    {
      "name": "Egypt (+20)"
    },
    {
      "name": "El Salvador (+503)"
    },
    {
      "name": "Equatorial Guinea (+240)"
    },
    {
      "name": "Eritrea (+291)"
    },
    {
      "name": "Estonia (+372)"
    },
    {
      "name": "Ethiopia (+251)"
    },
    {
      "name": "Falkland Islands (+500)"
    },
    {
      "name": "Faroe Islands (+298)"
    },
    {
      "name": "Fiji (+679)"
    },
    {
      "name": "Finland (+358)"
    },
    {
      "name": "France (+33)"
    },
    {
      "name": "French Antilles (+596)"
    },
    {
      "name": "Guinea (+224)"
    },
    {
      "name": "Guinea-Bissau (+245)"
    },
    {
      "name": "Guyana (+595)"
    },
    {
      "name": "Haiti (+509)"
    },
    {
      "name": "Honduras (+504)"
    },
    {
      "name": "Hungary (+36)",
    },
    {
      "name": "Iceland (+354)",
    },
    {
      "name": "India (+91)"
    },
    {
      "name": "Indonesia (+62)"
    },
    {
      "name": "Iran (+98)"
    },
    {
      "name": "Iraq (+964)"
    },
    {
      "name": "Ireland (+353)"
    },
    {
      "name": "Israel (+972)"
    },
    {
      "name": "Italy (+39)"
    },
    {
      "name": "Ivory Coast (+225)"
    },
    {
      "name": "Jamaica (+1 876)"
    },
    {
      "name": "Japan (+81)"
    },
    {
      "name": "Jordan (+962)"
    },
    {
      "name": "Kazakhstan (+7 7)"
    },
    {
      "name": "Kenya (+254)"
    },
    {
      "name": "Kiribati (+686)"
    },
    {
      "name": "Kuwait (+965)"
    },
    {
      "name": "Kyrgyzstan (+996)"
    },
    {
      "name": "Laos (+856)"
    },
    {
      "name": "Latvia (+371)"
    },
    {
      "name": "Lebanon (+961)"
    },
    {
      "name": "Lesotho (+266)"
    },
    {
      "name": "Liberia (+231)"
    },
    {
      "name": "Libya (+218)"
    },
    {
      "name": "Liechtenstein (+423)"
    },
    {
      "name": "Lithuania (+370)"
    },
    {
      "name": "Luxembourg (+352)"
    },
    {
      "name": "Macau SAR China (+853)"
    },
    {
      "name": "Macedonia (+389)"
    },
    {
      "name": "Madagascar (+261)"
    },
    {
      "name": "Malawi (+265)"
    },
    {
      "name": "Malaysia (+60)"
    },
    {
      "name": "Maldives (+960)"
    },
    {
      "name": "Mali (+223)"
    },
    {
      "name": "Malta (+356)"
    },
    {
      "name": "Marshall Islands (+692)"
    },
    {
      "name": "Martinique (+596)"
    },
    {
      "name": "Mauritania (+222)"
    },
    {
      "name": "Mauritius (+230)"
    },
    {
      "name": "Mayotte (+262)"
    },
    {
      "name": "Mexico (+52)"
    },
    {
      "name": "Micronesia (+691)"
    },
    {
      "name": "Midway Island (+1 808)"
    },
    {
      "name": "Moldova (+373)"
    },
    {
      "name": "Monaco (+377)"
    },
    {
      "name": "Mongolia (+976)"
    },
    {
      "name": "Montenegro (+382)"
    },
    {
      "name": "Montserrat (+1664)"
    },
    {
      "name": "Morocco (+212)"
    },
    {
      "name": "Myanmar (+95)"
    },
    {
      "name": "Namibia (+264)"
    },
    {
      "name": "Nauru (+674)"
    },
    {
      "name": "Nepal (+977)"
    },
    {
      "name": "Netherlands (+31)"
    },
    {
      "name": "Netherlands Antilles (+599)"
    },
    {
      "name": "Nevis (+1 869)"
    },
    {
      "name": "New Caledonia (+687)"
    },
    {
      "name": "New Zealand (+64)"
    },
    {
      "name": "Nicaragua (+505)"
    },
    {
      "name": "Niger (+227)"
    },
    {
      "name": "Nigeria (+234)"
    },
    {
      "name": "Niue (+683)"
    },
    {
      "name": "Norfolk Island (+672)"
    },
    {
      "name": "North Korea (+850)"
    },
    {
      "name": "Northern Mariana Islands (+1 670)"
    },
    {
      "name": "Norway (+47)"
    },
    {
      "name": "Oman (+968)"
    },
    {
      "name": "Pakistan (+92)"
    },
    {
      "name": "Palau (+680)"
    },
    {
      "name": "Palestinian Territory (+970)"
    },
    {
      "name": "Panama (+507)"
    },
    {
      "name": "Papua New Guinea (+676)"
    },
    {
      "name": "Paraguay (+595)"
    },
    {
      "name": "Peru (+51)"
    },
    {
      "name": "Philippines (+63)"
    },
    {
      "name": "Poland (+48)"
    },
    {
      "name": "Portugal (+351)"
    },
    {
      "name": "Puerto Rico (+1 787)"
    },
    {
      "name": "Qatar (+974)"
    },
    {
      "name": "Reunion (+262)"
    },
    {
      "name": "Romania (+40)"
    },
    {
      "name": "Russia (+7)"
    },
    {
      "name": "Rwanda (+250)"
    },
    {
      "name": "Samoa (+685)"
    },
    {
      "name": "San Marino (+378)"
    },
    {
      "name": "Saudi Arabia (+966)"
    },
    {
      "name": "Senegal (+221)"
    },
    {
      "name": "Serbia (+381)"
    },
    {
      "name": "Seychelles (+248)"
    },
    {
      "name": "Sierra Leone (+232)"
    },
    {
      "name": "Singapore (+65)"
    },
    {
      "name": "Slovakia (+421)"
    },
    {
      "name": "Slovenia (+386)"
    },
    {
      "name": "Solomon Islands (+677)"
    },
    {
      "name": "South Africa (+27)"
    },
    {
      "name": "South Korea (+82)"
    },
    {
      "name": "Spain (+34)"
    },
    {
      "name": "Sri Lanka (+94)"
    },
    {
      "name": "Sudan (+249)"
    },
    {
      "name": "Suriname (+597)"
    },
    {
      "name": "Swaziland (+268)"
    },
    {
      "name": "Sweden (+46)"
    },
    {
      "name": "Switzerland (+41)"
    },
    {
      "name": "Syria (+963)"
    },
    {
      "name": "Taiwan (+886)"
    },
    {
      "name": "Tajikistan (+992)"
    },
    {
      "name": "Tanzania (+255)"
    },
    {
      "name": "Thailand (+66)"
    },
    {
      "name": "Timor Leste (+670)"
    },
    {
      "name": "Togo (+228)"
    },
    {
      "name": "Tokelau (+690)"
    },
    {
      "name": "Tonga (+676)"
    },
    {
      "name": "Trinidad and Tobago (+1 868)"
    },
    {
      "name": "Tunisia (+216)"
    },
    {
      "name": "Turkey (+90)"
    },
    {
      "name": "Turkmenistan (+993)"
    },
    {
      "name": "Turks and Caicos Islands (+1 649)"
    },
    {
      "name": "Tuvalu (+688)"
    },
    {
      "name": "U.S. Virgin Islands (+1 340)"
    },
    {
      "name": "Uganda (+256)"
    },
    {
      "name": "Ukraine (+380)"
    },
    {
      "name": "United Arab Emirates (+971)"
    },
    {
      "name": "United Kingdom (+44)"
    },
    {
      "name": "United States (+1)"
    },
    {
      "name": "Uruguay (+598)"
    },
    {
      "name": "Uzbekistan (+998)"
    },
    {
      "name": "Vanuatu (+678)"
    },
    {
      "name": "Venezuela (+58)"
    },
    {
      "name": "Vietnam (+84)"
    },
    {
      "name": "Wake Island (+1 808)"
    },
    {
      "name": "Wallis and Futuna (+681)"
    },
    {
      "name": "Yemen (+967)"
    },
    {
      "name": "Zambia (+260)"
    },
    {
      "name": "Zanzibar (+255)"
    },
    {
      "name": "Zimbabwe (+263)"
    }
  ];

export default countries;
