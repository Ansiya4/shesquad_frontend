import withMT from "@material-tailwind/react/utils/withMT";

const config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default withMT(config);
