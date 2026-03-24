export interface Product {
  id: string
  name: string
  price: number
  priceInCents: number
  gender: 'M' | 'W' | 'U'
  size?: string
  stock: number
}

// Extracted from the inventory PDF - all products with stock > 0
export const products: Product[] = [
  // Top Sellers - Puerto Rico Favorites
  { id: "212-vip-black-3.4-m", name: "212 VIP BLACK 3.4 M", price: 55.50, priceInCents: 5550, gender: "M", size: "3.4 oz", stock: 18 },
  { id: "bad-boy-elixir-3.4-m", name: "BAD BOY ELIXIR 3.4 M", price: 75.00, priceInCents: 7500, gender: "M", size: "3.4 oz", stock: 20 },
  { id: "jean-paul-elixir-tester-4.2-m", name: "JEAN PAUL ELIXIR TESTER 4.2 M", price: 65.00, priceInCents: 6500, gender: "M", size: "4.2 oz", stock: 50 },
  { id: "amber-oud-gold-4.0-m", name: "AMBER OUD GOLD 4.0 M", price: 37.25, priceInCents: 3725, gender: "M", size: "4.0 oz", stock: 1174 },
  { id: "9-pm-elixir-3.4-m", name: "9 PM ELIXIR 3.4 M", price: 33.75, priceInCents: 3375, gender: "M", size: "3.4 oz", stock: 41 },
  { id: "yara-elixir-3.4-w", name: "YARA ELIXIR 3.4 W", price: 30.75, priceInCents: 3075, gender: "W", size: "3.4 oz", stock: 1133 },
  { id: "bharara-king-3.4-m", name: "BHARARA KING 3.4 M", price: 42.25, priceInCents: 4225, gender: "M", size: "3.4 oz", stock: 417 },
  { id: "black-opium-rollon", name: "BLACK OPIUM ROLLON", price: 1.50, priceInCents: 150, gender: "W", size: "12ml", stock: 255 },
  
  // Carolina Herrera
  { id: "212-1.7-men", name: "212 1.7 MEN", price: 45.25, priceInCents: 4525, gender: "M", size: "1.7 oz", stock: 94 },
  { id: "212-vip-2.7-w", name: "212 VIP 2.7 W", price: 57.25, priceInCents: 5725, gender: "W", size: "2.7 oz", stock: 69 },
  { id: "212-vip-3.4-m", name: "212 VIP 3.4 M", price: 47.00, priceInCents: 4700, gender: "M", size: "3.4 oz", stock: 27 },
  { id: "212-vip-black-elixir-3.4-m", name: "212 VIP BLACK ELIXIR 3.4 M", price: 66.00, priceInCents: 6600, gender: "M", size: "3.4 oz", stock: 58 },
  { id: "212-vip-rose-2.7-w", name: "212 VIP ROSE 2.7 W", price: 57.00, priceInCents: 5700, gender: "W", size: "2.7 oz", stock: 24 },
  { id: "212-vip-rose-elixir-2.7-w", name: "212 VIP ROSE ELIXIR 2.7 W", price: 64.50, priceInCents: 6450, gender: "W", size: "2.7 oz", stock: 19 },
  { id: "bad-boy-cobalt-3.4-m", name: "BAD BOY COBALT 3.4 M", price: 64.00, priceInCents: 6400, gender: "M", size: "3.4 oz", stock: 32 },
  { id: "bad-boy-cobalt-elixir-3.4-m", name: "BAD BOY COBALT ELIXIR 3.4 M", price: 67.00, priceInCents: 6700, gender: "M", size: "3.4 oz", stock: 45 },
  { id: "bad-boy-dazzling-garden-3.4-m", name: "BAD BOY DAZZLING GARDEN 3.4 M", price: 77.75, priceInCents: 7775, gender: "M", size: "3.4 oz", stock: 22 },
  { id: "bad-boy-extreme-3.4-m", name: "BAD BOY EXTREME 3.4 M", price: 64.00, priceInCents: 6400, gender: "M", size: "3.4 oz", stock: 12 },
  { id: "bad-boy-le-parfum-5.1-m", name: "BAD BOY LE PARFUM 5.1 M", price: 76.00, priceInCents: 7600, gender: "M", size: "5.1 oz", stock: 17 },
  { id: "ch-3.4-m", name: "CH 3.4 M", price: 57.00, priceInCents: 5700, gender: "M", size: "3.4 oz", stock: 333 },
  { id: "ch-passion-3.4-m", name: "CH PASSION 3.4 M", price: 42.25, priceInCents: 4225, gender: "M", size: "3.4 oz", stock: 28 },
  { id: "good-girl-blush-elixir-2.7-w", name: "GOOD GIRL BLUSH ELIXIR 2.7 W", price: 77.00, priceInCents: 7700, gender: "W", size: "2.7 oz", stock: 6 },
  { id: "good-girl-midnight-2.7-w", name: "GOOD GIRL MIDNIGHT 2.7 W", price: 129.25, priceInCents: 12925, gender: "W", size: "2.7 oz", stock: 34 },
  { id: "good-girl-very-elixir-2.7-w", name: "GOOD GIRL VERY ELIXIR 2.7 W", price: 82.00, priceInCents: 8200, gender: "W", size: "2.7 oz", stock: 28 },
  
  // Perry Ellis
  { id: "360-3.4-m", name: "360 3.4 M", price: 18.50, priceInCents: 1850, gender: "M", size: "3.4 oz", stock: 259 },
  { id: "360-3.4-w", name: "360 3.4 W", price: 21.25, priceInCents: 2125, gender: "W", size: "3.4 oz", stock: 76 },
  { id: "360-black-3.4-m", name: "360 BLACK 3.4 M", price: 20.25, priceInCents: 2025, gender: "M", size: "3.4 oz", stock: 41 },
  { id: "360-coral-3.4-w", name: "360 CORAL 3.4 W", price: 21.25, priceInCents: 2125, gender: "W", size: "3.4 oz", stock: 71 },
  { id: "360-green-3.4-m", name: "360 GREEN 3.4 M", price: 15.75, priceInCents: 1575, gender: "M", size: "3.4 oz", stock: 34 },
  { id: "360-red-3.4-m", name: "360 RED 3.4 M", price: 20.75, priceInCents: 2075, gender: "M", size: "3.4 oz", stock: 215 },
  { id: "360-very-blue-3.4-m", name: "360 VERY BLUE 3.4 M", price: 18.25, priceInCents: 1825, gender: "M", size: "3.4 oz", stock: 58 },
  { id: "360-white-3.4-m", name: "360 WHITE 3.4 M", price: 17.75, priceInCents: 1775, gender: "M", size: "3.4 oz", stock: 62 },
  
  // Afnan
  { id: "9-am-3.4-m", name: "9 AM 3.4 M", price: 23.25, priceInCents: 2325, gender: "M", size: "3.4 oz", stock: 349 },
  { id: "9-pm-3.4-w", name: "9 PM 3.4 W", price: 23.75, priceInCents: 2375, gender: "W", size: "3.4 oz", stock: 2 },
  
  // Al Haramain
  { id: "amber-oud-gold-2.0-m", name: "AMBER OUD GOLD 2.0 M", price: 27.50, priceInCents: 2750, gender: "M", size: "2.0 oz", stock: 1082 },
  { id: "amber-dubai-night-3.4-m", name: "AMBER DUBAI NIGHT 3.4 M", price: 43.75, priceInCents: 4375, gender: "M", size: "3.4 oz", stock: 37 },
  { id: "amber-oud-dubai-edition-999", name: "AMBER OUD DUBAI EDITION 999", price: 36.75, priceInCents: 3675, gender: "U", size: "3.4 oz", stock: 49 },
  { id: "amber-oud-ruby-edition-3.4-m", name: "AMBER OUD RUBY EDITION 3.4 M", price: 40.75, priceInCents: 4075, gender: "M", size: "3.4 oz", stock: 110 },
  { id: "amber-oud-ultra-violet-2.0-w", name: "AMBER OUD ULTRA VIOLET 2.0 W", price: 50.25, priceInCents: 5025, gender: "W", size: "2.0 oz", stock: 114 },
  { id: "amber-oud-white-edition-3.3", name: "AMBER OUD WHITE EDITION 3.3", price: 41.75, priceInCents: 4175, gender: "U", size: "3.3 oz", stock: 17 },
  
  // Armaf
  { id: "club-de-nuit-intense-3.6-m", name: "CLUB DE NUIT INTENSE 3.6 M", price: 25.00, priceInCents: 2500, gender: "M", size: "3.6 oz", stock: 294 },
  { id: "club-de-nuit-milestone-6.8-m", name: "CLUB DE NUIT MILESTONE 6.8 M", price: 38.00, priceInCents: 3800, gender: "M", size: "6.8 oz", stock: 655 },
  { id: "club-de-nuit-iconic-6.7-m", name: "CLUB DE NUIT ICONIC 6.7 M", price: 40.00, priceInCents: 4000, gender: "M", size: "6.7 oz", stock: 406 },
  { id: "club-de-nuit-bling-2.5", name: "CLUB DE NUIT BLING 2.5", price: 40.75, priceInCents: 4075, gender: "U", size: "2.5 oz", stock: 268 },
  { id: "club-de-nuit-sillage-3.6-m", name: "CLUB DE NUIT SILLAGE 3.6 M", price: 27.75, priceInCents: 2775, gender: "M", size: "3.6 oz", stock: 28 },
  { id: "club-de-nuit-untold-3.6-m", name: "CLUB DE NUIT UNTOLD 3.6 M", price: 32.75, priceInCents: 3275, gender: "M", size: "3.6 oz", stock: 305 },
  { id: "armaf-aura-fresh-3.4-m", name: "ARMAF AURA FRESH 3.4 M", price: 19.75, priceInCents: 1975, gender: "M", size: "3.4 oz", stock: 143 },
  { id: "armaf-eter-edp-3.4-m", name: "ARMAF ETER EDP 3.4 M", price: 33.75, priceInCents: 3375, gender: "M", size: "3.4 oz", stock: 266 },
  { id: "armaf-mandarin-sky-3.4-m", name: "ARMAF MANDARIN SKY 3.4 M", price: 23.75, priceInCents: 2375, gender: "M", size: "3.4 oz", stock: 447 },
  { id: "armaf-mirage-3.4-w", name: "ARMAF MIRAGE 3.4 W", price: 24.75, priceInCents: 2475, gender: "W", size: "3.4 oz", stock: 239 },
  
  // Lattafa
  { id: "asad-elixir-3.4-m", name: "ASAD ELIXIR 3.4 M", price: 31.00, priceInCents: 3100, gender: "M", size: "3.4 oz", stock: 516 },
  { id: "asad-lattafa-3.4-m", name: "ASAD LATTAFA 3.4 M", price: 21.25, priceInCents: 2125, gender: "M", size: "3.4 oz", stock: 408 },
  { id: "asad-bourbon-3.4-m", name: "ASAD BOURBON 3.4 M", price: 21.75, priceInCents: 2175, gender: "M", size: "3.4 oz", stock: 37 },
  { id: "art-of-universe-3.4-m", name: "ART OF UNIVERSE 3.4 M", price: 34.75, priceInCents: 3475, gender: "M", size: "3.4 oz", stock: 872 },
  { id: "atheeri-lattafa-u", name: "ATHEERI LATTAFA U", price: 29.25, priceInCents: 2925, gender: "U", size: "3.4 oz", stock: 253 },
  { id: "eclaire-lattafa-3.4-w", name: "ECLAIRE LATTAFA 3.4 W", price: 23.75, priceInCents: 2375, gender: "W", size: "3.4 oz", stock: 118 },
  { id: "eclaire-banoffi-3.4-w", name: "ECLAIRE BANOFFI 3.4 W", price: 35.25, priceInCents: 3525, gender: "W", size: "3.4 oz", stock: 261 },
  { id: "eclaire-pistache-3.4-w", name: "ECLAIRE PISTACHE 3.4 W", price: 35.25, priceInCents: 3525, gender: "W", size: "3.4 oz", stock: 275 },
  { id: "hayaati-lattafa-3.4", name: "HAYAATI LATTAFA 3.4", price: 16.00, priceInCents: 1600, gender: "U", size: "3.4 oz", stock: 737 },
  { id: "haya-lattafa-3.4-w", name: "HAYA LATTAFA 3.4 W", price: 22.25, priceInCents: 2225, gender: "W", size: "3.4 oz", stock: 63 },
  
  // Bharara
  { id: "bharara-double-bleu-3.4-m", name: "BHARARA DOUBLE BLEU 3.4 M", price: 40.75, priceInCents: 4075, gender: "M", size: "3.4 oz", stock: 14 },
  { id: "bharara-enigma-3.4-m", name: "BHARARA ENIGMA 3.4 M", price: 42.25, priceInCents: 4225, gender: "M", size: "3.4 oz", stock: 44 },
  { id: "bharara-the-collection", name: "BHARARA THE COLLECTION", price: 47.25, priceInCents: 4725, gender: "U", size: "Set", stock: 36 },
  { id: "bharara-chocolete-5ps-set-m", name: "BHARARA CHOCOLETE 5 PS SET M", price: 56.25, priceInCents: 5625, gender: "M", size: "Set", stock: 71 },
  
  // Ariana Grande
  { id: "ariana-cloud-3.4-w", name: "ARIANA CLOUD 3.4 W", price: 43.75, priceInCents: 4375, gender: "W", size: "3.4 oz", stock: 209 },
  { id: "cloud-intense-3.4-w", name: "CLOUD INTENSE 3.4 W", price: 43.75, priceInCents: 4375, gender: "W", size: "3.4 oz", stock: 170 },
  { id: "cloud-pink-3.4-w", name: "CLOUD PINK 3.4 W", price: 43.75, priceInCents: 4375, gender: "W", size: "3.4 oz", stock: 106 },
  { id: "ari-ariana-3.4-w", name: "ARI ARIANA 3.4 W", price: 33.75, priceInCents: 3375, gender: "W", size: "3.4 oz", stock: 207 },
  { id: "ariana-rem-3.4-w", name: "ARIANA REM 3.4 W", price: 37.25, priceInCents: 3725, gender: "W", size: "3.4 oz", stock: 56 },
  { id: "ari-mod-blush-3.4-w", name: "ARI MOD BLUSH 3.4 W", price: 41.75, priceInCents: 4175, gender: "W", size: "3.4 oz", stock: 37 },
  { id: "ari-mod-vanilla-3.4-w", name: "ARI MOD VANILLA 3.4 W", price: 44.75, priceInCents: 4475, gender: "W", size: "3.4 oz", stock: 29 },
  
  // Versace
  { id: "eros-parfum-3.4-m", name: "EROS PARFUM 3.4 M", price: 65.75, priceInCents: 6575, gender: "M", size: "3.4 oz", stock: 2 },
  { id: "dylan-purple-3.4-w", name: "DYLAN PURPLE 3.4 W", price: 61.25, priceInCents: 6125, gender: "W", size: "3.4 oz", stock: 45 },
  
  // Coach
  { id: "coach-edp-3.3-m", name: "COACH EDP 3.3 M", price: 48.00, priceInCents: 4800, gender: "M", size: "3.3 oz", stock: 91 },
  { id: "coach-dreams-3.0-w", name: "COACH DREAMS 3.0 W", price: 40.00, priceInCents: 4000, gender: "W", size: "3.0 oz", stock: 30 },
  { id: "coach-dreams-moonlight-3.0-w", name: "COACH DREAMS MOONLIGHT 3.0 W", price: 41.00, priceInCents: 4100, gender: "W", size: "3.0 oz", stock: 74 },
  { id: "coach-dreams-sunset-3.0-w", name: "COACH DREAMS SUNSET 3.0 W", price: 41.75, priceInCents: 4175, gender: "W", size: "3.0 oz", stock: 117 },
  { id: "coach-gold-3.0-w", name: "COACH GOLD 3.0 W", price: 66.00, priceInCents: 6600, gender: "W", size: "3.0 oz", stock: 32 },
  { id: "coach-love-edp-3.0-w", name: "COACH LOVE EDP 3.0 W", price: 40.00, priceInCents: 4000, gender: "W", size: "3.0 oz", stock: 15 },
  
  // Gucci
  { id: "gucci-bloom-3.3-w", name: "GUCCI BLOOM 3.3 W", price: 51.00, priceInCents: 5100, gender: "W", size: "3.3 oz", stock: 88 },
  { id: "gucci-flora-gorgeous-jasmin-3.3", name: "GUCCI FLORA GORGEOUS JASMIN 3.3", price: 60.75, priceInCents: 6075, gender: "W", size: "3.3 oz", stock: 86 },
  { id: "gucci-flora-gorgeous-orchid-1.6-w", name: "GUCCI FLORA GORGEOUS ORCHID 1.6 W", price: 55.75, priceInCents: 5575, gender: "W", size: "1.6 oz", stock: 82 },
  { id: "gucci-flora-gorgeus-magnolia-3.3-w", name: "GUCCI FLORA GORGEUS MAGNOLIA 3.3 W", price: 67.00, priceInCents: 6700, gender: "W", size: "3.3 oz", stock: 86 },
  { id: "gucci-rush-2.5-w", name: "GUCCI RUSH 2.5 W", price: 38.75, priceInCents: 3875, gender: "W", size: "2.5 oz", stock: 23 },
  
  // Dolce & Gabbana
  { id: "dolce-queen-intense-3.3-w", name: "DOLCE QUEEN INTENSE 3.3 W", price: 58.25, priceInCents: 5825, gender: "W", size: "3.3 oz", stock: 12 },
  { id: "dolce-rose-1.6-w", name: "DOLCE ROSE 1.6 W", price: 37.25, priceInCents: 3725, gender: "W", size: "1.6 oz", stock: 38 },
  { id: "dolce-the-one-1.7-m", name: "DOLCE THE ONE 1.7 M", price: 30.00, priceInCents: 3000, gender: "M", size: "1.7 oz", stock: 29 },
  { id: "dolce-the-one-5.0-m", name: "DOLCE THE ONE 5.0 M", price: 47.25, priceInCents: 4725, gender: "M", size: "5.0 oz", stock: 28 },
  { id: "dot-marc-jacobs-3.3-w", name: "DOT MARC JACOBS 3.3 W", price: 31.25, priceInCents: 3125, gender: "W", size: "3.3 oz", stock: 47 },
  
  // Paco Rabanne
  { id: "fame-1.7-w", name: "FAME 1.7 W", price: 44.00, priceInCents: 4400, gender: "W", size: "1.7 oz", stock: 47 },
  { id: "fame-2.7-w", name: "FAME 2.7 W", price: 60.00, priceInCents: 6000, gender: "W", size: "2.7 oz", stock: 24 },
  { id: "fame-intense-2.7-w", name: "FAME INTENSE 2.7 W", price: 75.00, priceInCents: 7500, gender: "W", size: "2.7 oz", stock: 222 },
  
  // Givenchy
  { id: "amarige-3.4-w", name: "AMARIGE 3.4 W", price: 45.50, priceInCents: 4550, gender: "W", size: "3.4 oz", stock: 61 },
  { id: "givenchy-gentleman-3.3-m", name: "GIVENCHY GENTLEMAN 3.3 M", price: 39.25, priceInCents: 3925, gender: "M", size: "3.3 oz", stock: 17 },
  { id: "givenchy-pi-3.3-m", name: "GIVENCHY PI 3.3 M", price: 41.25, priceInCents: 4125, gender: "M", size: "3.3 oz", stock: 4 },
  
  // Azzaro
  { id: "chrome-azzaro-3.4-m", name: "CHROME AZZARO 3.4 M", price: 33.75, priceInCents: 3375, gender: "M", size: "3.4 oz", stock: 131 },
  { id: "chrome-azzaro-6.8-m", name: "CHROME AZZARO 6.8 M", price: 43.25, priceInCents: 4325, gender: "M", size: "6.8 oz", stock: 148 },
  { id: "chrome-azzaro-parfum-3.3-m", name: "CHROME AZZARO PARFUM 3.3 M", price: 38.25, priceInCents: 3825, gender: "M", size: "3.3 oz", stock: 36 },
  { id: "chrome-legent-4.2-m", name: "CHROME LEGENT 4.2 M", price: 23.25, priceInCents: 2325, gender: "M", size: "4.2 oz", stock: 31 },
  { id: "azzaro-3.4-m", name: "AZZARO 3.4 M", price: 25.50, priceInCents: 2550, gender: "M", size: "3.4 oz", stock: 21 },
  
  // Calvin Klein
  { id: "ck-one-3.4-m", name: "CK ONE 3.4 M", price: 22.25, priceInCents: 2225, gender: "M", size: "3.4 oz", stock: 71 },
  { id: "ck-one-6.7-m", name: "CK ONE 6.7 M", price: 28.00, priceInCents: 2800, gender: "M", size: "6.7 oz", stock: 63 },
  { id: "eternity-3.3-m", name: "ETERNITY 3.3 M", price: 29.50, priceInCents: 2950, gender: "M", size: "3.3 oz", stock: 41 },
  { id: "eternity-3.3-w", name: "ETERNITY 3.3 W", price: 30.75, priceInCents: 3075, gender: "W", size: "3.3 oz", stock: 17 },
  { id: "euphoria-3.3-w", name: "EUPHORIA 3.3 W", price: 34.75, priceInCents: 3475, gender: "W", size: "3.3 oz", stock: 13 },
  { id: "calvin-klein-man-3.4-m", name: "CALVIN KLEIN MAN 3.4 M", price: 23.25, priceInCents: 2325, gender: "M", size: "3.4 oz", stock: 42 },
  { id: "calvin-klein-defy-3.3-m", name: "CALVIN KLEIN DEFY 3.3 M", price: 42.00, priceInCents: 4200, gender: "M", size: "3.3 oz", stock: 5 },
  
  // Hugo Boss
  { id: "hugo-man-4.2-m", name: "HUGO MAN 4.2 M", price: 30.25, priceInCents: 3025, gender: "M", size: "4.2 oz", stock: 53 },
  { id: "boss-bottled-unlimited-3.3-m", name: "BOSS BOTTLED UNLIMITED 3.3 M", price: 39.75, priceInCents: 3975, gender: "M", size: "3.3 oz", stock: 27 },
  { id: "boss-man-3.3-m", name: "BOSS MAN 3.3 M", price: 26.25, priceInCents: 2625, gender: "M", size: "3.3 oz", stock: 5 },
  
  // Montblanc
  { id: "explorer-extreme-3.3-m", name: "EXPLORER EXTREME 3.3 M", price: 62.00, priceInCents: 6200, gender: "M", size: "3.3 oz", stock: 21 },
  { id: "explorer-platinum-3.3-m", name: "EXPLORER PLATINUM 3.3 M", price: 34.75, priceInCents: 3475, gender: "M", size: "3.3 oz", stock: 12 },
  
  // Dior
  { id: "dior-homme-intense-3.4-m", name: "DIOR HOMME INTENSE 3.4 M", price: 116.25, priceInCents: 11625, gender: "M", size: "3.4 oz", stock: 18 },
  
  // Armani
  { id: "acqua-di-gio-3.4-w", name: "ACQUA DI GIO 3.4 W", price: 67.25, priceInCents: 6725, gender: "W", size: "3.4 oz", stock: 14 },
  { id: "acqua-di-gio-elixir-1.6-m", name: "ACQUA DI GIO ELIXIR 1.6 M", price: 100.00, priceInCents: 10000, gender: "M", size: "1.6 oz", stock: 16 },
  { id: "acqua-di-gio-profondo-3.3-edt-m", name: "ACQUA DI GIO PROFONDO 3.3 EDT M", price: 79.25, priceInCents: 7925, gender: "M", size: "3.3 oz", stock: 11 },
  { id: "armani-code-elixir-1.6-m", name: "ARMANI CODE ELIXIR 1.6 M", price: 97.50, priceInCents: 9750, gender: "M", size: "1.6 oz", stock: 53 },
  { id: "armani-diamonds-2.5-m", name: "ARMANI DIAMONDS 2.5 M", price: 33.25, priceInCents: 3325, gender: "M", size: "2.5 oz", stock: 18 },
  { id: "emporio-diamonds-3.4-w", name: "EMPORIO DIAMONDS 3.4 W", price: 65.25, priceInCents: 6525, gender: "W", size: "3.4 oz", stock: 17 },
  
  // Bvlgari
  { id: "bvlgari-aqva-marin-3.4-m", name: "BVLGARI AQVA MARIN 3.4 M", price: 65.75, priceInCents: 6575, gender: "M", size: "3.4 oz", stock: 11 },
  { id: "bvlgari-blv-1.7-m", name: "BVLGARI BLV 1.7 M", price: 48.00, priceInCents: 4800, gender: "M", size: "1.7 oz", stock: 17 },
  { id: "bvlgari-man-in-black-3.4", name: "BVLGARI MAN IN BLACK 3.4", price: 76.25, priceInCents: 7625, gender: "M", size: "3.4 oz", stock: 15 },
  { id: "bvlgari-man-terrae-essence-3.4", name: "BVLGARI MAN TERRAE ESSENCE 3.4", price: 66.25, priceInCents: 6625, gender: "M", size: "3.4 oz", stock: 33 },
  { id: "bvlgari-omnia-coral-3.4-w", name: "BVLGARI OMNIA CORAL 3.4 W", price: 75.00, priceInCents: 7500, gender: "W", size: "3.4 oz", stock: 11 },
  { id: "bvlgari-omnia-gold-citrine-1.35-w", name: "BVLGARI OMNIA GOLD CITRINE 1.35 W", price: 37.00, priceInCents: 3700, gender: "W", size: "1.35 oz", stock: 18 },
  
  // Guess
  { id: "guess-1981-3.4-m", name: "GUESS 1981 3.4 M", price: 19.50, priceInCents: 1950, gender: "M", size: "3.4 oz", stock: 48 },
  { id: "guess-1981-3.4-w", name: "GUESS 1981 3.4 W", price: 19.50, priceInCents: 1950, gender: "W", size: "3.4 oz", stock: 19 },
  { id: "guess-2.5-w", name: "GUESS 2.5 W", price: 20.50, priceInCents: 2050, gender: "W", size: "2.5 oz", stock: 77 },
  { id: "guess-forever-2.5-m", name: "GUESS FOREVER 2.5 M", price: 20.25, priceInCents: 2025, gender: "M", size: "2.5 oz", stock: 33 },
  { id: "guess-gold-2.5-m", name: "GUESS GOLD 2.5 M", price: 20.50, priceInCents: 2050, gender: "M", size: "2.5 oz", stock: 16 },
  { id: "guess-gold-2.5-w", name: "GUESS GOLD 2.5 W", price: 22.00, priceInCents: 2200, gender: "W", size: "2.5 oz", stock: 28 },
  { id: "guess-man-2.5", name: "GUESS MAN 2.5", price: 17.75, priceInCents: 1775, gender: "M", size: "2.5 oz", stock: 66 },
  { id: "guess-marciano-3.4-w", name: "GUESS MARCIANO 3.4 W", price: 20.75, priceInCents: 2075, gender: "W", size: "3.4 oz", stock: 101 },
  { id: "guess-red-3.4-m", name: "GUESS RED 3.4 M", price: 15.00, priceInCents: 1500, gender: "M", size: "3.4 oz", stock: 131 },
  { id: "guess-seductive-men-3.4", name: "GUESS SEDUCTIVE MEN 3.4", price: 18.75, priceInCents: 1875, gender: "M", size: "3.4 oz", stock: 19 },
  { id: "guess-seductive-flirt-2.5-w", name: "GUESS SEDUCTIVE FLIRT 2.5 W", price: 20.00, priceInCents: 2000, gender: "W", size: "2.5 oz", stock: 18 },
  { id: "guess-uomo-3.4-m", name: "GUESS UOMO 3.4 M", price: 25.50, priceInCents: 2550, gender: "M", size: "3.4 oz", stock: 37 },
  
  // Burberry
  { id: "burberry-brit-men-3.3", name: "BURBERRY BRIT MEN 3.3", price: 30.25, priceInCents: 3025, gender: "M", size: "3.3 oz", stock: 29 },
  { id: "burberry-her-edt-3.3-w", name: "BURBERRY HER EDT 3.3 W", price: 71.00, priceInCents: 7100, gender: "W", size: "3.3 oz", stock: 51 },
  { id: "burberry-london-3.3-m", name: "BURBERRY LONDON 3.3 M", price: 31.25, priceInCents: 3125, gender: "M", size: "3.3 oz", stock: 4 },
  
  // Angel / Mugler
  { id: "angel-nova-3.3-w", name: "ANGEL NOVA 3.3 W", price: 74.25, priceInCents: 7425, gender: "W", size: "3.3 oz", stock: 47 },
  { id: "angel-fantasm-3.3-m", name: "ANGEL FANTASM 3.3 M", price: 66.25, priceInCents: 6625, gender: "M", size: "3.3 oz", stock: 13 },
  { id: "angel-fantasma-3.3-w", name: "ANGEL FANTASMA 3.3 W", price: 69.25, priceInCents: 6925, gender: "W", size: "3.3 oz", stock: 13 },
  { id: "alien-hypersense-3.0-w", name: "ALIEN HYPERSENSE 3.0 W", price: 72.75, priceInCents: 7275, gender: "W", size: "3.0 oz", stock: 9 },
  { id: "alien-eau-de-parfum-supra-florale-3.0-w", name: "ALIEN EAU DE PARFUM SUPRA FLORALE 3.0 W", price: 58.25, priceInCents: 5825, gender: "W", size: "3.0 oz", stock: 7 },
  
  // Elizabeth Arden
  { id: "arden-beauty-3.3-w", name: "ARDEN BEAUTY 3.3 W", price: 16.00, priceInCents: 1600, gender: "W", size: "3.3 oz", stock: 55 },
  { id: "5th-avenue-4.2-w", name: "5TH AVENUE 4.2 W", price: 23.75, priceInCents: 2375, gender: "W", size: "4.2 oz", stock: 13 },
  { id: "green-tea-3.3-w", name: "GREEN TEA 3.3 W", price: 14.75, priceInCents: 1475, gender: "W", size: "3.3 oz", stock: 6 },
  
  // Davidoff
  { id: "cool-water-4.2-m", name: "COOL WATER 4.2 M", price: 21.25, priceInCents: 2125, gender: "M", size: "4.2 oz", stock: 38 },
  { id: "cool-water-intense-4.2-m", name: "COOL WATER INTENSE 4.2 M", price: 29.25, priceInCents: 2925, gender: "M", size: "4.2 oz", stock: 25 },
  
  // Escada
  { id: "escada-brisa-cubana-3.3-w", name: "ESCADA BRISA CUBANA 3.3 W", price: 26.25, priceInCents: 2625, gender: "W", size: "3.3 oz", stock: 313 },
  { id: "escada-chiffon-sorbet-3.3-w", name: "ESCADA CHIFFON SORBET 3.3 W", price: 26.25, priceInCents: 2625, gender: "W", size: "3.3 oz", stock: 238 },
  { id: "escada-santorini-3.3-w", name: "ESCADA SANTORINI 3.3 W", price: 25.00, priceInCents: 2500, gender: "W", size: "3.3 oz", stock: 434 },
  { id: "escada-flor-del-sol-3.3-w", name: "ESCADA FLOR DEL SOL 3.3 W", price: 27.25, priceInCents: 2725, gender: "W", size: "3.3 oz", stock: 85 },
  { id: "escada-agua-del-sol-1.7-w", name: "ESCADA AGUA DEL SOL 1.7 W", price: 23.25, priceInCents: 2325, gender: "W", size: "1.7 oz", stock: 32 },
  
  // Game of Spades Series
  { id: "game-double-bonus-3.4", name: "GAME DOUBLE BONUS 3.4", price: 58.25, priceInCents: 5825, gender: "U", size: "3.4 oz", stock: 541 },
  { id: "game-of-spade-king-3.4", name: "GAME OF SPADE KING 3.4", price: 38.00, priceInCents: 3800, gender: "U", size: "3.4 oz", stock: 177 },
  { id: "game-of-spade-ace", name: "GAME OF SPADE ACE", price: 43.00, priceInCents: 4300, gender: "U", size: "3.4 oz", stock: 200 },
  { id: "game-of-spade-high-roller-3.4-m", name: "GAME OF SPADE HIGH ROLLER 3.4 M", price: 55.25, priceInCents: 5525, gender: "M", size: "3.4 oz", stock: 284 },
  { id: "game-of-spades-full-house-3.4-m", name: "GAME OF SPADES FULL HOUSE 3.4 M", price: 55.25, priceInCents: 5525, gender: "M", size: "3.4 oz", stock: 488 },
  { id: "game-of-spades-no-limit-3.4", name: "GAME OF SPADES NO LIMIT 3.4", price: 58.25, priceInCents: 5825, gender: "U", size: "3.4 oz", stock: 185 },
  { id: "game-of-spades-boston-3.4", name: "GAME OF SPADES BOSTON 3.4", price: 55.25, priceInCents: 5525, gender: "U", size: "3.4 oz", stock: 204 },
  { id: "game-of-spades-topaz-3.4", name: "GAME OF SPADES TOPAZ 3.4", price: 59.25, priceInCents: 5925, gender: "U", size: "3.4 oz", stock: 219 },
  { id: "game-of-spades-wild-card", name: "GAME OF SPADES WILD CARD", price: 51.25, priceInCents: 5125, gender: "U", size: "3.4 oz", stock: 154 },
  { id: "game-of-spades-opal-3.0-m", name: "GAME OF SPADES OPAL 3.0 M", price: 58.25, priceInCents: 5825, gender: "M", size: "3.0 oz", stock: 168 },
  
  // Hawas Series
  { id: "hawas-pink-3.38-w", name: "HAWAS PINK 3.38 W", price: 39.25, priceInCents: 3925, gender: "W", size: "3.38 oz", stock: 797 },
  { id: "hawas-fire-3.4-m", name: "HAWAS FIRE 3.4 M", price: 32.75, priceInCents: 3275, gender: "M", size: "3.4 oz", stock: 50 },
  { id: "hawas-rasasi-3.38-m", name: "HAWAS RASASI 3.38 M", price: 24.75, priceInCents: 2475, gender: "M", size: "3.38 oz", stock: 33 },
  { id: "hawas-viper-3.38-m", name: "HAWAS VIPER 3.38 M", price: 41.25, priceInCents: 4125, gender: "M", size: "3.38 oz", stock: 25 },
  
  // Paris Hilton
  { id: "gold-rush-3.4-m", name: "GOLD RUSH 3.4 M", price: 22.25, priceInCents: 2225, gender: "M", size: "3.4 oz", stock: 20 },
  { id: "gold-rush-3.4-w", name: "GOLD RUSH 3.4 W", price: 22.25, priceInCents: 2225, gender: "W", size: "3.4 oz", stock: 25 },
  { id: "gold-rush-nightfall-3.4-m", name: "GOLD RUSH NIGHTFALL 3.4 M", price: 29.25, priceInCents: 2925, gender: "M", size: "3.4 oz", stock: 72 },
  
  // Liz Claiborne
  { id: "bora-bora-3.4-m", name: "BORA BORA 3.4 M", price: 15.00, priceInCents: 1500, gender: "M", size: "3.4 oz", stock: 215 },
  { id: "bora-bora-3.4-w", name: "BORA BORA 3.4 W", price: 15.00, priceInCents: 1500, gender: "W", size: "3.4 oz", stock: 45 },
  { id: "curve-4.2-men", name: "CURVE 4.2 MEN", price: 26.50, priceInCents: 2650, gender: "M", size: "4.2 oz", stock: 42 },
  { id: "curve-crush-4.2-m", name: "CURVE CRUSH 4.2 M", price: 21.25, priceInCents: 2125, gender: "M", size: "4.2 oz", stock: 28 },
  { id: "curve-chill-4.2-m", name: "CURVE CHILL 4.2 M", price: 16.25, priceInCents: 1625, gender: "M", size: "4.2 oz", stock: 18 },
  { id: "claiborne-sport-3.4-m", name: "CLAIBORNE SPORT 3.4 M", price: 13.25, priceInCents: 1325, gender: "M", size: "3.4 oz", stock: 149 },
  
  // Marc Jacobs
  { id: "daisy-dream-3.3-w", name: "DAISY DREAM 3.3 W", price: 38.00, priceInCents: 3800, gender: "W", size: "3.3 oz", stock: 58 },
  { id: "daisy-love-eau-so-sweet-3.3-w", name: "DAISY LOVE EAU SO SWEET 3.3 W", price: 62.25, priceInCents: 6225, gender: "W", size: "3.3 oz", stock: 11 },
  { id: "honey-marc-jacobs-3.3-w", name: "HONEY MARC JACOBS 3.3 W", price: 27.25, priceInCents: 2725, gender: "W", size: "3.3 oz", stock: 36 },
  
  // Lancôme
  { id: "idole-aura-3.4-w", name: "IDOLE AURA 3.4 W", price: 79.00, priceInCents: 7900, gender: "W", size: "3.4 oz", stock: 19 },
  { id: "idole-leau-de-parfum-3.4-w", name: "IDOLE L EAU DE PARFUM 3.4 W", price: 89.25, priceInCents: 8925, gender: "W", size: "3.4 oz", stock: 32 },
  
  // Flowerbomb
  { id: "flowerbomb-midnight-3.4-w", name: "FLOWERBOMB MIDNIGHT 3.4 W", price: 85.75, priceInCents: 8575, gender: "W", size: "3.4 oz", stock: 32 },
  
  // Creed (Premium)
  { id: "creed-aventus-3.3-m", name: "CREED AVENTUS 3.3 M", price: 335.25, priceInCents: 33525, gender: "M", size: "3.3 oz", stock: 5 },
  { id: "creed-absolu-aventus-2.5-m", name: "CREED ABSOLU AVENTUS 2.5 M", price: 315.00, priceInCents: 31500, gender: "M", size: "2.5 oz", stock: 5 },
  
  // Initio (Premium)
  { id: "initio-oud-for-greatness-3.4", name: "INITIO OUD FOR GREATNESS 3.4", price: 232.25, priceInCents: 23225, gender: "U", size: "3.4 oz", stock: 6 },
  
  // Bond No. 9 (Premium)
  { id: "bond-the-scent-of-peace-3.3-m", name: "BOND THE SCENT OF PEACE 3.3 M", price: 212.25, priceInCents: 21225, gender: "M", size: "3.3 oz", stock: 19 },
  { id: "bond-tribeca-u", name: "BOND TRIBECA U", price: 225.25, priceInCents: 22525, gender: "U", size: "3.3 oz", stock: 19 },
  { id: "bond-dubai-platinum-u", name: "BOND DUBAI PLATINUM U", price: 239.25, priceInCents: 23925, gender: "U", size: "3.3 oz", stock: 6 },
  
  // Cuba (Budget Friendly)
  { id: "cuba-blue-3.3-m", name: "CUBA BLUE 3.3 M", price: 6.25, priceInCents: 625, gender: "M", size: "3.3 oz", stock: 287 },
  { id: "cuba-brown-3.3-m", name: "CUBA BROWN 3.3 M", price: 6.50, priceInCents: 650, gender: "M", size: "3.3 oz", stock: 147 },
  { id: "cuba-gold-1.17-m", name: "CUBA GOLD 1.17 M", price: 3.00, priceInCents: 300, gender: "M", size: "1.17 oz", stock: 240 },
  
  // Rollon Collection (Travel Size)
  { id: "cloud-rollon", name: "CLOUD ROLLON", price: 1.50, priceInCents: 150, gender: "W", size: "12ml", stock: 2490 },
  { id: "bad-boy-rollon", name: "BAD BOY ROLLON", price: 1.50, priceInCents: 150, gender: "M", size: "12ml", stock: 387 },
  { id: "good-girl-blush-rollon", name: "GOOD GIRL BLUSH ROLLON", price: 1.50, priceInCents: 150, gender: "W", size: "12ml", stock: 591 },
  { id: "creed-aventus-rollon", name: "CREED AVENTUS ROLLON", price: 1.50, priceInCents: 150, gender: "M", size: "12ml", stock: 803 },
  { id: "eros-rollon", name: "EROS ROLLON", price: 1.50, priceInCents: 150, gender: "M", size: "12ml", stock: 692 },
  { id: "gucci-bloom-rollon", name: "GUCCI BLOOM ROLLON", price: 1.50, priceInCents: 150, gender: "W", size: "12ml", stock: 625 },
  { id: "gucci-guilty-men-rollon", name: "GUCCI GUILTY MEN ROLLON", price: 1.50, priceInCents: 150, gender: "M", size: "12ml", stock: 328 },
  { id: "gucci-guilty-rollon-w", name: "GUCCI GUILTY ROLLON W", price: 1.50, priceInCents: 150, gender: "W", size: "12ml", stock: 216 },
  { id: "ck-one-roll-on", name: "CK ONE ROLL ON", price: 1.50, priceInCents: 150, gender: "U", size: "12ml", stock: 533 },
  { id: "coach-floral-rollon-w", name: "COACH FLORAL ROLLON W", price: 1.50, priceInCents: 150, gender: "W", size: "12ml", stock: 1071 },
  { id: "coach-rollon", name: "COACH ROLLON", price: 1.50, priceInCents: 150, gender: "U", size: "12ml", stock: 347 },
  { id: "drakkar-rollon", name: "DRAKKAR ROLLON", price: 1.50, priceInCents: 150, gender: "M", size: "12ml", stock: 317 },
  { id: "delina-rollon", name: "DELINA ROLLON", price: 1.50, priceInCents: 150, gender: "W", size: "12ml", stock: 540 },
  { id: "erba-pura-rollon", name: "ERBA PURA ROLLON", price: 1.50, priceInCents: 150, gender: "U", size: "12ml", stock: 771 },
  { id: "flowerbomb-rollon", name: "FLOWERBOMB ROLLON", price: 1.50, priceInCents: 150, gender: "W", size: "12ml", stock: 305 },
  { id: "greenwich-rollon", name: "GREENWICH ROLLON", price: 1.50, priceInCents: 150, gender: "U", size: "12ml", stock: 809 },
  { id: "i-want-choo-rollon", name: "I WANT CHOO ROLLON", price: 1.50, priceInCents: 150, gender: "W", size: "12ml", stock: 325 },
  { id: "burbery-her-rollon", name: "BURBERY HER ROLLON", price: 1.50, priceInCents: 150, gender: "W", size: "12ml", stock: 99 },
  { id: "armani-rollon", name: "ARMANI ROLLON", price: 1.50, priceInCents: 150, gender: "M", size: "12ml", stock: 275 },
  { id: "212-rollon", name: "212 ROLLON", price: 1.50, priceInCents: 150, gender: "M", size: "12ml", stock: 189 },
  { id: "acqua-di-gio-rollon", name: "ACQUA DI GIO ROLLON", price: 1.50, priceInCents: 150, gender: "M", size: "12ml", stock: 89 },
  { id: "angel-men-rollon", name: "ANGEL MEN ROLLON", price: 1.50, priceInCents: 150, gender: "M", size: "12ml", stock: 192 },
  { id: "dolce-gabbana-rollon-m", name: "DOLCE GABBANA ROLLON M", price: 1.50, priceInCents: 150, gender: "M", size: "12ml", stock: 49 },
  { id: "dolce-k-rollon-m", name: "DOLCE K ROLLON M", price: 1.50, priceInCents: 150, gender: "M", size: "12ml", stock: 79 },
  { id: "eternity-rollon", name: "ETERNITY ROLLON", price: 1.50, priceInCents: 150, gender: "U", size: "12ml", stock: 165 },
  { id: "black-code-men-rolon", name: "BLACK CODE MEN ROLON", price: 1.50, priceInCents: 150, gender: "M", size: "12ml", stock: 668 },
  { id: "bain-champain-rollon", name: "BAIN CHAMPAIN ROLLON", price: 1.50, priceInCents: 150, gender: "U", size: "12ml", stock: 333 },
  { id: "baccarat-rouge-540-oil", name: "BACCARAT ROUGE 540 OIL", price: 1.50, priceInCents: 150, gender: "U", size: "12ml", stock: 68 },
  
  // Dubai Collection
  { id: "dubai-nights-midnight-3.4-m", name: "DUBAI NIGHTS MIDNIGHT 3.4 M", price: 32.75, priceInCents: 3275, gender: "M", size: "3.4 oz", stock: 461 },
  { id: "dubai-delicacy-kunafa-3.4-w", name: "DUBAI DELICACY KUNAFA 3.4 W", price: 30.00, priceInCents: 3000, gender: "W", size: "3.4 oz", stock: 238 },
  { id: "dubai-delicacy-red-velvet-3.4-w", name: "DUBAI DELICACY RED VELVET 3.4 W", price: 30.00, priceInCents: 3000, gender: "W", size: "3.4 oz", stock: 166 },
  
  // More Popular Items
  { id: "anarchy-fearless-3.4-m", name: "ANARCHY FEARLESS 3.4 M", price: 50.25, priceInCents: 5025, gender: "M", size: "3.4 oz", stock: 334 },
  { id: "anarchy-unstoppable-3.4-m", name: "ANARCHY UNSTOPPABLE 3.4 M", price: 41.25, priceInCents: 4125, gender: "M", size: "3.4 oz", stock: 246 },
  { id: "anarchy-no-rules-3.4-m", name: "ANARCHY NO RULES 3.4 M", price: 38.25, priceInCents: 3825, gender: "M", size: "3.4 oz", stock: 128 },
  { id: "dangerously-good-3.4-m", name: "DANGEROUSLY GOOD 3.4 M", price: 37.25, priceInCents: 3725, gender: "M", size: "3.4 oz", stock: 209 },
  { id: "alegria-de-vivir-3.4-w", name: "ALEGRIA DE VIVIR 3.4 W", price: 81.75, priceInCents: 8175, gender: "W", size: "3.4 oz", stock: 157 },
  { id: "call-me-darling-3.4-w", name: "CALL ME DARLING 3.4 W", price: 81.75, priceInCents: 8175, gender: "W", size: "3.4 oz", stock: 135 },
  { id: "fearless-fabulous-3.4-w", name: "FEARLESS FABULOUS 3.4 W", price: 81.75, priceInCents: 8175, gender: "W", size: "3.4 oz", stock: 173 },
  { id: "indomitable-3.4-w", name: "INDOMITABLE 3.4 W", price: 21.25, priceInCents: 2125, gender: "W", size: "3.4 oz", stock: 482 },
  { id: "glacier-bold-3.4-m", name: "GLACIER BOLD 3.4 M", price: 20.25, priceInCents: 2025, gender: "M", size: "3.4 oz", stock: 266 },
  { id: "glacier-le-noir-3.4-m", name: "GLACIER LE NOIR 3.4 M", price: 17.25, priceInCents: 1725, gender: "M", size: "3.4 oz", stock: 295 },
  { id: "fierce-3.4-m", name: "FIERCE 3.4 M", price: 40.00, priceInCents: 4000, gender: "M", size: "3.4 oz", stock: 69 },
  { id: "fierce-6.7-m", name: "FIERCE 6.7 M", price: 56.00, priceInCents: 5600, gender: "M", size: "6.7 oz", stock: 142 },
  { id: "be-delicious-3.4-w", name: "BE DELICIOUS 3.4 W", price: 38.25, priceInCents: 3825, gender: "W", size: "3.4 oz", stock: 38 },
  { id: "contradiction-3.3-m", name: "CONTRADICTION 3.3 M", price: 24.75, priceInCents: 2475, gender: "M", size: "3.3 oz", stock: 19 },
  { id: "contradiction-3.4-w", name: "CONTRADICTION 3.4 W", price: 24.75, priceInCents: 2475, gender: "W", size: "3.4 oz", stock: 18 },
  { id: "copper-black-3.4-m", name: "COPPER BLACK 3.4 M", price: 31.25, priceInCents: 3125, gender: "M", size: "3.4 oz", stock: 7 },
  { id: "ck-be-3.4-m", name: "CK BE 3.4 M", price: 19.75, priceInCents: 1975, gender: "M", size: "3.4 oz", stock: 18 },
  { id: "abercrombie-away-weekend-3.4-m", name: "ABERCROMBIE AWAY WEEKEND 3.4 M", price: 34.00, priceInCents: 3400, gender: "M", size: "3.4 oz", stock: 39 },
  { id: "abercrombie-away-weekend-3.4-w", name: "ABERCROMBIE AWAY WEEKEND 3.4 W", price: 34.00, priceInCents: 3400, gender: "W", size: "3.4 oz", stock: 50 },
  { id: "abercrombie-authentic-3.4-m", name: "ABERCROMBIE AUTHENTIC 3.4 M", price: 25.00, priceInCents: 2500, gender: "M", size: "3.4 oz", stock: 12 },
  
  // Billie Eilish
  { id: "eilish-numero-dos-3.4-w", name: "EILISH NUMERO DOS 3.4 W", price: 38.00, priceInCents: 3800, gender: "W", size: "3.4 oz", stock: 43 },
  
  // Fantasy Collection (Britney)
  { id: "fantasy-candied-3.3-w", name: "FANTASY CANDIED 3.3 W", price: 17.25, priceInCents: 1725, gender: "W", size: "3.3 oz", stock: 144 },
  { id: "fantasy-electric-3.3-w", name: "FANTASY ELECTRIC 3.3 W", price: 17.25, priceInCents: 1725, gender: "W", size: "3.3 oz", stock: 101 },
  { id: "fantasy-intimate-edition-3.3-w", name: "FANTASY INTIMATE EDITION 3.3 W", price: 15.25, priceInCents: 1525, gender: "W", size: "3.3 oz", stock: 48 },
  { id: "fantasy-sheer-3.3-w", name: "FANTASY SHEER 3.3 W", price: 21.75, priceInCents: 2175, gender: "W", size: "3.3 oz", stock: 27 },
  { id: "blissful-fantasy-3.3-w", name: "BLISSFUL FANTASY 3.3 W", price: 23.75, priceInCents: 2375, gender: "W", size: "3.3 oz", stock: 178 },
  { id: "festive-fantasy-3.3-w", name: "FESTIVE FANTASY 3.3 W", price: 16.25, priceInCents: 1625, gender: "W", size: "3.3 oz", stock: 118 },
  
  // Can Can (Paris Hilton)
  { id: "can-can-burlesque-3.4-w", name: "CAN CAN BURLESQUE 3.4 W", price: 23.25, priceInCents: 2325, gender: "W", size: "3.4 oz", stock: 76 },
  
  // Choco & Gourmand
  { id: "choco-pista-macaron-1.7-w", name: "CHOCO PISTA MACARON 1.7 W", price: 10.00, priceInCents: 1000, gender: "W", size: "1.7 oz", stock: 410 },
  { id: "creamy-biscuit-3.4-u", name: "CREAMY BISCUIT 3.4 U", price: 27.25, priceInCents: 2725, gender: "U", size: "3.4 oz", stock: 71 },
  { id: "caramel-cascade-paris-corner-3.4-w", name: "CARAMEL CASCADE PARIS CORNER 3.4 W", price: 19.25, priceInCents: 1925, gender: "W", size: "3.4 oz", stock: 50 },
  { id: "december-vanilla-2.9", name: "DECEMBER VANILLA 2.9", price: 24.25, priceInCents: 2425, gender: "U", size: "2.9 oz", stock: 69 },
  { id: "forbidden-sugar-emir-3.4", name: "FORBIDDEN SUGAR EMIR 3.4", price: 22.25, priceInCents: 2225, gender: "U", size: "3.4 oz", stock: 117 },
  
  // Flaunt Series
  { id: "flaunt-3.4-w", name: "FLAUNT 3.4 W", price: 8.75, priceInCents: 875, gender: "W", size: "3.4 oz", stock: 359 },
  { id: "flaunt-rouge-3.4-w", name: "FLAUNT ROUGE 3.4 W", price: 10.75, priceInCents: 1075, gender: "W", size: "3.4 oz", stock: 451 },
  { id: "flaunt-seduction-3.4-w", name: "FLAUNT SEDUCTION 3.4 W", price: 9.25, priceInCents: 925, gender: "W", size: "3.4 oz", stock: 316 },
  
  // Flavia
  { id: "flavia-coral-3.4", name: "FLAVIA CORAL 3.4", price: 31.75, priceInCents: 3175, gender: "U", size: "3.4 oz", stock: 32 },
  { id: "flavia-diamant-noir-3.4", name: "FLAVIA DIAMANT NOIR 3.4", price: 31.75, priceInCents: 3175, gender: "U", size: "3.4 oz", stock: 25 },
  { id: "flavia-ember-3.4", name: "FLAVIA EMBER 3.4", price: 31.75, priceInCents: 3175, gender: "U", size: "3.4 oz", stock: 52 },
  
  // Give Me Series
  { id: "give-me-gourmand-whipped-pleasure-2.53", name: "GIVE ME GOURMAND WHIPPED PLEASURE 2.53", price: 36.00, priceInCents: 3600, gender: "W", size: "2.53 oz", stock: 211 },
  { id: "give-me-vanilla-freak-2.53-w", name: "GIVE ME VANILLA FREAK 2.53 W", price: 36.00, priceInCents: 3600, gender: "W", size: "2.53 oz", stock: 183 },
  
  // Electro Touch & More
  { id: "electro-touch-edp-3.4-w", name: "ELECTRO TOUCH EDP 3.4 W", price: 34.75, priceInCents: 3475, gender: "W", size: "3.4 oz", stock: 123 },
  { id: "halloween-blossom-3.4-w", name: "HALLOWEEN BLOSSOM 3.4 W", price: 26.00, priceInCents: 2600, gender: "W", size: "3.4 oz", stock: 91 },
  { id: "halloween-man-x-4.2-m", name: "HALLOWEEN MAN X 4.2 M", price: 25.00, priceInCents: 2500, gender: "M", size: "4.2 oz", stock: 48 },
  
  // Encre Noir
  { id: "encre-noir-sport-3.3-m", name: "ENCRE NOIR SPORT 3.3 M", price: 25.75, priceInCents: 2575, gender: "M", size: "3.3 oz", stock: 54 },
  
  // More Popular Fragrances
  { id: "ana-abiyed-coral-2.04-w", name: "ANA ABIYED CORAL 2.04 W", price: 18.25, priceInCents: 1825, gender: "W", size: "2.04 oz", stock: 386 },
  { id: "ana-abiyed-scarlet-2.04", name: "ANA ABIYED SCARLET 2.04", price: 22.75, priceInCents: 2275, gender: "U", size: "2.04 oz", stock: 74 },
  { id: "ana-abiyedh-i-am-white-2.04", name: "ANA ABIYEDH I AM WHITE 2.04", price: 15.25, priceInCents: 1525, gender: "U", size: "2.04 oz", stock: 179 },
  { id: "badee-honor-glory-3.4-u", name: "BADEE HONOR GLORY 3.4 U", price: 21.25, priceInCents: 2125, gender: "U", size: "3.4 oz", stock: 206 },
  { id: "brown-shoe-3.4-w", name: "BROWN SHOE 3.4 W", price: 12.00, priceInCents: 1200, gender: "W", size: "3.4 oz", stock: 1576 },
  { id: "have-fun-3.3-w", name: "HAVE FUN 3.3 W", price: 8.75, priceInCents: 875, gender: "W", size: "3.3 oz", stock: 277 },
  { id: "habik-3.4-m", name: "HABIK 3.4 M", price: 27.00, priceInCents: 2700, gender: "M", size: "3.4 oz", stock: 178 },
  { id: "his-confession-3.4", name: "HIS CONFESSION 3.4", price: 29.25, priceInCents: 2925, gender: "M", size: "3.4 oz", stock: 121 },
  { id: "atlas-1.85", name: "ATLAS 1.85", price: 25.75, priceInCents: 2575, gender: "U", size: "1.85 oz", stock: 163 },
  { id: "artisan-ethnique-3.4", name: "ARTISAN ETHNIQUE 3.4", price: 26.75, priceInCents: 2675, gender: "U", size: "3.4 oz", stock: 110 },
  { id: "afeef-latafa-3.4", name: "AFEEF LATAFA 3.4", price: 32.25, priceInCents: 3225, gender: "U", size: "3.4 oz", stock: 23 },
  { id: "ajwad-lattafa-2.04", name: "AJWAD LATTAFA 2.04", price: 17.00, priceInCents: 1700, gender: "U", size: "2.04 oz", stock: 12 },
  { id: "forever-wanted-elixir-3.38-m", name: "FOREVER WANTED ELIXIR 3.38 M", price: 83.50, priceInCents: 8350, gender: "M", size: "3.38 oz", stock: 225 },
  { id: "fragrances-story-the-must-3.4-m", name: "FRAGRANCES STORY THE MUST 3.4 M", price: 35.25, priceInCents: 3525, gender: "M", size: "3.4 oz", stock: 121 },
  { id: "drug-fragrance-story-3.4-m", name: "DRUG FRAGRANCE STORY 3.4 M", price: 25.25, priceInCents: 2525, gender: "M", size: "3.4 oz", stock: 83 },
  { id: "gentle-elsatys-3.3-m", name: "GENTLE ELSATYS 3.3 M", price: 16.75, priceInCents: 1675, gender: "M", size: "3.3 oz", stock: 51 },
  { id: "elsatys-elixir-3.6-m", name: "ELSATYS ELIXIR 3.6 M", price: 17.75, priceInCents: 1775, gender: "M", size: "3.6 oz", stock: 173 },
  { id: "insurrection-3.3-m", name: "INSURRECTION 3.3 M", price: 17.75, priceInCents: 1775, gender: "M", size: "3.3 oz", stock: 97 },
  { id: "insurrection-2-black-3.0-m", name: "INSURRECTION 2 BLACK 3.0 M", price: 18.50, priceInCents: 1850, gender: "M", size: "3.0 oz", stock: 39 },
  { id: "grey-flannel-4.0-m", name: "GREY FLANNEL 4.0 M", price: 15.25, priceInCents: 1525, gender: "M", size: "4.0 oz", stock: 46 },
  { id: "acqua-essenziale-3.4-m", name: "ACQUA ESSENZIALE 3.4 M", price: 30.00, priceInCents: 3000, gender: "M", size: "3.4 oz", stock: 14 },
  { id: "aqua-essenziale-1.7-m", name: "AQUA ESSENZIALE 1.7 M", price: 20.00, priceInCents: 2000, gender: "M", size: "1.7 oz", stock: 97 },
  { id: "good-fortune-3.04-w", name: "GOOD FORTUNE 3.04 W", price: 94.25, priceInCents: 9425, gender: "W", size: "3.04 oz", stock: 10 },
  { id: "desire-blue-3.4-m", name: "DESIRE BLUE 3.4 M", price: 22.75, priceInCents: 2275, gender: "M", size: "3.4 oz", stock: 65 },
  { id: "amor-amor-3.4-w", name: "AMOR AMOR 3.4 W", price: 29.25, priceInCents: 2925, gender: "W", size: "3.4 oz", stock: 16 },
  { id: "drakkar-intense-3.4-m", name: "DRAKKAR INTENSE 3.4 M", price: 21.25, priceInCents: 2125, gender: "M", size: "3.4 oz", stock: 25 },
  { id: "black-point-3.4-m", name: "BLACK POINT 3.4 M", price: 7.25, priceInCents: 725, gender: "M", size: "3.4 oz", stock: 189 },
  { id: "black-point-sport-3.4-m", name: "BLACK POINT SPORT 3.4 M", price: 7.25, priceInCents: 725, gender: "M", size: "3.4 oz", stock: 47 },
  { id: "decans-recargable", name: "DECANS RECARGABLE", price: 1.50, priceInCents: 150, gender: "U", size: "10ml", stock: 1261 },
  { id: "chants-edp-tenderina-3.4-w", name: "CHANTS EDP TENDERINA 3.4 W", price: 15.25, priceInCents: 1525, gender: "W", size: "3.4 oz", stock: 234 },
  { id: "athena-3.4-w", name: "ATHENA 3.4 W", price: 5.00, priceInCents: 500, gender: "W", size: "3.4 oz", stock: 117 },
  { id: "agua-de-bambu-4.0-m", name: "AGUA DE BAMBU 4.0 M", price: 5.00, priceInCents: 500, gender: "M", size: "4.0 oz", stock: 105 },
  { id: "fairouz-3.4", name: "FAIROUZ 3.4", price: 5.00, priceInCents: 500, gender: "U", size: "3.4 oz", stock: 414 },
  { id: "ajmal-v-color-oro", name: "AJMAL V COLOR ORO", price: 5.00, priceInCents: 500, gender: "U", size: "3.4 oz", stock: 32 },
  { id: "albane-oud-45-3.3-m", name: "ALBANE OUD 45 3.3 M", price: 10.00, priceInCents: 1000, gender: "M", size: "3.3 oz", stock: 27 },
  { id: "animal-rock-shakira-2.7-w", name: "ANIMAL ROCK SHAKIRA 2.7 W", price: 5.00, priceInCents: 500, gender: "W", size: "2.7 oz", stock: 104 },
  { id: "ciara-2.3-w-100-strength", name: "CIARA 2.3 W 100% STRENGTH", price: 8.25, priceInCents: 825, gender: "W", size: "2.3 oz", stock: 60 },
  { id: "ciara-80-2.3-w", name: "CIARA 80 2.3 W", price: 8.25, priceInCents: 825, gender: "W", size: "2.3 oz", stock: 73 },
  { id: "exclamation-1.7-w", name: "EXCLAMATION 1.7 W", price: 12.00, priceInCents: 1200, gender: "W", size: "1.7 oz", stock: 29 },
]

// Top Sellers - Puerto Rico Favorites (IDs for featured section)
export const topSellersIds = [
  "212-vip-black-3.4-m",
  "bad-boy-elixir-3.4-m", 
  "jean-paul-elixir-tester-4.2-m",
  "amber-oud-gold-4.0-m",
  "9-pm-elixir-3.4-m",
  "yara-elixir-3.4-w",
  "bharara-king-3.4-m",
  "black-opium-rollon"
]

export const topSellers = products.filter(p => topSellersIds.includes(p.id))
