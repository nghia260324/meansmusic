// To add more song, just copy the following code and paste inside the array
//   {
//     name: "Here is the music name",
//     artist: "Here is the artist name",
//     img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
//     src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
//   }
//paste it inside the array as more as you want music then you don't need to do any other thing
let allMusic = [
  {
    name: "1. WHY DO I FT. SWEET BUT PSYCHO",
    artist: "Mean Music",
    img: "https://avatar-nct.nixcdn.com/song/2023/01/05/c/a/8/d/1672904050958.jpg",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX19Xqg50kchkztZvdPnPOPSUzyLExYZsS0WJ6QDxxCgINCocMAVnqINvnPQpt7nzRx6voDpizyVrS3OGKjC4bAnnwk%2bT%2fNVkSgx%2fFKxXE6qojpsZtw%2fa%2fNUQfB33DpPKOaU9it4%2b%2fChNpOi9vSjArc%2fAyWBIYLEXYZUlft2rIU2SPKLG6KirmeblVMrDxsZSHfc6XboX2Y0YyEdpUHBWHjtjEx7RvoW0JoY%3d&s=youtube&id=&h=1708362620807614323",
    index: "s1"
  },
  {
    name: "2. Wehenkend x Ngẫu Hứng",
    artist: "Mean Music",
    img: "./assets/img/site.png",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX18NSk2osGPhdz2zRrg2iqBJL9D4xZNVhQYBwlAogJFSZhl4abHUvOLu5ECbIr8tV%2bJfR94zMAt3lLAtKcdiKzQK1Uu3cTZxxvsDxdgUNUwVfqMHHFkqVugKlgu388v2bhj8ax7FpuehJzNhaaepfIB7wmOlMG27tWleXz%2fpTyGL1JPQRXZ59oksPi%2fvARxco2Xx6HelqEe4MeOUeuA1u21dIiSfL0cUPNXyBO5490ndMNTSxheFmojz&s=youtube&id=&h=1708362620807614323",
    index: "s2"
  },
  {
    name: "3. The Ocean ft Walk Thru Fire",
    artist: "Thereon Remix",
    img: "https://i.ytimg.com/vi/T7HyxZNzi7s/maxresdefault.jpg",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX1%2fZ7ZXion3UMEr78MGhZ8LHr0BlKTQS6izOAX%2bnGFbmaiOFxDQ6SVGtmjOT0cDGVkfeA8vqTxagm35IZRM%2boIj6agv2OHjPAxTBQkU3uGVrWfTPfOWjOc%2fZWAFXPalft0lgo5w%2btE1YT9ORNb4%2bpqfmWSXVuSCPAX7uQoTrspYOt4m7N9bptYDb0gNOMe6LtEGD9jzRryjofR6gpga8AnsFDiSlufUXeZ4%3d&s=youtube&id=&h=1708362620807614323",
    index: "s3"
  },
  {
    name: "4. Là Anh",
    artist: "Phạm Lịch",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzkXQi-QP1jzDFx5xNqCqypoWot3pHR1vHWg&usqp=CAU",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX1%2bwT89EzCr6P2F%2b3r1vnTialn0L03h2RG%2bz3e0a3cQHpW5mkcmcBKqpwM4mJid16PqwtjDpiLTrg6hLgoTYoWUhRU740Amb9SNq6GmMi8W7tyhGuRtI%2bilV3QOO4DyZhZhHuMVVdS8Zc53wK9uLQaBKdEzItgPnZ37N1nB09Z61%2fvELctuDpgk7&s=youtube&id=&h=1708362620807614325",
    index: "s4"
  },
  {
    name: "5. Nevada",
    artist: "Vicetone",
    img: "https://i.ytimg.com/vi/ycOm6wFxMhQ/maxresdefault.jpg",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX18HNpkwptBKBEuPvjQklnGL6QidHk1bILkR9Wcl2kJl%2bS0AXGxuSumzjjtdj4BS79C4NsSIJ1JneNkl1H0tdU8Vs0tBNWUNxzNeB6d3i1op2GlEm5XGskoe%2fROnKr249z%2bw54f30r9jVtt8ifjuv%2f%2fnZuzh92JtVF4%3d&s=youtube&id=&h=1708362620807614323",
    index: "s5"
  },
  {
    name: "6. RetroVision & Domastic - SICC",
    artist: "NCS Release",
    img: "https://i1.sndcdn.com/artworks-000222434012-2yqck6-t500x500.jpg",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX1%2bYlItUsxXctJYODWHjxuLObzz%2fpWZPtHQEgSvjWaFxswZNaeB1X0cJ%2b9P%2bfq%2f74EB3lXt2ANzM9rDm3HZWmXdjjBsn4p2aSlOfKr5siXT5UZCDfAuvoFvuRSg%2fcbTrORDp0%2bBE%2f1QTV0tMvcLYv16F9SHTKe9TdGk%3d&s=youtube&id=&h=1708362620807614323",
    index: "s6"
  },
  {
    name: "7. JJD - Aeon",
    artist: "JJD",
    img: "https://i.scdn.co/image/ab67616d0000b27326ce0d1f40f6867bf49ea36c",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX1%2bZLT0mA0Y67iAQAr3ocNkUj3F0nY8bnUlLAYHexRhLgkt3cXucGCevl2XF185neIiCrhgfl3K6pGD4rc7Q52McLOUgf5CLSuWqwJOYx0jFXZqmbypQz0yf&s=youtube&id=&h=1708362620807614323",
    index: "s7"
  },
  {
    name: "8. Trap Queen Remix - Adriana Gomez",
    artist: "Zoverze Remix",
    img: "https://i.ytimg.com/vi/NQ-yvkrETZc/maxresdefault.jpg",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX1%2b%2bbB4WmbXdTVAjjRLESzTtq7EB3dWw5KLDwpp5bTvn6gadj03b6WBuimknW4rIfzmSGlEkBvPN42pAshmwQX1Y1NurZfZDbGL3bm2uiR78RXed7l6Q4yWQgt6u%2bD505XKOY5j6XfZkjVOMvfQ2xQm7Hxh77ZoqGYdMd0yT4633aWJYarbtd9Tt&s=youtube&id=&h=1708362620807614323",
    index: "s8"
  },
  {
    name: "9. Keep Me Mine",
    artist: "Haozi Remix",
    img: "https://i.ytimg.com/vi/WicYZ2F5Q-A/maxresdefault.jpg",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX1%2bM9MHjXeZpTxXM900GgXqEnNBcphk5UzA7m7BsBcGgbbJ7NMUwiyJ24tJ7YGUKixESV85oS7XcFlG5VXugPh5SW7ktSqULSfjdeI1hyKfI8vt2y2w1JiS4fmTmgkPedD2bWFwFtpSs5TJ2VAqrHBO5kVGluBheffz%2fjpAwDINubjYHzGC1VeIRdNH23huOSgN%2b6Bg4eMPI7w%3d%3d&s=youtube&id=&h=1708362620807614323",
    index: "s9"
  },
  {
    name: "10. I Want You To Know Remix",
    artist: "Steve James Remix",
    img: "https://bythewavs.com/wp-content/uploads/2015/06/artworks-000120424224-9xkbkv-original-1024x1024.jpg",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX1%2b7g1ctaCbh6UgVPWYTKxV5LNBKn%2fn5sJiNN2weRz5zw2jZjZBFovaXrySbBemYMgiJgtg0LHieDJ3haDtPsJNldCRMmFDRhRHndeliDYOiqN7ypY5XnBV39bT7RZWAagDJKmS2mV6%2f6924%2bjkx8ucSEFUzsDl7T4m9cFBiiHvjtbszZWkzY1bVi1H34eaaIeLVfadltAhoSame3OhaiCYaluVQD9cBg%2bg%3d&s=youtube&id=&h=1708362620807614323",
    index: "s10"
  },
];

