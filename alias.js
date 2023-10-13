module.exports = {
 resolve: {
  alias: {
   "@/": path.resolve(__dirname, "./src/"),
   "@/styles/abstracts/mixins": path.resolve(
    __dirname,
    "./src/styles/abstracts/mixins"
   ),
   // "@/styles/*": path.resolve(__dirname, "./src/styles/*"),
  },
 },
};
