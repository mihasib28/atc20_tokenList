// ================= TOKEN SETTINGS =================
const TOKENS_PER_PAGE = 20;
let currentPage = 1;
let currentList = [];

// Token list (edit freely)
const tokens = [
  {
    name: "Atlantis USD (USDA)",
    address: "AC3ZNwL2dMZGj7thrARcPvZCYGjuTD5C9V8KXdBcCiqQ",
    logo: "https://tokenlist.atcscan.io/metadata/AC3ZNwL2dMZGj7thrARcPvZCYGjuTD5C9V8KXdBcCiqQ/logo.png",
    category: "stable",
  },

  {
    name: "CNY Coin (CNYC)",
    address: "ACQqeKkAbnZgp4G8aZsUxQ3We4kgGa55XG1HvsfkqnZR",
    logo: "https://tokenlist.atcscan.io/metadata/ACQqeKkAbnZgp4G8aZsUxQ3We4kgGa55XG1HvsfkqnZR/logo.png",
    category: "stable",
  },
  {
    name: "Blockchain USD (USDB)",
    address: "ACZDghSb25an1yfMQV3cdM5VvX9JDcUvePhksjCa92yf",
    logo: "https://tokenlist.atcscan.io/metadata/ACZDghSb25an1yfMQV3cdM5VvX9JDcUvePhksjCa92yf/logo.png",
    category: "stable",
  },

  {
    name: "Binance USD (BUSD)",
    address: "ACQLqcatoR3nKLJ3Hs8m7ydxHUib5BWiph7To2ATodhU",
    logo: "https://tokenlist.atcscan.io/metadata/ACQLqcatoR3nKLJ3Hs8m7ydxHUib5BWiph7To2ATodhU/logo.png",
    category: "stable",
  },

  {
    name: "Diana the Earth Queen (QUEEN)",
    address: "ACtPnTY6cCqdPWTfvFPJ4mDRAPTyDa1xfruVR41E1SG4",
    logo: "https://tokenlist.atcscan.io/metadata/ACtPnTY6cCqdPWTfvFPJ4mDRAPTyDa1xfruVR41E1SG4/logo.png",
    category: "commemorative",
  },
  {
    name: "Elon the Mars Emperor (EMPEROR)",
    address: "ACFTFdoB2woJhqh2NEDLQAxSCFg7kQuJJAiGHpuJ4WYY",
    logo: "https://tokenlist.atcscan.io/metadata/ACFTFdoB2woJhqh2NEDLQAxSCFg7kQuJJAiGHpuJ4WYY/logo.png",
    category: "meme",
  },
  {
    name: "Trump the Crypto King (KING)",
    address: "ACYAht7qi27gMNU7ZzTXzy2RTNVZKnfspvzuM5MF7Anq",
    logo: "https://tokenlist.atcscan.io/metadata/ACYAht7qi27gMNU7ZzTXzy2RTNVZKnfspvzuM5MF7Anq/logo.png",
    category: "meme",
  },
  {
    name: "Dr Max the Cat wif Hat (MAX)",
    address: "AC8dLeddJKEyha842ZQiRLLooysrVeB9NVsV7hMwRKad",
    logo: "https://tokenlist.atcscan.io/metadata/AC8dLeddJKEyha842ZQiRLLooysrVeB9NVsV7hMwRKad/logo.png",
    category: "meme",
  },
  {
    name: "Dogecoin (DOGE)",
    address: "AChqa1LZ9sFQtLfPhNsPrcMkXGFkgfhnw2bb3TjbdW9V",
    logo: "https://tokenlist.atcscan.io/metadata/AChqa1LZ9sFQtLfPhNsPrcMkXGFkgfhnw2bb3TjbdW9V/logo.jpg",
    category: "meme",
  },
  {
    name: "Solana (SOL)",
    address: "ACkAVQaCdvb3rqT1GsGNEqM5oimdw5jvbKc6Dz1QaBaT",
    logo: "https://tokenlist.atcscan.io/metadata/ACkAVQaCdvb3rqT1GsGNEqM5oimdw5jvbKc6Dz1QaBaT/logo.png",
    category: "utility",
  },
  {
    name: "Ethereum (ETH)",
    address: "ACY7LgNL5QV2SHKiAoYRvBAvEaZfLG4mBoUyYW5kjrcY",
    logo: "https://tokenlist.atcscan.io/metadata/ACY7LgNL5QV2SHKiAoYRvBAvEaZfLG4mBoUyYW5kjrcY/logo.png",
    category: "utility",
  },
  {
    name: "Bitcoin (BTC)",
    address: "ACGdPai5V3wgtgbB1iG3rpzMpBCaNyZofyqXPvQ45h7r",
    logo: "https://tokenlist.atcscan.io/metadata/ACGdPai5V3wgtgbB1iG3rpzMpBCaNyZofyqXPvQ45h7r/logo.png",
    category: "utility",
  },

  {
    name: "Tron (TRX)",
    address: "ACjeBtLQjKvqu8vPW7pa7ik6HPgz2meCyAofYpXMX2Wy",
    logo: "https://tokenlist.atcscan.io/metadata/ACjeBtLQjKvqu8vPW7pa7ik6HPgz2meCyAofYpXMX2Wy/logo.png",
    category: "utility",
  },
  {
    name: "Binance Coin (BNB)",
    address: "AC8wvafPjCdtC1L38Y1vkQiQRKVQQgfm1xsiS6AJRpXS",
    logo: "https://tokenlist.atcscan.io/metadata/AC8wvafPjCdtC1L38Y1vkQiQRKVQQgfm1xsiS6AJRpXS/logo.png",
    category: "utility",
  },
  {
    name: "Pepe (PEPE)",
    address: "AChtEnyeWybwDkMFaiDtWFavne7R3uZ2JCTguQog5kq5",
    logo: "https://tokenlist.atcscan.io/metadata/AChtEnyeWybwDkMFaiDtWFavne7R3uZ2JCTguQog5kq5/logo.png",
    category: "meme",
  },
  {
    name: "Charlie Kirk the American Hero (KIRK)",
    address: "ACmXEAEZCgi8BHAvgKqzeovTBNfpTZjv5dQypzV3pLjF",
    logo: "https://tokenlist.atcscan.io/metadata/ACmXEAEZCgi8BHAvgKqzeovTBNfpTZjv5dQypzV3pLjF/logo.png",
    category: "commemorative",
  },
  {
    name: "AzukiCoin (AZUKI)",
    address: "ACuaycuupvSBHZ7ijU7gT6GvSapm81khxa7itVjrsAVP",
    logo: "https://tokenlist.atcscan.io/metadata/ACuaycuupvSBHZ7ijU7gT6GvSapm81khxa7itVjrsAVP/logo.png",
    category: "commemorative",
  },
  {
    name: "Labubu the Atlantis Fairy (LABUBU)",
    address: "ACXDi4GUfURUSzeEeVtybJ2HKnuhNphovZ6KmS6XLp9R",
    logo: "https://tokenlist.atcscan.io/metadata/ACXDi4GUfURUSzeEeVtybJ2HKnuhNphovZ6KmS6XLp9R/logo.png",
    category: "meme",
  },

  {
    name: "Stealth Attack Drone (GJ11)",
    address: "AC9RwDs7HoV65NFd5QtnkUPwrWTnANktAcoak33Qv4xv",
    logo: "https://tokenlist.atcscan.io/metadata/AC9RwDs7HoV65NFd5QtnkUPwrWTnANktAcoak33Qv4xv/logo.png",
    category: "commemorative",
  },
  {
    name: "LiuqiuCoin (LIUQIU)",
    address: "ACj9UQvTi1D6pN7X6Dnmcgzpsnam9Ab5ikZ8LAVLVSkv",
    logo: "https://tokenlist.atcscan.io/metadata/ACj9UQvTi1D6pN7X6Dnmcgzpsnam9Ab5ikZ8LAVLVSkv/logo.png",
    category: "commemorative",
  },
  {
    name: "Dogwifhat (WIF)",
    address: "ACD3uWgLTWCyvaKfYyCKhdUB3FTLUGtgyyVrGjACVq1Y",
    logo: "https://tokenlist.atcscan.io/metadata/ACD3uWgLTWCyvaKfYyCKhdUB3FTLUGtgyyVrGjACVq1Y/logo.png",
    category: "meme",
  },
  {
    name: "Popcat (POPCAT)",
    address: "ACygPor7YK4NJcEpoyigr6qkM8B5SEGTVnc8YQLC9iMY",
    logo: "https://tokenlist.atcscan.io/metadata/ACygPor7YK4NJcEpoyigr6qkM8B5SEGTVnc8YQLC9iMY/logo.png",
    category: "meme",
  },
  {
    name: "Shiba Inu (SHIB)",
    address: "ACFBDRVWMRvp9iYCrAVWbGfzr9tE5ddSapaoUugcKay3",
    logo: "https://tokenlist.atcscan.io/metadata/ACFBDRVWMRvp9iYCrAVWbGfzr9tE5ddSapaoUugcKay3/logo.png",
    category: "meme",
  },
  {
    name: "Wen (WEN)",
    address: "ACSghPtkMLkZ7qP1Bw5nbFKhV8VtvfNaWDjbEoyo2XWt",
    logo: "https://tokenlist.atcscan.io/metadata/ACSghPtkMLkZ7qP1Bw5nbFKhV8VtvfNaWDjbEoyo2XWt/logo.png",
    category: "meme",
  },
  {
    name: "Ponke (PONKE)",
    address: "AChYBCQ2TmwC9YHtmqYDzb81u8pack4xHWNChZUD45Py",
    logo: "https://tokenlist.atcscan.io/metadata/AChYBCQ2TmwC9YHtmqYDzb81u8pack4xHWNChZUD45Py/logo.png",
    category: "meme",
  },
  {
    name: "Pudgy Penguins (PENGU)",
    address: "ACUyHZC3C7H1Fh2153Zsw3Nb4zMaU8WzcotE7Wy7c8PJ",
    logo: "https://tokenlist.atcscan.io/metadata/ACUyHZC3C7H1Fh2153Zsw3Nb4zMaU8WzcotE7Wy7c8PJ/logo.png",
    category: "meme",
  },
  {
    name: "Mog Coin (MOG)",
    address: "ACDzGKPYEy9HG86iQH6Ye5PxHw4iKjpCgxDuw6rntBpz",
    logo: "https://tokenlist.atcscan.io/metadata/ACDzGKPYEy9HG86iQH6Ye5PxHw4iKjpCgxDuw6rntBpz/logo.png",
    category: "meme",
  },
  {
    name: "Cat in a Dogs World (MEW)",
    address: "ACuqDwT9BxAFLqvU1NTLN9Tag1oVDsWhvvCpvRZNpukN",
    logo: "https://tokenlist.atcscan.io/metadata/ACuqDwT9BxAFLqvU1NTLN9Tag1oVDsWhvvCpvRZNpukN/logo.png",
    category: "meme",
  },
  {
    name: "Potsdam Declaration (POTSDAM)",
    address: "AC4cDvBG1mmSgK9Ntv31NYBP6m64VxCxzF5MtnWgkUWF",
    logo: "https://tokenlist.atcscan.io/metadata/AC4cDvBG1mmSgK9Ntv31NYBP6m64VxCxzF5MtnWgkUWF/logo.png",
    category: "commemorative",
  },
  {
    name: "GoldenGoose Coin (GOLD)",
    address: "ACSPL8UeoW9xzE4EThQRAuGGTTzXp93k74Uv51zYwDbg",
    logo: "https://tokenlist.atcscan.io/metadata/ACSPL8UeoW9xzE4EThQRAuGGTTzXp93k74Uv51zYwDbg/logo.png",
    category: "meme",
  },
  {
    name: "Gigachad (GIGA)",
    address: "ACDtLDPG58KjXFxHnnvWh3kLGQicLc8HXoH11DzYgDYQ",
    logo: "https://tokenlist.atcscan.io/metadata/ACDtLDPG58KjXFxHnnvWh3kLGQicLc8HXoH11DzYgDYQ/logo.png",
    category: "meme",
  },
  {
    name: "Floki Inu (FLOKI)",
    address: "ACFbbZmrhuaUiREB4Nn8RjnnfZQnwPwy4ohDikb1fimX",
    logo: "https://tokenlist.atcscan.io/metadata/ACFbbZmrhuaUiREB4Nn8RjnnfZQnwPwy4ohDikb1fimX/logo.png",
    category: "meme",
  },
  {
    name: "Fartcoin (FARTCOIN)",
    address: "ACg9H7rfba8UGdi2PMzcBeEQShRRSKP4KLmcRh5tbDxH",
    logo: "https://tokenlist.atcscan.io/metadata/ACg9H7rfba8UGdi2PMzcBeEQShRRSKP4KLmcRh5tbDxH/logo.png",
    category: "meme",
  },
  {
    name: "Dogelon Mars (ELON)",
    address: "ACtTtKHDHtThjfM1wP4JooZ73Sc6nxZhGXaxB1cGEMBJ",
    logo: "https://tokenlist.atcscan.io/metadata/ACtTtKHDHtThjfM1wP4JooZ73Sc6nxZhGXaxB1cGEMBJ/logo.png",
    category: "meme",
  },
  {
    name: "Cheems (CHEEMS)",
    address: "ACPwgPCf9CQ2jwZLCDfURZUMDotg9WGpuBm5A2qC5gWs",
    logo: "https://tokenlist.atcscan.io/metadata/ACPwgPCf9CQ2jwZLCDfURZUMDotg9WGpuBm5A2qC5gWs/logo.png",
    category: "meme",
  },
  {
    name: "Dino (DINO)",
    address: "ACGNoNv5ACUuGRoDchy8JsciZ2NdZnmwmLr1sm6zGrH7",
    logo: "https://tokenlist.atcscan.io/metadata/ACGNoNv5ACUuGRoDchy8JsciZ2NdZnmwmLr1sm6zGrH7/logo.png",
    category: "meme",
  },
  {
    name: "Simons Cat (CAT)",
    address: "AC9WBrimDyrsd3tjisfXVkKo9afFyWuypuo5j87aBvP6",
    logo: "https://tokenlist.atcscan.io/metadata/AC9WBrimDyrsd3tjisfXVkKo9afFyWuypuo5j87aBvP6/logo.png",
    category: "meme",
  },
  {
    name: "Brett (BRETT)",
    address: "ACFgp1YmRNWWWcqLH6PMj7gC2F3YAj1my4nCraG1wjGH",
    logo: "https://tokenlist.atcscan.io/metadata/ACFgp1YmRNWWWcqLH6PMj7gC2F3YAj1my4nCraG1wjGH/logo.png",
    category: "meme",
  },
  {
    name: "Bonk (BONK)",
    address: "ACnFsThauYAscrsf7kAGxxckGb1NL2rN5JbaBtj9r3nz",
    logo: "https://tokenlist.atcscan.io/metadata/ACnFsThauYAscrsf7kAGxxckGb1NL2rN5JbaBtj9r3nz/logo.png",
    category: "meme",
  },
  {
    name: "Book of MEME (BOME)",
    address: "ACCmcFUxzdRCe8MytWG9ge5TWFNdbHXDRobNhs2QseGH",
    logo: "https://tokenlist.atcscan.io/metadata/ACCmcFUxzdRCe8MytWG9ge5TWFNdbHXDRobNhs2QseGH/logo.png",
    category: "meme",
  },
  {
    name: "BankrCoin (BNKR)",
    address: "ACLKYqsgkmaZXhxWGmcmbZy9wmXTfLq8562Ygq45Jd56",
    logo: "https://tokenlist.atcscan.io/metadata/ACLKYqsgkmaZXhxWGmcmbZy9wmXTfLq8562Ygq45Jd56/logo.png",
    category: "meme",
  },
  {
    name: "Bunny King (BUNY)",
    address: "ACVG36Y6xHY6iU1veoRuZncEg7qm6eKCmEXm6CwzYEEp",
    logo: "https://tokenlist.atcscan.io/metadata/ACVG36Y6xHY6iU1veoRuZncEg7qm6eKCmEXm6CwzYEEp/logo.png",
    category: "meme",
  },
  {
    name: "Stellar (XLM)",
    address: "ACvUUEqg3KJMFoikm3onEiho1oL78oLYvp5hyGHs6PjE",
    logo: "https://tokenlist.atcscan.io/metadata/ACvUUEqg3KJMFoikm3onEiho1oL78oLYvp5hyGHs6PjE/logo.png",
    category: "utility",
  },
  {
    name: "Wall Street ETF (WETF)",
    address: "ACpLzMNqb1yPXfGqrnGTV7SjCtDsGsW6ST9WXvx9Cx5m",
    logo: "https://tokenlist.atcscan.io/metadata/ACpLzMNqb1yPXfGqrnGTV7SjCtDsGsW6ST9WXvx9Cx5m/logo.jpg",
    category: "utility",
  },
  {
    name: "Virtual Protocol (VIRTUAL)",
    address: "ACPzGAaYcMcMoeT99fuC4U21j3AHStQdNVibwnKecAb",
    logo: "https://tokenlist.atcscan.io/metadata/ACPNtrhiQ86cGcfzdLaeMkSE6bNWQssf3ydya7mg9ndb/logo.png",
    category: "utility",
  },
  {
    name: "Uniswap (UNI)",
    address: "AC8BBu4F2v5c5twVkR7JByTpma6nR1qX8rzUz2WSZZjn",
    logo: "https://tokenlist.atcscan.io/metadata/AC8BBu4F2v5c5twVkR7JByTpma6nR1qX8rzUz2WSZZjn/logo.png",
    category: "utility",
  },
  {
    name: "Matic Token (MATIC)",
    address: "ACV9zpQqx3BgfqYdBaoWpAaoEFFU55HW6yFLU8iXzoRn",
    logo: "https://tokenlist.atcscan.io/metadata/ACV9zpQqx3BgfqYdBaoWpAaoEFFU55HW6yFLU8iXzoRn/logo.png",
    category: "utility",
  },
  {
    name: "Kaito (KAITO)",
    address: "ACG1KK1y29SxkuzcfuzCU7aJouoRyizbE6HiGj1JmxvM",
    logo: "https://tokenlist.atcscan.io/metadata/ACG1KK1y29SxkuzcfuzCU7aJouoRyizbE6HiGj1JmxvM/logo.png",
    category: "utility",
  },
  {
    name: "Peanut the Squirrel (PNUT)",
    address: "AC9nQgRdg8aetyvm1Nsm6mKBKgcqu6WadhsUYaVZx9xz",
    logo: "https://tokenlist.atcscan.io/metadata/AC9nQgRdg8aetyvm1Nsm6mKBKgcqu6WadhsUYaVZx9xz/logo.png",
    category: "meme",
  },
  {
    name: "Avalanche (AVAX)",
    address: "ACvVJ8ybccWnwSRpuzWpqqQwQkrmRUx3qXnQkHTHxyxZ",
    logo: "https://tokenlist.atcscan.io/metadata/ACvVJ8ybccWnwSRpuzWpqqQwQkrmRUx3qXnQkHTHxyxZ/logo.png",
    category: "utility",
  },
  {
    name: "American Coin® (AC)",
    address: "ACUtUZHXhmowvarHDMuVMfxTUUYJWkMr4BjEnfPFeV8w",
    logo: "https://tokenlist.atcscan.io/metadata/ACUtUZHXhmowvarHDMuVMfxTUUYJWkMr4BjEnfPFeV8w/logo.png",
    category: "utility",
  },
  {
    name: "Official Trump (TRUMP)",
    address: "ACYjBGNBLwrxX2yAQpDyeL8UXGuFMDBoFmWKfj3s8SmZ",
    logo: "https://tokenlist.atcscan.io/metadata/ACYjBGNBLwrxX2yAQpDyeL8UXGuFMDBoFmWKfj3s8SmZ/logo.png",
    category: "meme",
  },
  {
    name: "SPX6900 (SPX)",
    address: "ACp2rMrPfWmAMDaan1ksddeoRpY1N4s1seq639Zz2g3s",
    logo: "https://tokenlist.atcscan.io/metadata/ACp2rMrPfWmAMDaan1ksddeoRpY1N4s1seq639Zz2g3s/logo.png",
    category: "meme",
  },
  {
    name: "Ai16z (AI16Z)",
    address: "AC77LoWoNgCt2fDQ1eBtTsueMVtJ2ndRa6GMByGvWkC3",
    logo: "Asset/ai16z.png",
    category: "meme",
  },
  {
    name: "BRICS Coin (BC)",
    address: "ACCv9BaPmjfhB94SMvQ1qWRo4EZPijFkKJLNbATUYkYC",
    logo: "https://tokenlist.atcscan.io/metadata/ACCv9BaPmjfhB94SMvQ1qWRo4EZPijFkKJLNbATUYkYC/logo.png",
    category: "utility",
  },
  {
    name: "I Love You Coin (ILUC)",
    address: "ACGKw5MAmdaYHzYk5v8ahwzMFiCn7uUqRQ2HC3fFThB9",
    logo: "https://tokenlist.atcscan.io/metadata/ACGKw5MAmdaYHzYk5v8ahwzMFiCn7uUqRQ2HC3fFThB9/logo.png",
    category: "meme",
  },
  {
    name: "APEC Coin (APEC)",
    address: "ACj2r8Kk1hj8sLXtYw15TBCFCEQfGHuPKo5nXCFgz4wJ",
    logo: "https://tokenlist.atcscan.io/metadata/ACj2r8Kk1hj8sLXtYw15TBCFCEQfGHuPKo5nXCFgz4wJ/logo.png",
    category: "utility",
  },
  {
    name: "Roadrunner (RUN)",
    address: "ACfyyzDg7XX7XSkPK6VSmAEgrdVcLc77iKxZCwf5TEhb",
    logo: "https://tokenlist.atcscan.io/metadata/ACfyyzDg7XX7XSkPK6VSmAEgrdVcLc77iKxZCwf5TEhb/logo.png",
    category: "meme",
  },
   {
    name: "Drunk Raccoon (DRUNK)",
    address: "ACaXCarfhvkRUgRKMivTUSVPpa6FNUFanrwXNsDGJzzt",
    logo: "https://tokenlist.atcscan.io/metadata/ACaXCarfhvkRUgRKMivTUSVPpa6FNUFanrwXNsDGJzzt/logo.png",
    category: "meme"
  },
   {
    name: "Tiger Girl (TIGER)",
    address: "ACojQ8RC9oFWNVWpQNxaAj4GeEkKzB12c7sriLQz38yX",
    logo: "https://tokenlist.atcscan.io/metadata/ACojQ8RC9oFWNVWpQNxaAj4GeEkKzB12c7sriLQz38yX/logo.png",
    category: "meme"
  },
   {
    name: "AtlantisSpace (AS)",
    address: "ACRrsa3zQniNttRMnUynb9PAQkvX6xaQQypLKnGNwxnU",
    logo: "https://tokenlist.atcscan.io/metadata/ACRrsa3zQniNttRMnUynb9PAQkvX6xaQQypLKnGNwxnU/logo.png",
    category: "utility"
  },
   {
    name: "BIGGER",
    address: "ACDxEyjuqRzkL1bbtKeCCX3VU9DmWxKGux1geV8pyuf6",
    logo: "https://tokenlist.atcscan.io/metadata/ACDxEyjuqRzkL1bbtKeCCX3VU9DmWxKGux1geV8pyuf6/logo.png",
    category: "meme"
  },
   {
    name: "Atlantis Gold (AU)",
    address: "ACppX8Hct8QxrAGzcRYTyQ9hVK1qadZiXW4LbZ1S3NCS",
    logo: "https://tokenlist.atcscan.io/metadata/ACppX8Hct8QxrAGzcRYTyQ9hVK1qadZiXW4LbZ1S3NCS/logo.png",
    category: "utility"

  },
   {
    name: "Atlantis Oil (OIL)",
    address: "ACqrLsw5FZNDW2FjU1AKADYwQYrem61e9fUGt89Q4UFc",
    logo: "https://tokenlist.atcscan.io/metadata/ACqrLsw5FZNDW2FjU1AKADYwQYrem61e9fUGt89Q4UFc/logo.png",
    category: "utility"

  },
   {
    name: "CryptoLuck Games",
    address: "AC4GpohUNiFFJMHufJnxLsM7ziVpP6qVo23s55yMRgNC",
    logo: "https://tokenlist.atcscan.io/metadata/AC4GpohUNiFFJMHufJnxLsM7ziVpP6qVo23s55yMRgNC/logo.png",
    category: "utility"
  },
   {
    name: "Make Oil Great Again (MOGA)",
    address: "AC7v97VXL6VydnzMa51bFtGyUxjGunU5yjdbmiaqAxk3",
    logo: "https://tokenlist.atcscan.io/metadata/AC7v97VXL6VydnzMa51bFtGyUxjGunU5yjdbmiaqAxk3/logo.png",
    category: "meme"
  },
   {
    name: "Baby Doge Coin (BABYDOGE)",
    address: "AC4osRAvTDK9Af5A8Z64vryXGGdEN7M7eNWUE4ej4D3b",
    logo: "https://tokenlist.atcscan.io/metadata/AC4osRAvTDK9Af5A8Z64vryXGGdEN7M7eNWUE4ej4D3b/logo.png",
    category: "meme"
  },
   {
    name: "Monroe Doctrine (MONROE)",
    address: "ACdBCbVTqqSiLrAdBK2VjTD5TUGyHtJ5wtQkcuSwbH9N",
    logo: "https://tokenlist.atcscan.io/metadata/ACdBCbVTqqSiLrAdBK2VjTD5TUGyHtJ5wtQkcuSwbH9N/logo.png",
    category: "commemorative"
  },
   {
    name: "Trumpnomics (TN)",
    address: "ACG14qjSXyXSYgAwdfmcd79CruBnN3ozui6d18njR4v2",
    logo: "https://tokenlist.atcscan.io/metadata/ACG14qjSXyXSYgAwdfmcd79CruBnN3ozui6d18njR4v2/logo.png",
    category: "utility"
  }

];


