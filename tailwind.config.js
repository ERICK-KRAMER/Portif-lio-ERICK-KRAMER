/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'baner': 'url("https://media-public.canva.com/Aj5P0/MAEF_lAj5P0/1/s.jpg")',
        'baner2': 'url("./public/baner.png")',
        'bane3': 'url("./public/baner2.png")',
        'banerTest': 'url("https://media.canva.com/1/image-resize/1/550_401_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9KN2xyUS9NQUdGQ21KN2xyUS8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAAazKL3x9NSzzlewzT6JnmMp-nU2D_TEL9isBdXraKOT&exp=1715555353&x-canva-quality=thumbnail_large&x-canva-subsampling=T&csig=AAAAAAAAAAAAAAAAAAAAAE0aOvDkwcPfxSOAWR_khFfGkuZ0sR3WG7MHfejLBjE4")',
        'banerPath' : 'url("public/pexels-felixmittermeier-1146134.jpg")'

      },
      backgroundColor: {
        'primary': '#0102',
      }
    },
  },
  plugins: [],
}