let mainMusic = [
  {
    name: "I Do",
    artist: "911",
    img: "https://avatar-ex-swe.nixcdn.com/playlist/2014/02/11/2/e/c/a/1392055328412_500.jpg",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX1%2b82Q3T2VSRHNiDDOZ2AXNuzSiz%2fN98Ku74YvyBllJJPoh8xxI01Kb3so1%2b6aPHyDCHfB4HkSzVfRUjghovRwLVH3n1YXmAf17J8nkHvAEiQtUZo00pwOYQe2f9JUJVElOOkdKVfvpr9A%3d%3d&s=youtube&id=&h=1708362620807614325",
    index: "s1",
  },
  {
    name: "Đào Nương",
    artist: "Mean Music",
    img: "https://i.ytimg.com/vi/1Gt2m3qBG8U/maxresdefault.jpg",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX1%2fpbGgpBoPcSp8jA%2fseDp86xCriW8KbyCwnv3YC7WkP%2fEiT7thGE%2bU6R4lvQAOPLwKQnfwOGBACMu6ppjOrovBkrwKg0F8qbmHB6Yzr2D3LGTj8haBgWggHZjCg8J4OMyM24i8e%2bQ9fv4KZELpMCfHvogFUcaf8f7K4mN%2bcDQwfMWWEfzUy0kEMlAhilsouQ3e6tyFtHO0v4g%3d%3d&s=youtube&id=&h=1708362620807614325",
    index: "s2",
  },
  {
    name: "Forever Young - Rawi Beat",
    artist: "Slow Remix",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeWmUg8aF4sqEEB0aSw73oa3hDYqJ5mu9EA&usqp=CAU",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX18Hf1tmtvB0d7dp8fAJsmPYO637feOFO%2b13Djy%2bKyiEITGp6yajQVI%2bY2hwuO%2bnr8qay8M4sFRiUo4O%2bxLoP%2fyF86%2bKHYPK0TTRggxWZlgSkrznnYSpIBGbOAuwDYwny28%2bC8LX7kHypGwkYMKEcljIxK%2fCTqJu3LPP1T8i3I%2fxl9XrVygsQ8v4&s=youtube&id=&h=1708362620807614325",
    index: "s3",
  },
  {
    name: "William Black - Deep Blue",
    artist: "Mean Music",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexzWQCX6BlACpbi2z2LvfKkUL2ACf1-jq1A&usqp=CAU",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX1%2f0MhoFmALCg7OS%2bcvHCvVD5mVYR8aBIBgAKfjvWovQwP%2fRxSokhDv3ORzbYbMtyiqBdbeb8F1%2bxcptSjJMd%2ftQRqUeWk%2f%2bNqY%3d&s=youtube&id=&h=1708362620807614325",
    index: "s4",
  },
  {
    name: "Miles Away - Bring Me Back",
    artist: "Mean Music",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQI7rOQHSo4UApNjs_pccetpRgXxB49tmW1UhsNvEPVYjI4iupIl2N6xM4YtOQUMb37k&usqp=CAU",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX1%2fYtzPELMM0FTwiFhYbdfEMhY4kGC5x8YApdB3Takg7NRU%2fuHmPM5ReRPY5kXapW0CyzvR9o6w3tmG43%2f6j0Ymzx2ZAJMcmjnPKUMSwLr8RR92IrIC4eikuhDkb3NrV5P5zJGvar5slpqqc9YbsNGtTT5MpjU9WhiTVhDx9ju0vmY4SsARQsX2nF3xoN%2bE6aj7A%2fIJCvslc5A%3d%3d&s=youtube&id=&h=1708362620807614325",
    index: "s5",
  },
  {
    name: "WITH YOU (NGẪU HỨNG)",
    artist: "HOAPROX",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKzkhV9ZhhQBYjx9_7AxZSqBNn95ynLLHpA&usqp=CAU",
    src: "https://x2convert.video/Thankyou?token=U2FsdGVkX1%2b64lkcrpL32uOZZvlt4TQVfDiGs9jl8tm7jemTc5QCdZQE29isy%2fDXwpOIaGu2QuWDDBiO95jx5%2fLGr%2fB0UyxEBPr0Mtv9CWHcP%2f9IR2s3J7bZeTVuJ0xE%2bCRoUAQyai3WSs4ZUJ9nx5P02zym9tRLYZBejWuCn5G4hSUytKD7nPuMCj63yKIR&s=youtube&id=&h=1708362620807614325",
    index: "s6",
  },
  // {
  //   name: "Hardwind - Want Me",
  //   artist: "Mike Archangelo",
  //   img: "music-4",
  //   src: "music-4",
  //   index: "s7",
  // },
  // {
  //   name: "Hardwind - Want Me",
  //   artist: "Mike Archangelo",
  //   img: "music-4",
  //   src: "music-4",
  //   index: "s8",
  // },
  
];
let chillMusic = [
  {
    name: "William Black - Deep Blue",
    artist: "William Black",
    img: "",
    src: ""
  },

];