// ================= NAVBAR =================
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

if (navbarToggle) {
  navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  });
}

// ================= SEARCH BAR =================
function insertSearchBar() {
  const searchArea = document.getElementById("searchArea");
  if (!searchArea) return;

  const wrapper = document.createElement("div");
  wrapper.className = "search-wrapper";

  const input = document.createElement("input");
  input.className = "search-input";
  input.id = "searchInput";
  input.placeholder = "Search token or contract...";
  input.addEventListener("keyup", filterAndSortTokens);

  wrapper.appendChild(input);
  searchArea.appendChild(wrapper);
}

// ================= DISABLE DRAG =================
function disableDrag() {
  document.querySelectorAll("img, a").forEach((el) => {
    el.setAttribute("draggable", "false");
    el.addEventListener("dragstart", (e) => e.preventDefault());
  });
}

// ================= RENDER TOKENS =================
function renderTokens(list = currentList) {
  const listArea = document.getElementById("tokenList");
  if (!listArea) return;

  const start = (currentPage - 1) * TOKENS_PER_PAGE;
  const end = start + TOKENS_PER_PAGE;
  const pageItems = list.slice(start, end);

  listArea.innerHTML = "";

  pageItems.forEach((t) => {
    listArea.innerHTML += `
      <div class="token-card">
        <div class="logo-text">
          <img src="${t.logo}" class="token-logo" draggable="false">
          <div class="token-name">${t.name}</div>
        </div>
        <div class="contract">${t.address}</div>
        <div class="button-row">
          <button class="btn" onclick="copyAddress('${t.address}')">Copy</button>
          <button class="btn" onclick="window.open('https://atcscan.io/address/${t.address}', '_blank')">ATCScan</button>
        </div>
      </div>
    `;
  });

  disableDrag();
  renderPagination(list);
}

