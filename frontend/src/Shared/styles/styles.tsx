export const inputStyle =
  "block w-full pl-10 pr-10 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent disabled:opacity-50";
export const formInputStyle = ({
  errors,
}: {
  errors: Record<string, string>;
}) =>
  `block w-full pl-10 pr-3 py-3 bg-white/5 text-black border ${
    errors.title ? "border-status-danger" : "border-black"
  } rounded-lg placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50`;