// ================= PAGINATION =================
function renderPagination(list) {
  const pagination = document.getElementById("pagination");
  if (!pagination) return;

  pagination.innerHTML = "";

  const totalPages = Math.ceil(list.length / TOKENS_PER_PAGE);
  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;

    if (i === currentPage) btn.classList.add("active");

    btn.onclick = () => {
      if (currentPage === i) return;

      currentPage = i;
      renderTokens(currentList);

      const tokenSection = document.getElementById("tokenSection");
      const listArea = document.getElementById("tokenList");

      if (!tokenSection || !listArea) return;
      const rect = listArea.getBoundingClientRect();
      if (rect.top < 0) {
        tokenSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    pagination.appendChild(btn);
  }
}

// ================= FILTER & SORT =================
function filterAndSortTokens() {
  const searchValue = document.getElementById("searchInput")?.value.toLowerCase() || "";
  const category = document.getElementById("sortSelect")?.value || "default";

  let filtered;

  if (category === "default") {
    // Show all tokens for default
    filtered = [...tokens];
  } else {
    // Filter by category
    filtered = tokens.filter((t) => t.category === category);
  }

  // Apply search filter on top
  if (searchValue) {
    filtered = filtered.filter(
      (t) =>
        t.name.toLowerCase().includes(searchValue) ||
        t.address.toLowerCase().includes(searchValue)
    );
  }

  // Always sort A→Z
  filtered.sort((a, b) => a.name.localeCompare(b.name));

  currentPage = 1;
  currentList = filtered;
  renderTokens(filtered);
}


// Hook category change
document.getElementById("sortSelect")?.addEventListener("change", filterAndSortTokens);

// ================= COPY =================
function copyAddress(addr) {
  navigator.clipboard.writeText(addr);
  showCopied();
}

function showCopied() {
  let box = document.querySelector(".copy-alert");

  if (!box) {
    box = document.createElement("div");
    box.className = "copy-alert";
    box.textContent = "Copied!";
    document.body.appendChild(box);
  }

  box.classList.add("show");
  setTimeout(() => box.classList.remove("show"), 1500);
}

// ================= FOOTER =================
document.querySelectorAll(".footer-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const links = btn.nextElementSibling;
    links.style.display = links.style.display === "block" ? "none" : "block";
  });
});

// ================= CHAT =================
const openChat = document.getElementById("openChat");
const closeChat = document.getElementById("closeChat");
const chatbot = document.querySelector(".chatbot");
const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const chatHint = document.getElementById("chatHint");

openChat?.addEventListener("click", () => {
  chatbot.style.display = "flex";
  stopChatHints();
});

closeChat?.addEventListener("click", () => {
  chatbot.style.display = "none";
  startChatHints();
});

// ================= CHAT HINTS =================
const hintMessages = [
  "Ask me about Atlantis",
  "Atlantis Assistant here",
  "Need help with ATC-20?",
  "Check TPS, fees & stats",
  "Ask about DEX or Launchpad",
];

let hintIndex = 0;
let hintInterval = null;

function startChatHints() {
  if (hintInterval) return;
  hintInterval = setInterval(() => {
    if (chatbot.style.display === "flex") return;

    chatHint.textContent = hintMessages[hintIndex];
    chatHint.classList.add("show");

    setTimeout(() => chatHint.classList.remove("show"), 2000);
    hintIndex = (hintIndex + 1) % hintMessages.length;
  }, 3000);
}

function stopChatHints() {
  clearInterval(hintInterval);
  hintInterval = null;
  chatHint.classList.remove("show");
}

startChatHints();

/* ================= BOT ANSWERS ================= */
const answers = [
  {
    keywords: ["atlantis", "atlantischain"],
    reply:
      "AtlantisChain is a high-performance blockchain ecosystem built for ATC-20 tokens, DeFi, DEX, Launchpad solutions, stablecoins, and scalable Web3 applications.",
  },
  {
    keywords: ["tps", "transactions per second", "speed", "performance"],
    reply:
      "AtlantisChain delivers ultra-high performance with a peak capacity of 3.6M+ TPS, enabling fast and scalable on-chain activity.",
  },
  {
    keywords: ["block time", "confirmation time", "instant", "real time"],
    reply:
      "AtlantisChain features an ultra-fast block time of approximately 0.031 seconds, allowing near-instant transaction confirmations.",
  },
  {
    keywords: ["fees", "gas", "gas fee", "cost"],
    reply:
      "AtlantisChain offers near-zero gas fees, making transactions extremely cost-efficient for DeFi, trading, and memecoin usage.",
  },
  {
    keywords: ["atc-20", "atc20", "token", "token standard"],
    reply:
      "ATC-20 is the native token standard of AtlantisChain, an ultra-super-fast Layer-0 blockchain capable of 3,600,000 TPS with a 0.031-second block time. ATC-20 tokens are optimized for near-zero fees, high scalability, and real-time Web3, DeFi, and global commerce applications.",
  },
  {
    keywords: ["atc20 direct", "direct launch", "direct mint"],
    reply:
      "ATC-20 Direct enables instant token creation on AtlantisChain without complex smart contract deployment, simplifying project launches.",
  },
  {
    keywords: ["dex", "atlantis x", "swap", "trade"],
    reply:
      "Atlantis X is the official decentralized exchange of AtlantisChain, providing on-chain swapping and trading for ATC-20 tokens.",
  },
  {
    keywords: ["launchpad", "wtf", "memecoin", "meme"],
    reply:
      "Atlantis WTF Launchpad is a no-code platform that allows users to launch ATC-20 memecoins quickly and easily.",
  },
  {
    keywords: ["usda", "stable", "stablecoin"],
    reply:
      "USDA is the native stablecoin of AtlantisChain, designed for price stability, fast settlements, and low-cost transactions.",
  },
  {
    keywords: ["wallet", "wallet support", "address"],
    reply:
      "Atlantis Wallet is the official cold wallet of AtlantisChain, secured by the proprietary Atlantis QuantumLock™ system, eliminating traditional private keys and outdated security models.",
  },
  {
    keywords: ["presale", "max", "max presale"],
    reply:
      "MAX Presale provides early access to selected Atlantis ecosystem tokens and supports long-term ecosystem growth.",
  },
  {
    keywords: ["security", "safe", "secure"],
    reply:
      "AtlantisChain prioritizes security, transparency, and verifiable on-chain data through its core infrastructure and tools.",
  },
  {
    keywords: ["bridge", "cross-chain", "cross chain"],
    reply:
      "AtlantisChain is expanding toward cross-chain integrations to enable seamless asset transfers across multiple blockchains.",
  },
  {
    keywords: ["utility", "utility token"],
    reply:
      "ATC-20 utility tokens power applications, services, governance, and incentives across the AtlantisChain ecosystem.",
  },
  {
    keywords: ["governance", "vote", "dao"],
    reply:
      "Governance on AtlantisChain allows token holders to participate in ecosystem decisions through ATC-20-based mechanisms.",
  },
  {
    keywords: ["airdrops", "airdrop", "rewards"],
    reply:
      "AtlantisChain periodically offers rewards and airdrops through ecosystem campaigns and community events.",
  },
  {
    keywords: ["staking", "stake", "earn"],
    reply:
      "Staking within the Atlantis ecosystem allows users to earn rewards while supporting network participation and growth.",
  },
  {
    keywords: ["liquidity", "lp", "liquidity pool"],
    reply:
      "Liquidity pools on Atlantis X improve trading efficiency and reward users who provide liquidity.",
  },
  {
    keywords: ["developers", "build", "developer"],
    reply:
      "AtlantisChain provides a developer-friendly environment for building dApps, tokens, and DeFi protocols using ATC-20.",
  },
  {
    keywords: ["nft", "nfts"],
    reply:
      "AtlantisChain supports NFT creation and trading, enabling digital asset ownership within the ecosystem.",
  },
  {
    keywords: ["roadmap", "future", "plans"],
    reply:
      "The AtlantisChain roadmap focuses on scalability, ecosystem expansion, and advanced DeFi infrastructure.",
  },
  {
    keywords: ["community", "users"],
    reply:
      "AtlantisChain is supported by a growing global community of users, developers, and ecosystem contributors.",
  },
  {
    keywords: ["exchange", "cex", "listing"],
    reply:
      "Atlantis ecosystem tokens aim for broader adoption through decentralized exchanges and future centralized listings.",
  },
  {
    keywords: ["blocks", "total blocks", "network activity"],
    reply:
      "AtlantisChain has produced over 470 million blocks in just 179 days, demonstrating strong network activity and stability.",
  },
  {
    keywords: ["atcscan", "explorer", "scan"],
    reply:
      "ATCScan(atcscan.io) is the official blockchain explorer for AtlantisChain, used to monitor transactions, blocks, tokens, and wallets.",
  },
  {
    keywords: ["why atlantis", "why atlantischain"],
    reply:
      "AtlantisChain combines ultra-high TPS, near-zero gas fees, and ultra-fast block times, making it ideal for DeFi, DEX, and ATC-20 projects.",
  },
  {
    keywords: ["network", "mainnet", "stats", "chain stats"],
    reply:
      "AtlantisChain mainnet statistics include 3.6M+ TPS peak, 0.031-second block time, near-zero gas fees, and hundreds of millions of blocks produced.",
  },
  {
    keywords: ["support", "help"],
    reply:
      "For official support, updates, and announcements, always follow AtlantisChain’s verified communication channels.",
  },
];

function botReply(message) {
  const msg = message.toLowerCase();
  for (let item of answers) {
    if (item.keywords.some((k) => msg.includes(k))) return item.reply;
  }
  return "Sorry, I didn’t understand that. Please ask about AtlantisChain, ATC-20, DEX, Launchpad, or USDA.";
}

sendBtn?.addEventListener("click", sendMessage);
userInput?.addEventListener("keypress", (e) => { if (e.key === "Enter") sendMessage(); });

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  chatBody.innerHTML += `<div class="user-msg">${text}</div>`;
  userInput.value = "";

  setTimeout(() => {
    const reply = botReply(text);
    chatBody.innerHTML += `<div class="bot-msg">${reply}</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);
}

// ================= INIT =================
insertSearchBar();
currentList = [...tokens].sort((a, b) => a.name.localeCompare(b.name));
renderTokens(currentList);
disableDrag();